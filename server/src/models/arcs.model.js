// arcs.model.js
import mongoose from "mongoose";

const arcsSchema = new mongoose.Schema({
  node: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  size: {
    type: Number,
  },
});

const arcs = mongoose.model("arcs", arcsSchema);
export default arcs;
