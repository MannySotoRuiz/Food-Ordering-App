"use client";

import Image from "next/image";
import styles from "@/styles/Cart.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({
    currency,
    showSpinner,
  }: {
    currency: string;
    showSpinner: boolean;
  }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={{
            layout: "vertical",
          }}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={async (data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={async function (data, actions: any) {
            return actions.order.capture().then(function (details: any) {
              // Your code here after capture the order
              console.log(details);
            });
          }}
        />
      </>
    );
  };

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
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>PAY WITH CASH</button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdH5JEtFAz8ePj8kFRuHThU9HaPzvP2JyuLiOj4gO111Ghz5MSKedr8bQdAx8SR-t0rQ2qC01TwEz5tJ",
                  components: "buttons",
                  currency: "USD",
                }}
              >
                <ButtonWrapper
                  currency={currency}
                  showSpinner={false}
                />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className={styles.button}
            >
              CHECKOUT NOW!
            </button>
          )}
          {/* <button className={styles.button}>CHECKOUT NOW!</button> */}
        </div>
      </div>
    </div>
  );
}
