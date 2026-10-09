import express from 'express';
import connectDatabase from './config/dbConnect.js';
import ROUTES from './routes/index.js';

const CONNECTION = await connectDatabase();

CONNECTION.on("error", (error) => {
    console.error("Error in connection", error)
});

CONNECTION.once("open", () =>{
    console.log("Connection successfully done")
})

const APP = express();
ROUTES(APP);

export default APP;

