'use server';
import { gql } from "@apollo/client";
import apolloClient from "@/lib/apollo-client";

interface Category {
    id: string;
    name: string;
}

const CATEGORIESQUERY = gql`
  query Categories {
  categories {
    id
    name
  }
}
`;
export async function getCategoriesQuery() {
  const { data } = await apolloClient.query<{ categories: Category[]}>({ query: CATEGORIESQUERY,});
  const { categories } = data;
  return { categories };
}
