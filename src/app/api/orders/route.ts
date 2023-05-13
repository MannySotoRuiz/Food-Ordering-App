import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { customer, address, total, method } = await req.json();
    const order = await db.order.create({
      data: {
        customer,
        address,
        total,
        method,
      },
    });
    return new Response(JSON.stringify(order), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const orders = await db.order.findMany();
    return new Response(JSON.stringify(orders), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
