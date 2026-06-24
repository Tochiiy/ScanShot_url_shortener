import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import morgan from "morgan";

import connectDB from "./config/db_config.js";
import  router  from "./routes/routes.js";
dotenv.config();

const app = express();



app.use(cors({
  origin: [
    "http://localhost:5173",
    process.env.FRONTEND_URL, // ← your Vercel URL
  ],
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);


const PORT=process.env.PORT || 5000

app.listen(PORT, async () => {

    console.log(`server is running on port ${PORT}`);
    await connectDB();
})