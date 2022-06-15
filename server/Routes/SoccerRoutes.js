import express from "express";

import { getSoccerData, soccerData } from "../Controllers/SoccerControllers.js";

const router = express.Router();

router.post("/soccer", soccerData);
router.post("/getSoccer", getSoccerData);

export default router;
