import mongoose from "mongoose";

const SoccerSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    numberof5s: {
      type: String,
    },
    discountof5s: {
      type: String,
    },
    priceof5s: {
      type: String,
    },
    numberof7s: {
      type: String,
    },
    discountof7s: {
      type: String,
    },
    priceof7s: {
      type: String,
    },
    expence: {
      type: String,
    },
  },
  { timestamps: true }
);

const SoccerModel = mongoose.model("Soccer", SoccerSchema);
export default SoccerModel;
