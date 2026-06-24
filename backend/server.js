import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDB from "./config/db_config.js";
import router from "./routes/routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://scanshot.vercel.app", 
    process.env.FRONTEND_URL,
  ],
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));


app.use("/", router);


try {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to initialize server due to DB connection error:", error);
  process.exit(1); 
}