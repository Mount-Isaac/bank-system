import { Request, Response, NextFunction } from "express"

/*
Validate path params are valid integers before accessing route level
Invalid router params (!typeof int) return error 
Valid router params proceed with the request 
*/
export const validateUserId = (req:Request, res:Response, next:NextFunction) =>{
    // convert path param to number
    const id = Number(req.params.id) 
    
    //check the converted number ? is integer ? pass : error
    if(!Number.isInteger(id)){ 
        const error = new Error("id param must be of type integer")
        return next(error)
    }
    next()
}

/*
given user of type sequelize, using plain:true obj attribute 
destructure the user with help of TS type checking
return only needed user keys (except password...)
*/
export const serializeUser = (req:Request, res:Response, next:NextFunction) => {
    
}