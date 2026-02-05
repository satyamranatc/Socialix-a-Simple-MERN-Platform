import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:String,
    avatar:String,
    bio:String,
    email:String,
    age:Number
},{
    timestamps:true
});

export default mongoose.model("User",userSchema)