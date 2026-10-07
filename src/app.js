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

function getBookById(id) {
    return LIVROS.findIndex(LIVROS => LIVROS.id === Number(id));
};

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

APP.get('/book/:id', (req, res) => {
    const index = getBookById(req.params.id);
    res.status(200).json(LIVROS[index]);
});

APP.put('/book/:id', (req, res) => {
    const index = getBookById(req.params.id);
    LIVROS[index].titulo = req.body.titulo;
    res.status(200).json(LIVROS[index]);
});

APP.delete('/book/:id', (req, res) => {
    const index = getBookById(req.params.id);
    LIVROS.splice(index, 1);
    res.status(200).send("Book deleted");
});

export default APP;