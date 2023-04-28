//imported file from browser
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import stripe from "stripe";
stripe(process.env.CLIENT_SECRET_KEY_STRIP);
dotenv.config();
const app = express();

// port setting
const port = process.env.PORT || 5000;

//imported file from own file
import authRouter from "./routes/auth.js";
import facilitiesRouter from "./routes/facilities.js";
import roomsRouter from "./routes/rooms.js";
import usersRouter from "./routes/users.js";
// import paymentRouter from './routes/payment.js'

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//connected mongoose
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("mongoose connected");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

//middleware
app.use("/api/auth", authRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);
app.use("/api/facilities", facilitiesRouter);
// app.use('/api/create-payment-intent', (paymentRouter))

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something is wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
  next();
});

// initial route
app.get("/", (req, res) => {
  res.send("running sultan luxury hotel server");
});

// port listener
app.listen(port, () => {
  connect();
  console.log("", "listening", port);
});
