import dbConnect from "../../../../../lib/dbConnect";
import Auto from "../../../../../models/auto";

export async function GET() {
  try {
    await dbConnect();

    const autos = await Auto.aggregate([
      { $sample: { size: 3 } },
      {
        $project: {
          name: 1,
          price: 1,
          year: 1,
          mileage: 1,
          engine: 1,
          imgs: { $slice: ["$imgs", 1] }, // doar prima imagine
        },
      },
    ]);

    return Response.json({ autos }, { status: 200 });
  } catch (err) {
    console.error(err);

    return Response.json(
      { error: "Could not fetch autos" },
      { status: 500 }
    );
  }
}