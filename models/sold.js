import mongoose from "mongoose";

const soldSchema = new mongoose.Schema({
  // Required fields
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },

  imgs: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Sold || mongoose.model("Sold", soldSchema); 