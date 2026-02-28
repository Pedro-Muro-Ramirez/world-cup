import "dotenv/config"
import express from "express"
import cors from "cors"
import nationsRouter from "./routes/nations"

const app = express()
app.use(express.json())

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') ?? ['http://localhost:5173']
app.use(cors({ origin: allowedOrigins }))

const PORT = process.env.PORT ?? 4000

app.use("/api/nations", nationsRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
