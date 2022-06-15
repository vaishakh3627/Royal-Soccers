import SoccerModel from "../Modals/soccerModel.js";

export const soccerData = async (req, res, next) => {
  try {
    const {
      date,
      numberof5s,
      discountof5s,
      priceof5s,
      numberof7s,
      discountof7s,
      priceof7s,
      expence,
    } = req.body;
    const newData = new SoccerModel({
      date,
      numberof5s,
      discountof5s,
      priceof5s,
      numberof7s,
      discountof7s,
      priceof7s,
      expence,
    });
    await newData.save();
    res.status(200).json(newData);
  } catch (error) {
    next(error);
  }
};

export const getSoccerData = async (req, res, next) => {
  try {
    const { date } = req.body;
    const data = await SoccerModel.findOne({ date: date });
    if (data) {
      res.status(200).json(data);
      console.log(data);
    } else {
      res.status(404).json("Enter Correct date");
    }
  } catch (error) {
    next(error);
  }
};
