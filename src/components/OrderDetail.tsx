"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface OrderDetailProps {
  total: number;
  createOrder: (data: any) => Promise<void>;
  setCash: Dispatch<SetStateAction<boolean>>;
}

const OrderDetail = ({ total, createOrder, setCash }: OrderDetailProps) => {
  const [customer, setCustomer] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleClick = () => {
    // make sure to add validations, and probably gonna want create order to return some sort of state
    // so we can display error if something happened or just have the createOrder function to display
    // a hot toast showing error message
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className="cursor-pointer w-full h-screen absolute top-0 left-0 flex items-center justify-center bg-[rgba(197,197,197,0.56)] z-[999]">
      <div className="cursor-default w-[500px] bg-white rounded-[20px] p-[50px] flex flex-col items-center justify-center">
        <h1 className="font-light block text-[2em] my-[0.67em] mx-0">
          You will pay $12 after delivery.
        </h1>
        <div className="flex flex-col w-full mb-[15px]">
          <label
            className="mb-[10px] cursor-default font-normal text-[20px]"
            htmlFor=""
          >
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="h-[40px] border border-black px-[10px] rounded-lg"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        {/* phone number */}
        <div className="flex flex-col w-full mb-[15px]">
          <label
            className="mb-[10px] cursor-default font-normal text-[20px]"
            htmlFor=""
          >
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className="h-[40px] border border-black px-[10px] rounded-lg"
          />
        </div>

        {/* address */}
        <div className="flex flex-col w-full mb-[15px]">
          <label
            className="mb-[10px] cursor-default font-normal text-[20px]"
            htmlFor=""
          >
            Address
          </label>
          <textarea
            rows={5}
            className="border border-black p-[10px] rounded-lg"
            placeholder="Write your address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="border-none bg-teal-700 text-white py-[10px] px-[20px] font-medium text-base rounded-[10px] cursor-pointer"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
