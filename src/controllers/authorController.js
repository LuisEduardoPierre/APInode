import { AUTHOR } from "../models/author.js";

class AuthorController{

    static async authors (req,res){
        try {
            const AUTHORS_LIST = await AUTHOR.find({});
            res.status(200).json(AUTHORS_LIST);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fecth the authors`}) 
        }
            
    }

    static async findAuthorById (req,res){
        try {
            const ID = req.params.id;
            const AUTHOR = await AUTHOR.findById(ID);
            res.status(200).json(BOOK);
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to fetch the author`}) 
        }
            
    }

    static async addAuthor (req,res){
        try {
            const NEW_AUTHOR = await AUTHOR.create(req.body);
            res.status(201).json({message: "Created successfully", book: NEW_AUTHOR});
        } catch(err) {
            res.status(500).json({message: `${err.message} - failed to create a new author`});
        }
        
    }

    static async updateAuthor (req,res){
        try {
            const ID = req.params.id;
            await AUTHOR.findByIdAndUpdate(ID, req.body);
            res.status(200).json({message: "Update runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to update the author`}) 
        }
            
    }

    static async deleteAuthor (req,res){
        try {
            const ID = req.params.id;
            await AUTHOR.findByIdAndRemove(ID);
            res.status(200).json({message: "Delete runned successfully"});
        } catch(err) {
           res.status(500).json({message: `${err.message} - failed to delete the author`}) 
        }
            
    }

}

export default AuthorController;