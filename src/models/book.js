import mongoose from "mongoose";


const BOOK_SCHEMA = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String},
    price: { type: Number },
    pages: { type: Number },
    

}, {versionKey: false});

const BOOK  = mongoose.model("books", BOOK_SCHEMA);

export default BOOK;