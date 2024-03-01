import mongoose from "mongoose";
import express from "express";
import env from "dotenv";
import { DB_NAME } from "../src/contants.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//! if i want to use "import" in javascript insted of "require"
//!  i have to add "type":"module" in package.json file

const app = express();
env.config();
app.use(cors()); //! app.use() is a middleware // which origin i will allow
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("public"));
app.use(cookieParser());

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({extended : true}))

(async () => {
  try {
    await mongoose.connect(`${process.env.BATMAN_BEGANS}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`listening at port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();
