import mongoose from "mongoose";
import { AUTHOR_SCHEMA } from "./author.js";


const BOOK_SCHEMA = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String},
    price: { type: Number },
    pages: { type: Number },
    author: AUTHOR_SCHEMA


}, {versionKey: false});

const BOOK  = mongoose.model("books", BOOK_SCHEMA);

export default BOOK;