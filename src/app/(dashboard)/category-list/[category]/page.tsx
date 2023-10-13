import { Button } from "@/components/ui/button";
import {
  getCategory,
  getMealByCategory,
} from "@/lib/store/server/category/queries";
import Image from "next/image";

import React from "react";

const CategoryItem = async ({ params }: { params: { category: string } }) => {
  const mealItem = await getMealByCategory(params.category);
  console.log(mealItem.meals);
  const category = await getCategory();

  const filterCategory = category?.categories.filter((categoryName) => {
    return categoryName.strCategory === params.category;
  });

  const { strCategory, strCategoryDescription } = filterCategory[0];

  return (
    <div>
      <div className=" text-center border-2 p-5 mt-10">
        <h1 className=" text-3xl font-semibold text-white">{strCategory}</h1>
        <p className=" font-sans text-gray-600 font-bold">
          {strCategoryDescription}
        </p>
      </div>
      <h1 className=" text-xl my-10">Today {strCategory} menu is here!</h1>
      <div className=" grid grid-cols-6 place-items-center gap-5">
        {mealItem.meals.map((meal, index) => (
          <div
            key={index}
            className=" relative h-96 group w-full rounded-lg cursor-pointer overflow-hidden "
          >
            <Image
              src={meal.strMealThumb}
              alt=""
              width={"200"}
              className=" hover:scale-105 w-full transition-transform duration-300 h-full  absolute z-0 mx-auto"
              height={200}
            />
            {/* <div className=" absolute group-hover:flex text-center justify-center group-hover:items-center flex-col  h-0 group-hover:h-1/2  w-full bg-black bg-opacity-40 ease-in-out  z-10 duration-700 group-hover:transition-all bottom-0 "> */}
            <div className=" absolute bottom-0 gap-2 translate-y-32 group-hover:transition-all duration-500 group-hover:translate-y-0 ease-in h-1/3 bg-opacity-40  bg-black flex justify-center w-full items-center flex-col">
              <h1 className=" text-center text-white font-bold">
                {meal.strMeal}
              </h1>
              <Button className="">See Deatil</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
