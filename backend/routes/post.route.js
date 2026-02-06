import { Router } from "express";
import {getAllPosts, createPost} from "../controllers/post.controller.js"

const router = Router();

router.get("/getAllPost", getAllPosts);
router.post("/createPost", createPost);



export default router;