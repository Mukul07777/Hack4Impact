import express from "express"
import { getFundamentals, getChartData } from "../controllers/stockController.js"

const router = express.Router()

router.get("/fundamentals/:symbol", getFundamentals)

router.get("/chart/:symbol", getChartData)

export default router