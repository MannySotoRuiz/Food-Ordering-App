import styles from "@/styles/Admin.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  const res2 = await fetch("http://localhost:3000/api/orders", {
    next: { revalidate: 60 },
  });

  if (!res2.ok) {
    throw new Error("failed to fetch orders data");
  }

  const products = (await res.json()) as Product[];
  const orders = (await res2.json()) as Order[];

  return { products, orders };
}

interface Data {
  products: Product[];
  orders: Order[];
}

export default async function AdminPage() {
  const data = (await getData()) as Data;
  const { products, orders } = data;

  //   const [pizzaList, setPizzaList] = useState<Product[]>(products);
  //   const [orderList, setOrderList] = useState<Order[]>(orders);
  const status = ["preparing", "on the way", "delivered"];

  //   const handleDelete = (id: string) => {};

  //   const handleStatus = (id: string) => {};

  return (
    <div className="p-[50px] flex">
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
          {products.map((product: Product) => (
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
                  <button className="border-none text-white p-[5px] cursor-pointer bg-teal-700 mr-[10px]">
                    Edit
                  </button>
                  <button
                    className="border-none text-white p-[5px] cursor-pointer bg-[rgb(220,20,60)]"
                    // onClick={() => handleDelete(product.id)}
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
          {orders.map((order: Order) => (
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
                  // onClick={() => handleStatus(order.id)}
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
}
