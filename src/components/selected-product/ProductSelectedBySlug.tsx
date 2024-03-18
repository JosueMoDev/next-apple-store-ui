"use client"
import { Product } from "@/interfaces/product.interface";
import { PicturesSlide } from "./PicturesSlide";
import { useState } from "react";

interface props {
  product: Product
}
export const ProductSelectedBySlug = ({ product }: props) => {
 const [selectedOption, setSelectedOption] = useState("");
console.log(selectedOption);
 const handleOptionSelect = (option: any) => {
   setSelectedOption(option);
 };
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

            <div className="flex w-full  py-4 space-x-4">
              <div className="grid flex-wrap gap-4 w-full">
                {product.chip?.storageOnChip.map(({ id, storage }) => (
                  <button
                    key={id}
                    className={`px-2 py-4 border w-full rounded-md ${
                      selectedOption === id
                        ? "border-blue-500"
                        : "border-gray-200"
                    } `}
                    style={{display: "block" }}
                    onClick={() => handleOptionSelect(id)}
                  >
                    <div className="mx-auto px-3 flex items-center justify-start">
                      {`${storage?.capacity} ${storage?.capacityOn} SSD storage`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

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
  );
};
