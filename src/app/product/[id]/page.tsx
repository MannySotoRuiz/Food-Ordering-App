"use client";

import Image from "next/image";
import { useState } from "react";
// import { FC } from "react";

// interface pageProps {}

export default function ProductPage() {
  const [size, setSize] = useState<number>(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.99, 23.99, 27.99],
    desc: "Lorem impsum dolor sit amet consectetur adipiscing elit.",
  };

  return (
    <div className="h-[calc(100vh-100px)] flex">
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          <Image
            src={pizza.img}
            alt=""
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      </div>
      <div className="flex-1 p-[20px]">
        <h1 className="block text-[2em] my-[0.67em] mx-0 font-bold">
          {pizza.name}
        </h1>
        <span className="text-[#d1411e] text-[24px] font-normal border-b border-b-[#d1411e]">
          ${pizza.price[size]}
        </span>
        <p className="block my-[1em] mx-0">{pizza.desc}</p>
        <h3 className="block text-[1.5em] my-[0.83em] mx-0 font-bold">
          Choose the size
        </h3>
        <div className="flex justify-between w-[40%]">
          <div
            className="w-[30px] h-[30px] relative cursor-pointer"
            onClick={() => setSize(0)}
          >
            <Image
              src={"/img/size.png"}
              alt="Small"
              fill={true}
            />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-xs px-[5px] rounded-[10px]">
              Small
            </span>
          </div>
          <div
            className="w-[40px] h-[40px] relative cursor-pointer"
            onClick={() => setSize(1)}
          >
            <Image
              src={"/img/size.png"}
              alt="Medium"
              fill={true}
            />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-xs px-[5px] rounded-[10px]">
              Medium
            </span>
          </div>
          <div
            className="w-[50px] h-[50px] relative cursor-pointer"
            onClick={() => setSize(2)}
          >
            <Image
              src={"/img/size.png"}
              alt="Large"
              fill={true}
            />
            <span className="absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-xs px-[5px] rounded-[10px]">
              Large
            </span>
          </div>
        </div>

        <h3 className="block text-[1.5em] my-[0.83em] mx-0 font-bold">
          Choose additional ingredients
        </h3>
        <div className="flex mb-[30px]">
          <div className="flex items-center mr-[10px] text-[14px] font-medium space-x-1">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="w-[20px] h-[20px]"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-medium space-x-1">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="w-[20px] h-[20px]"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-medium space-x-1">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="w-[20px] h-[20px]"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="flex items-center mr-[10px] text-[14px] font-medium space-x-1">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="w-[20px] h-[20px]"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>

        <div>
          <input
            type="number"
            defaultValue={1}
            className="w-[50px] h-[35px] border border-black"
          />
          <button className="h-[35px] ml-[10px] bg-[#d1411e] text-white border-none font-medium cursor-pointer px-1">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
