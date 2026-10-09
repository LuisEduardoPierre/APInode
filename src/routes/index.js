import express, { Router } from "express";
import books from "./booksRoutes.js"
import authors from "./authorRoutes.js"

const ROUTES = (app) => {

    app.route("/").get((req,res) => res.status(200).send("Generic Route"));

    app.use(express.json(), books, authors);
};

export default ROUTES;