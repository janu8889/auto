import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Auto from "../../../../models/auto";

export async function GET() {
  try {
    await dbConnect();

    const autos = await Auto.aggregate([
      { $sort: { createdAt: 1 } },
      {
        $project: {
          name: 1,
          price: 1,
          year: 1,
          mileage: 1,
          engine: 1,
          make: 1,
          model: 1,
          transmission: 1,
          imgs: { $slice: ["$imgs", 1] }, // doar prima imagine
        },
      },
    ]);

    return NextResponse.json({ autos });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch autos", details: err.message },
      { status: 500 }
    );
  }
}