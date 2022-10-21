// Step 1 - import mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; //alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const UserSchema = new Schema
({
    DisplayName: String, // mongoose data types
    username: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Update:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("User",UserSchema); // declare model

// Step 4 - Export the Model -> this makes the file to a module
export default Model;
