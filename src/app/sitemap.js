// agri/src/app/sitemap.js
import dbConnect from "../../lib/dbConnect";
import Auto from "../../models/auto";

export default async function sitemap() {
  await dbConnect();

  // fetch produse
  const products = await Auto.find({}, { _id: 1, updatedAt: 1 }).lean();

  const staticPages = [
    { url: "https://www.vqmotorspro.com", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/inventory", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/about", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/shipping", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/contact", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/terms", lastModified: new Date() },
    { url: "https://www.vqmotorspro.com/privacy", lastModified: new Date() },
  ];

  const productPages = products.map((p) => ({
    url: `https://www.vqmotorspro.com/inventory/${p._id.toString()}`,
    lastModified: p.updatedAt || new Date(),
  }));

  return [...staticPages, ...productPages];
}