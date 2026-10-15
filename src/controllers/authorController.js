
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
        res.status(404).json({message: `Could not find the author`});
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
      await AUTHOR.findByIdAndUpdate(ID, req.body, { runValidators: true });
      res.status(200).json({message: "Update runned successfully"});
    } catch(err) {
      next(err); 
    }
            
  }

  static async deleteAuthor (req,res, next){
    try {
      const ID = req.params.id;
      await AUTHOR.findByIdAndRemove(ID);
      res.status(200).json({message: "Delete runned successfully"});
    } catch(err) {
      next(err);
    }
            
  }

}

export default AuthorController;