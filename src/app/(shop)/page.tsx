export const revalidate = 3600; // 60 segundos

import { ProductsGrid } from "@/components";
import { redirect } from "next/navigation";


interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home() {
//   const page = searchParams.page ? parseInt(searchParams.page) : 1;

//   const { products, currentPage, totalPages } =
//     await getPaginatedProductsWithImages({ page });

//   if (products.length === 0) {
//     redirect("/");
//   }

  return (
    <>
      <h1 className="mb-2"> TODOS LOS PRODUCTOS</h1>
      <ProductsGrid  />    
    </>
  );
}
