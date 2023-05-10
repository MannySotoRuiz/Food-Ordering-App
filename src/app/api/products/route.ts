import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      title,
      img,
      desc,
      prices,
      extraOption,
    }: {
      title: string;
      img: string;
      desc: string;
      prices: number[];
      extraOption: ExtraOption;
    } = await req.json();

    const newProductObj = { title, img, desc, prices, extraOption };

    const newProduct = await db.product.create({ data: newProductObj });

    return new Response(JSON.stringify(newProduct), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const allProducts = await db.product.findMany();

    return new Response(JSON.stringify(allProducts), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
