import Link from "next/link";
import { getCategoriesQuery } from "@/actions";

export const TopMenu = async () => {
  const { categories } = await getCategoriesQuery();
  return (
    <nav className="w-full  px-6 py-1 justify-center">
      <div className="mx-2 flex justify-center">
        <div className="mt-3 py-3  overflow-y-auto whitespace-no-wrap scroll-hidden flex">
          <Link
            className="text-sm text-gray-700  leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            apple
          </Link>
          {categories.map((category) => (
            <Link
              className="text-sm text-gray-700  leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
              href="#"
              key={category.id}
            >
              {category.name}
            </Link>
          ))}
          <Link
            className="text-sm text-gray-700  leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            cart
          </Link>
          <Link
            className="text-sm text-gray-700  leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
