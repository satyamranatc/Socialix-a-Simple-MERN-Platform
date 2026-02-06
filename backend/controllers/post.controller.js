import postModel from "../models/post.model.js";

export async function getAllPosts(req,res) {
    let posts = await postModel.find().populate("uploadedBy").sort({createdAt:-1});
    return res.json(posts);
};

export async function createPost(req,res)
{
    let newPost = req.body;
    await postModel.create(newPost);
    return res.json({msg:"Post Addedd Successfully! "})
};