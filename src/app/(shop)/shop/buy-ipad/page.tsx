"use server";
import { getProductByCategoryQuery } from "@/actions";
import { ProductGridItem } from "@/components";
export default async function BuyIpadPage() {
  const { products } = await getProductByCategoryQuery('IPAD');
    console.log(products);
  return (
    <>
      <h1>Buy iPad</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 mb-10">
        {products.map((product: any) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

