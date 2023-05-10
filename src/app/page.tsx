import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = (await getData()) as Product[];
  const pizzaList = data;

  return (
    <main>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </main>
  );
}
