const bcrypt = require('bcrypt')

import {generateToken} from '../utils/token'
import { Request, Response, NextFunction } from 'express'
import { Users } from '../models/User'
import { UserRole } from '../types/enums'


export const registerUser = async(req:Request, res:Response, next:NextFunction) =>{
    try{
        const { email, firstName, lastName, phoneNumber, dateOfBirth, password} = req.body

        // check existing user
        const existing_user = await Users.findOne({ where: { email: email }});
        if (existing_user){
            return res.status(409).json({ message: 'Email already registered' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await Users.create({
            email,
            firstName,
            lastName,
            phoneNumber,
            dateOfBirth,
            passwordHash,
            role: UserRole.CUSTOMER,
            isVerified: false,
            isActive: true,
            failedLoginAttempts: 0,
            twoFactorEnabled: false,
        });
        
        if (!user) {
            return res.status(400).json({ message: 'User registration failed.' });
        }

        const plain_user = user?.get({ plain: true})    

        const token = generateToken(plain_user?.id);
        
        res.status(201).json({
            message: "Registration success",
            token,
            user: { userId: plain_user.id, email: plain_user.email, fullName: `${plain_user.firstName} ${plain_user.lastName}`}
        });

    }catch(error){
        next(error)
    }

}

export const loginUser = async(req:Request, res:Response, next:NextFunction) =>{
    try{
        const { email, password } = req.body;
    
        const user = await Users.findOne({
            where: { email: email }
        });
        
        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        const plain_user = user?.get({ plain: true})
    
        if(!plain_user.isActive){
            return res.status(403).json({ message: "Account is deactivated"})
        }
    
        const passwordMatch = await bcrypt.compare(password, plain_user.passwordHash)
        if (!passwordMatch){
            return res.status(401).json({ message: "Invalid credentials"})
        }
    
        const token = generateToken(plain_user.id);
        res.json({
            message: "Login success",
            token,
            user: { userId: plain_user.id, email: plain_user.email, fullName: `${plain_user.firstName} ${plain_user.lastName}`}
        });

    }catch(error){
        next(error)
    }

}