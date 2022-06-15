import SuperMarketModel from "../Modals/superMarketModel.js";

export const superMarketData = async (req, res, next) => {
  try {
    const { date, cashinhand, expence, saleinsw, deposit } = req.body;
    const newData = new SuperMarketModel({
      date,
      cashinhand,
      expence,
      saleinsw,
      deposit,
    });
    await newData.save();
    res.status(200).json(newData);
  } catch (error) {
    next(error);
  }
};

export const getSuperMarketData = async (req, res, next) => {
  try {
    const { date } = req.body;
    const data = await SuperMarketModel.findOne({ date: date });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json("Enter Correct date");
    }
  } catch (error) {
    next(error);
  }
};
