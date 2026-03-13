import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import stockRoutes from "./routes/stockRoutes.js"
import gameRoutes from "./routes/gameRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/stock", stockRoutes)
app.use("/api/game", gameRoutes)

app.get("/", (req,res)=>{
    res.send("Finance Game Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})