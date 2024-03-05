// 'use client';
'use server';
// import { getProductsBySubCategory } from "@/actions";
import { Products } from "./component/Products";

export default async function ProductBySlubCategoryPage() {
  // const products = await getProductsBySubCategory();
   

  return (
    <>
      <div>
        <h1>Data form Database</h1>
        {/* <p className="text-2xl text-white">{JSON.stringify(products)}</p> */}
      </div>
      <div>
        <h1>Data form Graphql Endpoint</h1>
        <Products></Products>
      </div>
    </>
  );
}
