"use client";

import Link from "next/link";

import { ProductImage } from "@/components/product-image/ProductImage";
import { Product } from "@/interfaces/product.interface";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-xl">
      <div className="prod-title">
        <Link
          className="text-2xl text-gray-900 font-semibold"
          href={`/product/${product.slug}`}
        >
          {product.name}
        </Link>
      </div>
      <div className="prod-img">
        <Link href={`/product/${product.slug}`}>
          <ProductImage
            src={product.picturesByColor[0].productPictures[0].url}
            width={400}
            height={400}
            alt={product.name}
            className="mr-5 rounded"
          />
        </Link>
      </div>
      <div className="prod-info grid gap-10">
        <div>
          <ul className="flex flex-row justify-center items-center">
            {product.stockByColor.map(({ color }, key) => (
              <li className="mr-4 last:mr-0" key={key}>
                <span className="block p-1 border-gray-500 rounded-full transition ease-in duration-300">
                  <span
                    className={`block w-4 h-4 rounded-full`}
                    style={{ backgroundColor: color.hexadecimalColor }}
                  ></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="text-sm"> From ${product.price}</p>
          <button className="px-5 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-500 focus:outline-none">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
   
