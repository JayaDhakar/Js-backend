import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
 
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runing at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !", err);
  });

/*
import express from "express";
const app = express()(
  // IIFE - Immediately Invoked Function Expression, is a JavaScript
  //        function that executes as soon as it is defined.

  async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERRR:", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is lisein on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("ERROR!");
      throw err;
    }
  }
)();
*/
