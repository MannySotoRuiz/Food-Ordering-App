import { FC } from "react";
import styles from "@/styles/Order.module.css";
import Image from "next/image";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const status = 0;
  const statusClass = (index: number) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className="flex p-[50px]">
      <div className={styles.left}>
        <div className="stylesRow">
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </tbody>
            <tbody>
              <tr className={styles.tableRow}>
                <td>
                  <span className={styles.id}>123456789</span>
                </td>
                <td>
                  <span className={styles.name}>Manny Soto Ruiz</span>
                </td>
                <td>
                  <span className={styles.address}>
                    2 Ridge Rd, Carmel, NY 10512
                  </span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* second row */}
        <div className="flex justify-between w-4/5">
          {/* "flex flex-col items-center" */}
          <div className={statusClass(0)}>
            <Image
              src={"/img/paid.png"}
              width={30}
              height={30}
              alt=""
            />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src={"/img/checked.png"}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image
              src={"/img/bake.png"}
              width={30}
              height={30}
              alt=""
            />
            <span>Preparing</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src={"/img/checked.png"}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src={"/img/bike.png"}
              width={30}
              height={30}
              alt=""
            />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src={"/img/checked.png"}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src={"/img/delivered.png"}
              width={30}
              height={30}
              alt=""
            />
            <span>Delivered</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src={"/img/checked.png"}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className="block text-[2em] my-[0.67em] mx-0 font-bold">
            CART TOTAL
          </h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button
            disabled
            className="bg-white h-[30px] text-teal-600 font-bold cursor-not-allowed mt-[20px]"
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
