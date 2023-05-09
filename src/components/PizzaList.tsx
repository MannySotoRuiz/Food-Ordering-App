import { FC } from "react";
import styles from "@/styles/PizzaList.module.css";
import PizzaCard from "./ui/PizzaCard";

interface PizzaListProps {}

const PizzaList: FC<PizzaListProps> = ({}) => {
  return (
    <div className="py-[20px] px-[10px] flex flex-col items-center">
      <h1 className="block text-[2em] my-[0.67em] mx-0 font-bold">
        THE BEST PIZZA IN TOWN
      </h1>
      <p className="text-[24px] text-[#444] w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut blandit
        arcu in pretium molestie. Interdum et malesuade fames acme. Lorem impsum
        dolor sit amet, consectutur adipiscing elit.
      </p>
      <div className="flex items-center justify-center flex-wrap">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
