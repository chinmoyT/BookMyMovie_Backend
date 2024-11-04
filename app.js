import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = 5000

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connected To Database And Server is running at port ${PORT}`)
    )
  )
  .catch((e) => console.log(e));
