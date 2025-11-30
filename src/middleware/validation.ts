import { Request, Response, NextFunction } from "express"

/*
Validate path params are valid integers before accessing route level
Invalid router params (!typeof int) return error 
Valid router params proceed with the request 
*/
const UUID_V4_REGEX =/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/

export const validateUserId = (req:Request, res:Response, next:NextFunction) =>{
    // convert path param to number
    const id = req.params.id
    
    //check the converted number ? is integer ? pass : error
    if(!UUID_V4_REGEX.test(id)){ 
        const error = new Error("Id param must be a valid UUID")
        return next(error)
    }
    next()
}


/*
given user of type sequelize, using plain:true obj attribute 
destructure the user with help of TS type checking
return only needed user keys (except password...)
*/
export const validateRegisterData = (req:Request, res:Response, next:NextFunction) => {
    const requiredField = [
        "email",
        "firstName",
        "lastName",
        "phoneNumber",
        "dateOfBirth",
        "password"
    ];

    for (const field of requiredField){
        if(!req.body[field]){
            return res.status(400).json({ message: `${field} is required`});
        }
    }

    if (!EMAIL_REGEX.test(req.body.email)){
        return res.status(400).json( { message: "Invalid email format"});
    }

    if (req.body.password.length < 6){
        return res.status(400).json({ message: 'Password must be at least 8 characters'});
    }

    next()
}


/*
given user of type sequelize, using plain:true obj attribute 
destructure the user with help of TS type checking
return only needed user keys (except password...)
*/
export const validateLoginData = (req:Request, res:Response, next:NextFunction) => {
    try{
        const { email, password } = req.body
        if(!email || !password){
            return res.status(400).json( { message: "email / password are required fields."})
        }
        next()
    }catch(err){
        return res.status(400).json({ message: "email / password are required fields."})
    }
}