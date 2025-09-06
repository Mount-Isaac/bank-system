import express from "express";
import { allUsers } from "../controllers/userController";

const router = express.Router()


router.post("/", allUsers)
// router.get("/:id", allUsers)
// router.put("/:id", allUsers)
// router.delete("/:id", allUsers)

export default allUsers