import { Router } from "express";
import { registerUser,  getUserById} from "../controllers/user.controller.js";
const router = Router();

router.get("/getUserById", getUserById);
router.post("/register", registerUser);

export default router;