import express from 'express';

const APP = express();
APP.use(express.json());

const LIVROS = [
    {
        id: 1,
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
    },
    {
        id: 2,
        titulo: "Harry Potter",
        autor: "J.K. Rowling",
    }
]

APP.get('/', (req, res) =>{
    res.status(200).send('Home');
});

APP.get('/books', (req,res) =>{
    res.status(200).json(LIVROS);
});

APP.post('/books', (req,res) =>{
    LIVROS.push(req.body);
    res.status(201).send("Successfull insert of a new book");
});

export default APP;