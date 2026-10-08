import mongoose from "mongoose";

async function connectDatabase(){
mongoose.connect("mongodb+srv://pplpierre20_db_user:bejOhQKYPibJms7O@cluster0.qb78zcc.mongodb.net/?appName=Cluster0")
return mongoose.connection;
} 

export default connectDatabase;