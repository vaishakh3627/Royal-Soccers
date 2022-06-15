import mongoose from "mongoose";

const CoffeeShopSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    sale: {
      type: String,
    },
    expence: {
      type: String,
    },
  },
  { timestamps: true }
);

const CoffeeShopModel = mongoose.model("CoffeeShop", CoffeeShopSchema);
export default CoffeeShopModel;
