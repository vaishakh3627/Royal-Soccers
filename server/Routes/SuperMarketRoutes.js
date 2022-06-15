import express from "express";

import {
  getSuperMarketData,
  superMarketData,
} from "../Controllers/SuperMarketControllers.js";

const router = express.Router();

router.post("/supermarket", superMarketData);
router.post("/getSuperMarket", getSuperMarketData);

export default router;
