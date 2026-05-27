import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import Product from "../models/auto.js";

cloudinary.v2.config({
  cloud_name: 'dsvtepgci',
  api_key: '942645887267512',
  api_secret: '9Y-bUDQwipvMv25tXXkVWTtKqTY',
});

// -----------------------------
// connect MongoDB
// -----------------------------
await mongoose.connect(
  "mongodb+srv://jansumeni_db_user:Kg5RGgBqCPbS6csn@cluster0.xfnwlcr.mongodb.net/jansumeni?retryWrites=true&w=majority",
  { bufferCommands: false }
);

// -----------------------------
// get images from folder
// -----------------------------
function getImages(folder) {
  return fs
    .readdirSync(folder)
    .filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10);
      return numA - numB;
    })
    .map(f => path.join(folder, f));
}

// -----------------------------
// upload local file
// -----------------------------
function uploadImage(filePath, publicId) {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      filePath,
      {
        public_id: publicId,
        overwrite: true,
        resource_type: "image",
      },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      }
    );
  });
}

// -----------------------------
// CREATE SINGLE PRODUCT
// -----------------------------
async function createSingleProduct(data) {
  const files = getImages(data.imgFolder);

  if (!files.length) {
    console.log("❌ No images found");
    return;
  }

  const uploadedImages = [];

  for (let file of files) {
    const fileName = path.basename(file, path.extname(file));

    const publicId =
      "products/" +
      data.name.toLowerCase().replace(/\s+/g, "_") +
      "_" +
      fileName;

    const url = await uploadImage(file, publicId);

    uploadedImages.push(url);

    console.log("Uploaded:", url);
  }

  const product = await Product.create({
    name: data.name,
    make: data.make,
    price: data.price,
    discountPrice: data.discountPrice,
    year: data.year,
    mileage: data.mileage,
    engine: data.engine,
    transmission: data.transmission,
    manufacturer: data.manufacturer,
    model: data.model,
    titleStatus: data.titleStatus,
    description: data.description,
    exteriorColor: data.exteriorColor,
    interiorColor: data.interiorColor,
    imgs: uploadedImages,
  });

  console.log("✅ PRODUCT CREATED:", product._id);
}

// -----------------------------
// 1 SINGUR PRODUS (EXEMPLU)
// -----------------------------
await createSingleProduct({
  name: "2024 Lotus Emira",
  make: "Lotus",
  price: 78400,
  discountPrice: 74480,
  year: 2024,
	mileage: 32,
	engine: "Intercooled Turbo Premium Unleaded I-4 2.0 L/121",
	transmission: "Automatic",
	model: "Emira FIRST EDITION",
	titleStatus: "Clean",
	exteriorColor: "Yellow",
	interiorColor: "Black",
  imgFolder:
    "/home/lucky/Downloads/4/2024 Lotus Emira First Edition Full Black Package 20 Wheels 2D Coupe - $98,780/Site",
	description: `This Lotus Emira First Edition is a striking modern British sports coupe that blends exotic design, driver-focused engineering, and everyday usability in a compact and highly refined package. Finished with the Full Black Package and riding on aggressive 20-inch wheels in both Diamond Cut and Gloss Black finishes, it delivers a bold and purposeful presence from every angle. With only 31 miles, this example is in virtually brand-new condition.

Inside, the cabin is crafted around performance and luxury, featuring premium Nappa leather seat trim, heated front seats, and a black Alcantara-wrapped sport steering wheel that reinforces its focused driving character. Memory seating, dual-zone automatic climate control, and a refined cockpit layout ensure both comfort and precision, whether driving spiritedly or cruising long distances.

Technology and infotainment are well integrated, with a central navigation system, wireless connectivity, steering wheel-mounted controls, and a premium dual-audio setup featuring both Pioneer and KEF 10-channel (560W) systems for an immersive sound experience. Additional convenience features include remote keyless entry, garage door transmitter, and a full suite of driver information displays.

On the performance and chassis side, the Emira benefits from sport-tuned suspension, four-wheel independent suspension architecture, traction control, electronic stability control, and a well-balanced braking system with ABS and black brake calipers, delivering sharp handling and confidence-inspiring dynamics. Parking sensors and a rearview camera further enhance everyday usability.

Safety and driver assistance systems include multiple airbags, electronic stability control, low tire pressure monitoring, and a comprehensive security system, ensuring peace of mind alongside its performance capabilities.

Combining exotic styling, precision handling, and modern luxury features, this Emira First Edition stands as one of the most exciting driver-focused sports cars in its class.
	`,

});

// -----------------------------
// disconnect
// -----------------------------
await mongoose.disconnect();