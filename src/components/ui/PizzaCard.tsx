import Image from "next/image";
import { FC } from "react";

interface PizzaCardProps {}

const PizzaCard: FC<PizzaCardProps> = ({}) => {
  return (
    <div className="w-[22%] p-[10px] flex flex-col items-center justify-center py-[20px] px-[40px] cursor-pointer">
      <Image
        src="/img/pizza.png"
        alt=""
        width={500}
        height={500}
      />
      <h1 className="text-[18px] font-bold text-[#d1411e]">FIORI DI ZUCCA</h1>
      <span className="text-[18px] font-bold text-[#666]">$19.99</span>
      <p className="text-center text-[#777]">
        Lorem impsum dolor sit amet consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
