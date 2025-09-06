import express from "express";
import { allUsers } from "../controllers/userController";

const router = express.Router()


router.post("/", allUsers)

export default allUsers