// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is runing at :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed", err);
  });

// import mongoose from "mongoose";
// import express from "express";
//one way:
// const connectDB(){}
// connectDB()
/*

Another way:
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();
*/
