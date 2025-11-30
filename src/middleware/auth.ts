import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'testing-secret-key';

interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};