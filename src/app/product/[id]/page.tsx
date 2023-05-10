import PizzaDisplay from "@/components/PizzaDisplay";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = (await getData(params.id)) as Product;

  return <PizzaDisplay pizza={data} />;
}
