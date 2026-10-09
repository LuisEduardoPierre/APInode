import BOOK from "../models/book.js";

class BookController{

    static async books (req,res){
        try {
            const BOOKS_LIST = await BOOK.find({});
            res.status(200).json(BOOKS_LIST);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fecth the books`}) 
        }
            
    }

    static async findBookById (req,res){
        try {
            const ID = req.params.id;
            const BOOK = await BOOK.findById(ID);
            res.status(200).json(BOOK);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fetch the book`}) 
        }
            
    }

    static async addBook (req,res){
        try {
            const NEW_BOOK = await BOOK.create(req.body);
            res.status(201).json({message: "Created successfully", book: NEW_BOOK});
        } catch(err) {
            res.status(500).json({message: `${err.message} - failed to create a new book`});
        }
        
    }

    static async updateBook (req,res){
        try {
            const ID = req.params.id;
            await BOOK.findByIdAndUpdate(ID, req.body);
            res.status(200).json({message: "Update runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to update the book`}) 
        }
            
    }

    static async deleteBook (req,res){
        try {
            const ID = req.params.id;
            await BOOK.findByIdAndRemove(ID);
            res.status(200).json({message: "Delete runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to delete the book`}) 
        }
            
    }

}

export default BookController;