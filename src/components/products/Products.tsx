"use client";
import { useQuery, gql } from "@apollo/client";

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
        gender
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
export const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log({
    loading: loading,
    error: error,
    data: data,
  })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <p className="text-2xl text-white">{JSON.stringify(data)}</p>;
};
