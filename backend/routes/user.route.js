import { Router } from "express";
import { getUsers,registerUser, getUserById, loginUser} from "../controllers/user.controller.js";
const router = Router();

router.get("/getAllUser", getUsers);
router.get("/getUserById/:uid", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;