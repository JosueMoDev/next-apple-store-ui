"use client";
import { useQuery, gql } from "@apollo/client";
import { ProductGridItem } from "./ProductGridItem";
import { Product } from "@/interfaces/product.interface";

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
export const ProductsGrid = () => {
  const { loading, error, data } = useQuery<{ products: Product[] }>(
    GET_PRODUCTS
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
     <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
       {data?.products.map(( product: any ) => (
         <ProductGridItem key={ product.slug } product={product} />
       ))}
     </div>
  );
};
