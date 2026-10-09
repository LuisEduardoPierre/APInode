import express from "express";
import AuthorController from "../controllers/authorController.js";

const ROUTES = express.Router();

ROUTES.get("/authors", AuthorController.authors);
ROUTES.get("/authors/:id", AuthorController.findAuthorById);
ROUTES.post("/authors", AuthorController.addAuthor);
ROUTES.put("/authors/:id", AuthorController.updateAuthor);
ROUTES.delete("/authors/:id", AuthorController.deleteAuthor);

export default ROUTES;
