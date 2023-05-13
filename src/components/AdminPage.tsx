"use client";

import { FC, useState } from "react";
import styles from "@/styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";

interface AdminPageProps {
  products: Product[];
  orders: Order[];
}

const AdminPage: FC<AdminPageProps> = ({ products, orders }) => {
  const [pizzaList, setPizzaList] = useState<Product[]>(products);
  const [orderList, setOrderList] = useState<Order[]>(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      if (res.status === 200) {
        const data = await res.data;
        console.log(data);
        setPizzaList(pizzaList.filter((pizza) => pizza.id !== id));
      } else {
        throw new Error("Error deleting product. Please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id: string) => {};

  return (
    <div className="p-[50px] flex flex-col lg:flex-row">
      <div className={styles.item}>
        <h1 className="block text-[2em] my-[0.67em] mx-0 font-bold">
          Products
        </h1>
        <table className="w-full border-spacing-5 text-left">
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product: Product) => (
            <tbody key={product.id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    alt={product.title}
                  />
                </td>
                <td>{product.id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Edit
                  </button>
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className="block text-[2em] my-[0.67em] mx-0 font-bold">Orders</h1>
        <table className="w-full border-spacing-5 text-left">
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order: Order) => (
            <tbody key={order.id}>
              <tr className={styles.trTitle}>
                <td>{order.id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => handleStatus(order.id)}
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
