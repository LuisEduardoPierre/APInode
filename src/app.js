import express from 'express';
import connectDatabase from './config/dbConnect.js';
import ROUTES from './routes/index.js';
import errorHandler from "./middlewares/errorHandler.js";

const CONNECTION = await connectDatabase();

CONNECTION.on("error", (error) => {
  console.error("Error in connection", error)
});

CONNECTION.once("open", () =>{
  console.log("Connection successfully done")
})

const APP = express();
APP.use(express.json())
ROUTES(APP);

// eslint-disable-next-line no-unused-vars
APP.use(errorHandler);

export default APP;

