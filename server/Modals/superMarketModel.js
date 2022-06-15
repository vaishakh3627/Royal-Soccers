import mongoose from "mongoose";

const superMarketSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    cashinhand: {
      type: String,
    },
    expence: {
      type: String,
    },
    saleinsw: {
      type: String,
    },
    deposit: {
      type: String,
    },
  },
  { timestamps: true }
);

const SuperMarketModel = mongoose.model("SuperMarket", superMarketSchema);
export default SuperMarketModel;
