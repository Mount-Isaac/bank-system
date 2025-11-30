const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'testing-secret-key';
const JWT_EXPIRY = '7d'
const RESET_TOKEN_EXPIRY = 36000000;

export const generateToken = (userId: string) =>{
    return jwt.sign({ userId}, JWT_SECRET, { expiresIn: JWT_EXPIRY})
}

