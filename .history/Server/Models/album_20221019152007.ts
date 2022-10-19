// Step 1 - import mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; //alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const AlbumSchema = new Schema
({
    Name: String, // mongoose data types
    Year: String,
    Singer: String,
    Rating: String
},
{
    collection: "album"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Album",AlbumSchema); // declare model

// Step 4 - Export the Model -> this makes the file to a module
export default Model;
