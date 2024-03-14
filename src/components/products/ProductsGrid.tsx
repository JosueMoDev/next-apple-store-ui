import { ProductGridItem } from "./ProductGridItem";
import { getProductsQuery } from "@/actions/product/getProducts";

export const ProductsGrid = async () => {
  const { products } = await getProductsQuery();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 mb-10">
      {products.map((product: any) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
