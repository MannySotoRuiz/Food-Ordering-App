"use client";

import Image from "next/image";
import styles from "@/styles/Cart.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((item, idx) => {
              const { extras, pizza } = item;
              return (
                <tr
                  className={styles.tr}
                  key={idx}
                >
                  <td className={styles.productImage}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={pizza.img}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        alt={pizza.title}
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{pizza.title}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {extras.map((extra, idx) => {
                        const ifLastInList = idx === extras.length - 1;
                        return (
                          <span key={idx}>
                            {extra.text}
                            {!ifLastInList && ", "}
                          </span>
                        );
                      })}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>${item.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{item.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>
                      ${item.price * item.quantity}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className="block text-[2em] my-[0.67em] mx-0 font-bold">
            CART TOTAL
          </h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
