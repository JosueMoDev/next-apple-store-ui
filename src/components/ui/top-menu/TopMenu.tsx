'use server';
import Link from "next/link"
import { getCategoriesQuery } from "@/actions";


export const TopMenu = async () => {
    const { categories } = await getCategoriesQuery();
    return (
      <nav className="container mx-auto px-6 py-3">
        <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden flex">
          {categories.map((category) => (
            <Link
              className="text-sm text-gray-700  leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
              href="#"
              key={category.id}
            >
              { category.name }
            </Link>
          ))}
        </div>
      </nav>
    );
}