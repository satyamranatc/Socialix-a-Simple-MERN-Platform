import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

import UserRouter from "./routes/userRouter.js";
import PostRouter from "./routes/postRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});


app.use("/api/users", UserRouter);
app.use("/api/posts", PostRouter);


app.listen(PORT, () => {
  console.log(`Server running on ${PORT} ...`)
});
