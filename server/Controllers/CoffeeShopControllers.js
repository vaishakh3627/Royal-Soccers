import CoffeeShopModel from "../Modals/coffeeShopModel.js";

export const coffeeShopData = async (req, res, next) => {
  try {
    const { date, sale, expence } = req.body;
    const newData = new CoffeeShopModel({ date, sale, expence });
    await newData.save();
    res.status(200).json(newData);
  } catch (error) {
    next(error);
  }
};

export const getCoffeeShopData = async (req, res, next) => {
  try {
    const { date } = req.body;
    const data = await CoffeeShopModel.findOne({ date: date });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json("Enter Correct date");
    }
  } catch (error) {
    next(error);
  }
};
