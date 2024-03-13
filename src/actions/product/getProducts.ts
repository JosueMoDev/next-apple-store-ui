"use server";
import { Product } from "@/interfaces/product.interface";
import apolloClient from "@/lib/apollo-client";
import { gql } from "@apollo/client";
const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      description
      slug
      price
      subCategory {
        name
        id
        slug
        gender
        isActive
        category {
          id
          name
        }
      }
      stockByColor {
        stock
        color {
          name
          id
          hexadecimalColor
          release
        }
        id
      }
      picturesByColor {
        productPictures {
          id
          url
        }
      }
      chip {
        name
        id
        chipFamilyName
        gama
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

export async function getProductsQuery() {
  const { data } = await apolloClient.query<{ products: Product[] }>({
    query: GET_PRODUCTS,
  });

  const { products } = data;
  return { products: products ?? [] };
}
