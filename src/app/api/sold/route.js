import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Sold from "../../../../models/sold";

export async function GET() {
  try {
    await dbConnect();

    const autos = await Sold.aggregate([
      { $sort: { createdAt: 1 } },
      {
        $project: {
          name: 1,
          price: 1,
          year: 1,
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