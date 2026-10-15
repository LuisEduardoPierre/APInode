import mongoose from "mongoose";

const AUTHOR_SCHEMA = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId },
  name: {type: String, required: [true, "The name of the author is required"]},
  nacionality: {type: String}
}, {versionKey: false})

const AUTHOR = mongoose.model("authors", AUTHOR_SCHEMA)

export {AUTHOR, AUTHOR_SCHEMA };