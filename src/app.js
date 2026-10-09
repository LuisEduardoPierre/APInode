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

APP.delete('/book/:id', (req, res) => {
    const index = getBookById(req.params.id);
    LIVROS.splice(index, 1);
    res.status(200).send("Book deleted");
});

export default APP;

