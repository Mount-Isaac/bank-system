import express from 'express'
import { loginUser, registerUser } from '../controllers/authController'
import { validateLoginData, validateRegisterData } from '../middleware/validation'
const router = express.Router()

router.post("/login", validateLoginData, loginUser)
router.post("/register", validateRegisterData, registerUser)

export default router