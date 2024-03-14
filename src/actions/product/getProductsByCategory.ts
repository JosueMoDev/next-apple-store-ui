"use server";
import { Product } from "@/interfaces/product.interface";
import apolloClient from "@/lib/apollo-client";
import { gql } from "@apollo/client";
const GET_PRODUCT = gql`
  query ProductsByCategory($category: String!) {
    productsByCategory(category: $category) {
      id
      name
      description
      slug
      price
      subCategory {
        id
        name
        slug
        gender
        isActive
        category {
          id
          name
        }
      }
      stockByColor {
        id
        color {
          id
          name
          hexadecimalColor
          release
        }
        stock
      }
      picturesByColor {
        color
        productPictures {
          id
          url
        }
      }
      chip {
        id
        chipFamilyName
        gama
        name
        storageOnChip {
          id
          storage {
            id
            capacity
            capacityOn
          }
          price
        }
        unifedMemoryOnChip {
          id
          unifiedMemory {
            id
            capacity
          }
          price
        }
        configOnChip {
          id
          gpu {
            id
            cores
          }
          cpu {
            id
            cores
          }
          neuralEngine
          price
        }
      }
    }
  }
`;

export async function getProductByCategoryQuery(category: string) {
  const { data } = await apolloClient.query<{ productsByCategory: Product[] }>({
    query: GET_PRODUCT,
    variables: {
      category,
    },
  });

  const { productsByCategory } = data;
  return { products: productsByCategory ?? [] };
}
