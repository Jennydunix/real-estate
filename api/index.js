import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";

// initialize dotenv
dotenv.config();

// to connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// listen on port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Define routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
