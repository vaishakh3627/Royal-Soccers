import UserModel from "../Modals/userModals.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = new UserModel({
      username,
      password,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (user) {
      if (password === user.password) {
        res.status(200).json(user);
      } else {
        res.status(404).json("Wrong Password");
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    next(error);
  }
};
