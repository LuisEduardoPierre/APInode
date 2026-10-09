import { AUTHOR } from "../models/author.js";
import BOOK from "../models/book.js";

class BookController{

    static async books (req,res) {
        try {
            const BOOKS_LIST = await BOOK.find({});
            res.status(200).json(BOOKS_LIST);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fecth the books`}) 
        }
            
    }

    static async findBookById (req,res) {
        try {
            const ID = req.params.id;
            const BOOK = await BOOK.findById(ID);
            res.status(200).json(BOOK);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fetch the book`}) 
        }
            
    }

    static async addBook (req,res) {
        const NEW_BOOK = req.body;

        try {
            const FINDED_AUTHOR =  await AUTHOR.findById(NEW_BOOK.AUTHOR);
            const COMPLETE_BOOK = { ...NEW_BOOK, AUTHOR: { ...FINDED_AUTHOR._doc}}
            const CREATED_BOOK = await BOOK.create(COMPLETE_BOOK)
            res.status(201).json({message: "Created successfully", book: CREATED_BOOK});
        } catch(err) {
            res.status(500).json({message: `${err.message} - failed to create a new book`});
        }
        
    }

    static async updateBook (req,res) {
        try {
            const ID = req.params.id;
            await BOOK.findByIdAndUpdate(ID, req.body);
            res.status(200).json({message: "Update runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to update the book`}) 
        }
            
    }

    static async deleteBook (req,res) {
        try {
            const ID = req.params.id;
            await BOOK.findByIdAndRemove(ID);
            res.status(200).json({message: "Delete runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to delete the book`}) 
        }
            
    }

    static async getBooksByPublisher(req, res){

        const PUBLISHER = req.query.publisher;

        try{

            const BOOKS_BY_PUBLISHER = await BOOK.find({ publisher: PUBLISHER });

            res.status(200).json(BOOKS_BY_PUBLISHER);

        }catch(err){
            
            res.status(500).json({message: `${err.message} - failed to fetch the publishers`});
        }
    }

}

export default BookController;