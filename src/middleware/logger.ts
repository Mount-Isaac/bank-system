import { Request, Response, NextFunction } from "express";
import { HttpError } from "../types/types";


export const Logger = (req:Request, res:Response, next:NextFunction) => {
    try{
        const host = req.host
        const path = req.path
        const method = req.method.toLocaleUpperCase()
        const time = new Date().toLocaleString()
        const data = Object.entries(req.body)
        const params = Object.entries(req.params)
        console.log(req.params.limit)
        const useParams = params ? `?${params}` : ''
        // const headers = Object.entries(req.headers).toString() //save--db
        console.log(`${method} http://${host}${path}${useParams} --data:${data} --[${time}]`)
        next()
    }catch(err){
        console.log('error')
        // const error:HttpError = new Error('could not process user request in logger');
        // error.status = 400;
        next()
    }

}