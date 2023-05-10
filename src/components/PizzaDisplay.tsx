"use client";

import Image from "next/image";
import { FC, useState, ChangeEvent } from "react";

interface PizzaDisplayProps {
  pizza: Product;
}

const PizzaDisplay: FC<PizzaDisplayProps> = ({ pizza }) => {
  const [price, setPrice] = useState<number>(pizza.prices[0]);
  const [size, setSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [extras, setExtras] = useState<ExtraOption[]>([]);

  const changePrice = (number: number) => setPrice(price + number);

  const handleSize = (sizeIndex: number) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleIngredientChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: ExtraOption
  ) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra.text !== option.text));
    }
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="h-auto text-center sm:text-left sm:h-[calc(100vh-100px)] flex flex-col mt-[20px] sm:mt-0 sm:flex-row">
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="relative w-70vw h-30vh sm:w-4/5 sm:h-4/5">
          <Image
            src={pizza.img}
            alt={pizza.title}
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      </div>
      <div className="flex-1 p-[20px]">
        <h1 className="block text-[2em] m-0 sm:my-[0.67em] sm:mx-0 font-bold">
          {pizza.title}
        </h1>
        <span className="text-[#d1411e] text-[24px] font-normal border-b border-b-[#d1411e]">
          ${price}
        </span>
        <p className="block my-[1em] mx-0">{pizza.desc}</p>
        <h3 className="block text-[1.5em] my-[0.83em] mx-0 font-bold">
          Choose the size
        </h3>
        <div className="flex justify-between w-[100%] sm:w-[40%] px-[20px] sm:px-0">
          <div
            className="w-[30px] h-[30px] relative cursor-pointer"
            onClick={() => handleSize(0)}
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
            onClick={() => handleSize(1)}
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
            onClick={() => handleSize(2)}
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

        <h3 className="block text-[1.2em] sm:text-[1.5em] my-[0.83em] mx-0 font-bold">
          Choose additional ingredients
        </h3>
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row mb-[30px] space-x-0 sm:space-x-5">
          {pizza.extraOptions.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center text-[20px] sm:text-[14px] font-medium space-x-1"
            >
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className="w-[25px] h-[25px] sm:w-[20px] sm:h-[20px]"
                onChange={(e) => handleIngredientChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>

        <div>
          <input
            onChange={(e) => handleQuantityChange(e)}
            type="number"
            defaultValue={1}
            className="w-[50px] h-[50px] sm:h-[35px] py-[10px] px-[20px] sm:py-0 sm:px-0 border border-black"
          />
          <button className="h-[50px] sm:h-[35px] ml-[10px] bg-[#d1411e] text-white border-none font-medium cursor-pointer py-[10px] px-[20px] sm:py-0 sm:px-1">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDisplay;
