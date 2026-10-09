import mongoose from "mongoose";

const AUTHOR_SCHEMA = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId },
    name: {type: String, required: true},
    nacionality: {type: String, required: true}
}, {versionKey: false})

const AUTHOR = mongoose.model("authors", AUTHOR_SCHEMA)

export {AUTHOR, AUTHOR_SCHEMA };