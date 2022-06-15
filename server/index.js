import express from "express";
import bodtParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import AuthRoute from "./Routes/AuthRoutes.js";
import SoccerRoute from "./Routes/SoccerRoutes.js";
import SuperMarketRoute from "./Routes/SuperMarketRoutes.js";
import CoffeeShopRoute from "./Routes/CoffeeShopRoute.js";

//Routes

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

//Middlewares

app.use(bodtParser.json({ limit: "30mb", extended: true }));
app.use(bodtParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT, () => console.log("Listening")))
  .catch((error) => console.log(error));

//Usage of routes

app.use("/auth", AuthRoute);
app.use("/soccerdata", SoccerRoute);
app.use("/supermarketdata", SuperMarketRoute);
app.use("/coffeeshopdata", CoffeeShopRoute);
