import { getProductBySlugQuery } from "@/actions";
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
      <h3 className="text-3xl mb-10">{ product.name }</h3>
    </div>
  );
}
