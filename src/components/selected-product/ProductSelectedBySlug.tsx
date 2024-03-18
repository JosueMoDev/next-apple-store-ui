import { Product } from "@/interfaces/product.interface";
import { PicturesSlide } from "./PicturesSlide";

interface props {
  product: Product
}
export const ProductSelectedBySlug = async ({ product }: props) => {
 
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 px-10">
        <div className="mt-5 mb-20 grid space-x-10 grid-cols-2 ">
          <div className="col-span-1">
            <PicturesSlide
              picturesByColor={product.picturesByColor}
              name={product.name}
            />
          </div>
          <div className="col-span-1">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              Customize Your {product.name}
            </h2>

            <div className="flex py-4 space-x-4">
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
