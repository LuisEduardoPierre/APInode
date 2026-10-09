import express from "express";
import BookController from "../controllers/bookController.js";

const ROUTES = express.Router();

ROUTES.get("/books", BookController.books);
ROUTES.get("/books/query", BookController.getBooksByPublisher);
ROUTES.get("/books/:id", BookController.findBookById);
ROUTES.post("/books", BookController.addBook);
ROUTES.put("/books/:id", BookController.updateBook);
ROUTES.delete("/books/:id", BookController.deleteBook);

export default ROUTES;
