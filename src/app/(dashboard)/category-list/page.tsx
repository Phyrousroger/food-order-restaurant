import { getCategory } from "@/lib/store/server/category/queries";
import React from "react";

const CategoryList = async () => {
  const category = await getCategory();
  console.log(category);
  return (
    <main className=" mt-10 h-screen">
      <h1 className=" text-center text-4xl font-bold">
        You can order this food Category List!
      </h1>
    </main>
  );
};

export default CategoryList;
