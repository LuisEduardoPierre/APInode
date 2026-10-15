import NotFound from '../errors/NotFound.js'
import { AUTHOR } from "../models/author.js";

class AuthorController{

  static async authors (req,res,next){
    try {
      const AUTHORS_LIST = await AUTHOR.find({});
      res.status(200).json(AUTHORS_LIST);
    } catch(err) {
      next(err);
    }
            
  }

  static async findAuthorById (req,res, next){
    try {
      const ID = req.params.id;

      const AUTHOR = await AUTHOR.findById(ID);
      if(AUTHOR !== null){
        res.status(200).json(AUTHOR);
      } else{
        next(new NotFound("Could not found the author with the ID provided"));
      }
    } catch(err) {
      next(err)
    }
            
  }

  static async addAuthor (req,res, next){
    try {
      const NEW_AUTHOR = await AUTHOR.create(req.body);
      res.status(201).json({message: "Created successfully", book: NEW_AUTHOR});
    } catch(err) {
      next(err);
    }
        
  }

  static async updateAuthor (req,res, next){
    try {
      const ID = req.params.id;

      const QUERY_RESULT = await AUTHOR.findByIdAndUpdate(ID, req.body, { runValidators: true });

      if (QUERY_RESULT !== null){
        res.status(200).json({message: "Update runned successfully"});
      }else{
        next(new NotFound("Author ID not found ."));
      }
      

    } catch(err) {
      next(err); 
    }
            
  }

  static async deleteAuthor (req,res, next){
    try {
      const ID = req.params.id;
      const QUERY_RESULT = await AUTHOR.findByIdAndRemove(ID);

      if (QUERY_RESULT !== null) {
        res.status(200).json({message: "Delete runned successfully"});
      } else {
        next(new NotFound("Author ID not found"));
      }

      
    } catch(err) {
      next(err);
    }
            
  }

}

export default AuthorController;