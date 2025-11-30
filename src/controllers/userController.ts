import { Users } from "../models/User";
import { Request, Response, NextFunction } from "express";

export const allUsers = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const isVerified = true;
        
        const { rows: users, count: verifiedUsers } = await Users.findAndCountAll({
            where: { isVerified }
          });
        
        if(users && users.length > 0){
            const data = users.map(user => {
                const plain = user.get({ plain: true});
                return { 
                    id: plain.id,
                    email: plain.email,
                    firstName: plain.firstName,
                    lastName: plain.lastName,
                    phoneNumber: plain.phoneNumber,
                    dateOfBirth: plain.dateOfBirth,
                    address: plain.address,
                    role: plain.role,
                    isVerified: plain.isVerified,
                    isActive: plain.isActive,
                    twoFactorEnabled: plain.twoFactorEnabled,
                    createdAt: plain.createdAt,
                    updatedAt: plain.updatedAt,

                }
            })
            return res.status(200).json({ 
                message: 'success',
                data: data,
                verifiedUsers: verifiedUsers,
            })
        }
        res.status(404).json({ message: "Users table is empty"})

    }catch(err){
        next(err)
    }
}


export const singleUser = async(req:Request,res:Response,next:NextFunction) => {
    try{
        const user = await Users.findOne({
            where: { id: req.params.id }
        })
        
        if(user){
            const plain = user.get({ plain: true});
            const plain_user =  { 
                id: plain.id,
                email: plain.email,
                firstName: plain.firstName,
                lastName: plain.lastName,
                phoneNumber: plain.phoneNumber,
                dateOfBirth: plain.dateOfBirth,
                address: plain.address,
                role: plain.role,
                isVerified: plain.isVerified,
                isActive: plain.isActive,
                twoFactorEnabled: plain.twoFactorEnabled,
                createdAt: plain.createdAt,
                updatedAt: plain.updatedAt

            }
            return res.status(200).json({ 
                message: 'success',
                data: plain_user,
            })
        }
        res.status(404).json({ message: "Users does not exist!"})
    }catch(err){
        next(err)
    }
}