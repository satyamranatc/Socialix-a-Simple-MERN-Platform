import { Router } from "express";
import {getAllPosts, createPost} from "../controllers/post.controller.js"

const router = Router();

router.get("/", getAllPosts);
router.post("/", createPost);



export default router;