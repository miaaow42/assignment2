// Step 1 - import mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; //alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const ContactSchema = new Schema
({
    Name: String, // mongoose data types
    Number: String,
    Email: String
},
{
    collection: "contacts"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Contacts",ContactSchema); // declare model

// Step 4 - Export the Model -> this makes the file to a module
export default Model;