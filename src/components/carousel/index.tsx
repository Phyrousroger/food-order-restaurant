"use client";
import React from "react";
import section from "@/assets/seafood-pizza-removebg-preview.png";
import Image from "next/image";
import { useState } from "react";

const CarouselSlide = () => {
  const [current, setCurrent] = useState();
  return (
    <div className=" overflow-hidden relative">
      <div className=" flex">
        <Image src={section} width={400} height={400} alt="" />
        <Image
          src="https://www.themealdb.com/images/ingredients/Lime.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default CarouselSlide;
