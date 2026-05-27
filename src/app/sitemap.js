// agri/src/app/sitemap.js
import dbConnect from "../../lib/dbConnect";
import Auto from "../../models/auto";

export default async function sitemap() {
  await dbConnect();

  // fetch produse
  const products = await Auto.find({}, { _id: 1, updatedAt: 1 }).lean();

  const staticPages = [
    { url: "https://kashautomotive.com", lastModified: new Date() },
    { url: "https://kashautomotive.com/inventory", lastModified: new Date() },
    { url: "https://kashautomotive.com/about", lastModified: new Date() },
    { url: "https://kashautomotive.com/shipping", lastModified: new Date() },
    { url: "https://kashautomotive.com/contact", lastModified: new Date() },
    { url: "https://kashautomotive.com/terms", lastModified: new Date() },
    { url: "https://kashautomotive.com/privacy", lastModified: new Date() },
  ];

  const productPages = products.map((p) => ({
    url: `https://kashautomotive.com/inventory/${p._id.toString()}`,
    lastModified: p.updatedAt || new Date(),
  }));

  return [...staticPages, ...productPages];
}