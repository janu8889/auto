import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Auto from "../../../../models/auto";

export async function GET(req, { params }) {
  await dbConnect();

  const auto = await Auto.findById(params.id);

  if (!auto) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ auto });
}