import mongoose from "mongoose";

const invooSchema = new mongoose.Schema({
  invoo_title: {
    type: String,
    required: true,
  },
  invoo_description: {
    type: String,
    required: true,
  },
});

const Invoo = mongoose.models.invoo || mongoose.model("invoo", invooSchema);
export default Invoo;
