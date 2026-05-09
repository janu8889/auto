import mongoose from "mongoose";

const autoSchema = new mongoose.Schema({
  // Required fields
  name: { type: String, required: true, trim: true },
  make: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  mileage: { type: Number, required: true },
  engine: { type: String, required: true, trim: true },
  transmission: { type: String, required: true, trim: true },
  manufacturer: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  titleStatus: { type: String, default: "Clean" },
  description: { type: String, required: true, trim: true },

  // Optional core fields
  exteriorColor:{ type: String, required: true, trim: true },
  interiorColor:{ type: String, required: true, trim: true },

  imgs: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Auto", autoSchema); 