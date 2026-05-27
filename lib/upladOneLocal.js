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
    .map(f => path.join(folder, f))
    .sort();
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
  name: "2025 Jeep Wrangler RUBICON 392",
  make: "Jeep",
  price: 70400,
  discountPrice: 66880,
  year: 2025,
	mileage: 7201,
	engine: "Premium Unleaded V-8 6.4 L/392",
	transmission: "Automatic",
	model: "Wrangler RUBICON 392",
	titleStatus: "Clean",
	exteriorColor: "Green",
	interiorColor: "Black",
  imgFolder:
    "/home/lucky/Downloads/2/2025 Jeep Wrangler RUBICON 392 - $88,998/Site",
	description: `This Jeep Wrangler Rubicon 392 Final Edition represents the ultimate expression of factory-built off-road performance, combining iconic Jeep capability with a powerful V8 driving experience and premium comfort features. Powered by the legendary 6.4L HEMI V8 engine, this model delivers exceptional performance and unmistakable sound, paired with an 8-speed automatic transmission and a 4.56 rear axle ratio for maximum torque and off-road strength.

Finished with the exclusive 392 Final Edition package, it features aggressive styling, bronze beadlock-capable 17-inch wheels, and a performance-focused suspension system designed specifically to handle extreme terrain with confidence and control. The upgraded 392 Suspension, heavy-duty braking system with 4-wheel disc brakes, and integrated roll-over protection reinforce its capability as a true high-performance off-road machine.

Inside, the cabin blends rugged durability with premium comfort, featuring Nappa leather seating surfaces, heated front seats, a heated steering wheel, and dual-zone automatic climate control. The convertible hardtop adds versatility, allowing for an open-air driving experience, while thoughtful touches such as leather trim accents and a leather-wrapped steering wheel enhance the overall refinement.

Technology and convenience are equally well represented, with the Uconnect 5 NAV system featuring a 12.3-inch touchscreen, Apple CarPlay and Android Auto integration, SiriusXM with 360L, navigation system, and a premium 9-speaker audio system. Additional features such as Jeep Connect emergency services, ParkView rear back-up camera, adaptive lighting, and advanced driver assistance systems provide safety and confidence both on and off the road.

Combining raw V8 power, legendary off-road capability, and premium Final Edition exclusivity, this Wrangler Rubicon 392 stands as one of the most capable and desirable off-road SUVs ever produced.
	`,

});

// -----------------------------
// disconnect
// -----------------------------
await mongoose.disconnect();