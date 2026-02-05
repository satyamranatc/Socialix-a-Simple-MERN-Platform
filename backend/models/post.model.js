import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    postMedia:String,
    postTitle:String,
    postDesc:String,
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps:true
});

export default mongoose.model("Post",postSchema)