import { getProductsBySubCategory } from "@/actions";

export default async function ProductBySlubCategoryPage() {
  const products = await getProductsBySubCategory();
  return (
    <p className="text-2xl text-white">
      {JSON.stringify(products)}
    </p>
  );
}
