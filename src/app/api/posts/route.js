import { NextResponse } from "next/server";

import prisma from "../../../../prisma/client";

export async function GET() {
  const posts = await prisma.post.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Posts",
      data: posts,
    },
    {
      status: 200,
    }
  );
}