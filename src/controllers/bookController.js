import BOOK from "../models/book.js";
import NotFound from "../errors/NotFound.js";

class BookController{

  static async books (req,res,next) {
    try {
      const BOOKS_LIST = await BOOK.find({});
      res.status(200).json(BOOKS_LIST);
    } catch(err) {
      next(err);
    }
            
  }

  static async findBookById (req,res,next) {
    try {
      const ID = req.params.id;

      const BOOK_RESULT = await BOOK.findById(ID)
        .populate("author", "name")
        .exec();

      if (BOOK_RESULT !== null) {
        res.status(200).json(BOOK_RESULT);
      } else {
        next(new NotFound("Book ID not found"));
      }

    } catch(err) {
      next(err);
    }
            
  }

  static async addBook (req,res,next) {
    const NEW_BOOK = req.body;

    try {
      const CREATED_BOOK = await BOOK.create(NEW_BOOK)
      res.status(201).json({message: "Created successfully", book: CREATED_BOOK});
    } catch(err) {
      next(err);
    }
        
  }

  static async updateBook (req,res,next) {
    try {
      const ID = req.params.id;

      const BOOK_RESULT = await BOOK.findByIdAndUpdate(ID, req.body, { runValidators: true });

      if (BOOK_RESULT !== null) {
        res.status(200).json({message: "Update runned successfully"});
      }else{
        next(new NotFound("Book ID not found"));
      }
      

    } catch(err) {
      next(err);
    }
            
  }

  static async deleteBook (req,res,next) {
    try {
      const ID = req.params.id;

      const BOOK_RESULT = await BOOK.findByIdAndRemove(ID);

      if (BOOK_RESULT !== null) {
        res.status(200).json({message: "Delete runned successfully"});
      }else{
        next(new NotFound("Book ID not found"));
      }
      

    } catch(err) {
      next(err);
    }
            
  }

  static async getBooksByPublisher(req, res, next){

    const PUBLISHER = req.query.publisher;

    try{

      const BOOKS_BY_PUBLISHER = await BOOK.find({ publisher: PUBLISHER });

      res.status(200).json(BOOKS_BY_PUBLISHER);

    }catch(err){
            
      next(err);
    }
  }

}

export default BookController;