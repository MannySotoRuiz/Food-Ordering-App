import styles from "@/styles/Order.module.css";
import Image from "next/image";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function OrdersPage({
  params,
}: {
  params: { id: string };
}) {
  const order = (await getData(params.id)) as Order;
  const status = order.status;
  const statusClass = (index: number) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className="flex p-[50px] flex-col sm:flex-row">
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
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{order.id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* second row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between w-full sm:w-4/5">
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
            <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${order.total}
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
}
