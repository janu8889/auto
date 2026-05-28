import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import Sold from "../models/sold.js";

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

    // RANDOM + TIME
    const random = Math.random().toString(36).slice(2, 7);
    const timestamp = Date.now();

    const publicId =
      "products/" +
      data.name.toLowerCase().replace(/\s+/g, "_") +
      "_" +
      fileName +
      "_" +
      timestamp +
      "_" +
      random;

    const url = await uploadImage(file, publicId);

    uploadedImages.push(url);

    console.log("Uploaded:", url);
  }


  // const product = await Product.create({
  //   name: data.name,
  //   make: data.make,
  //   price: data.price,
  //   discountPrice: data.discountPrice,
  //   year: data.year,
  //   mileage: data.mileage,
  //   engine: data.engine,
  //   transmission: data.transmission,
  //   manufacturer: data.manufacturer,
  //   model: data.model,
  //   titleStatus: data.titleStatus,
  //   description: data.description,
  //   exteriorColor: data.exteriorColor,
  //   interiorColor: data.interiorColor,
  //   imgs: uploadedImages,
  // });

    const product = await Sold.create({
    name: data.name,
    price: data.price,
    year: data.year,
    imgs: uploadedImages,
  });

  console.log("✅ PRODUCT CREATED:", product._id);
}

// -----------------------------
// 1 SINGUR PRODUS (EXEMPLU)
// -----------------------------
await createSingleProduct({
  name: "2018 Chevrolet Camaro ZL1",
  price: 58400,
  year: 2018,
  imgFolder:"/home/lucky/Downloads/sold/1",
});

// -----------------------------
// disconnect
// -----------------------------
await mongoose.disconnect();