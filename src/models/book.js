import mongoose from "mongoose";


const BOOK_SCHEMA = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "The title of the book is a required field"] },
  publisher: { type: String, required: "The publisher name is a required field"},
  price: { type: Number },
  pages: { type: Number },
  author: {type: mongoose.Schema.Types.ObjectId, ref: "authors", required: [true, "The author is a required field"]}


}, {versionKey: false});

const BOOK  = mongoose.model("books", BOOK_SCHEMA);

export default BOOK;