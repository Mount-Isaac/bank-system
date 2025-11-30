import express from "express";
import { allUsers, singleUser } from "../controllers/userController";
import { validateUserId } from "../middleware/validation";
import { authMiddleware } from "../middleware/auth";

const router = express.Router()


router.post("/", authMiddleware, allUsers)
router.get("/:id", authMiddleware, validateUserId, singleUser)
router.put("/:id", authMiddleware, validateUserId, allUsers)
router.delete("/:id", authMiddleware, validateUserId, allUsers)

export default router