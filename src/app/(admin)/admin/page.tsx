import AdminPage from "@/components/AdminPage";

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

export default async function Admin() {
  const data = (await getData()) as Data;
  const { products, orders } = data;

  return (
    <AdminPage
      products={products}
      orders={orders}
    />
  );
}
