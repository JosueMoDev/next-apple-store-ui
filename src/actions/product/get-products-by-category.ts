"use server";

import prisma from "@/lib/prisma";

export const getProductsBySubCategory = async () => {
  try {
    return await prisma.product.findMany({});
  } catch (error) {
    console.log(error);
    return null;
  }
};
