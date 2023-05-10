import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const product = await db.product.findUnique({
      where: { id },
      include: {
        extraOptions: true,
      },
    });

    return new Response(JSON.stringify(product), {
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
