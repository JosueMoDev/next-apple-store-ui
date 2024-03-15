import { getProductBySlugQuery } from "@/actions";
import { ProductSelectedBySlug } from "@/components";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const { product } = await getProductBySlugQuery(slug);
  if (!product) {
    notFound();
  }
  return (
    <div>
      <ProductSelectedBySlug product={ product } />
    </div>
  );
}
