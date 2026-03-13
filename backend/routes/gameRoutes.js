import express from "express"
import { startGame, checkPrediction } from "../controllers/gameController.js"

const router = express.Router()

router.post("/start", startGame)

router.post("/predict", checkPrediction)

export default router