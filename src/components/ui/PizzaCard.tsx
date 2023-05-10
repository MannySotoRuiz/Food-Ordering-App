import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface PizzaCardProps {
  pizza: Product;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
  return (
    <div className="w-[100%] sm:w-[22%] p-[10px] flex flex-col items-center justify-center py-[20px] px-[40px] cursor-pointer">
      <Link href={`/product/${pizza.id}`}>
        <Image
          src={pizza.img}
          alt=""
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={pizza.img}
        />
      </Link>
      <h1 className="block my-[0.67em] text-[30px] sm:text-[18px] font-bold text-[#d1411e]">
        {pizza.title}
      </h1>
      <span className="text-[24px] sm:text-[18px] font-bold text-[#666]">
        ${pizza.prices[0]}
      </span>
      <p className="text-[24px] text-center sm:text-center text-[#777]">
        {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
