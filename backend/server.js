import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

import UserRouter from "./routes/user.route.js";
import PostRouter from "./routes/post.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});

app.use("/api/user", UserRouter);
app.use("/api/posts", PostRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} ...`);
});
