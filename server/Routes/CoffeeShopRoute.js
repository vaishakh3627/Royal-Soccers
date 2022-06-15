import express from "express";

import {
  coffeeShopData,
  getCoffeeShopData,
} from "../Controllers/CoffeeShopControllers.js";

const router = express.Router();

router.post("/coffeeshop", coffeeShopData);
router.post("/getCoffeeShop", getCoffeeShopData);

export default router;
