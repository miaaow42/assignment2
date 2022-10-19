import mongoose from "mongoose";
const Schema = mongoose.Schema; //alias for mongoose.Schema

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

const Model = mongoose.model("Album",AlbumSchema);