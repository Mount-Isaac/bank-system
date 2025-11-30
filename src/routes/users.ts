import express from "express";
import { allUsers, singleUser } from "../controllers/userController";
import { validateUserId } from "../middleware/validation";

const router = express.Router()


router.post("/", allUsers)
router.get("/:id", validateUserId, singleUser)
router.put("/:id", validateUserId, allUsers)
router.delete("/:id", validateUserId, allUsers)

export default router