import { NextFunction, Request, Response } from "express";

interface customError extends Error {
    status: number;
}

export const errorHandler = (err:customError, req:Request, res:Response, next:NextFunction) => {
    const status = err?.status ? err.status : 500
    const message = err?.message ? err.message : "Request failed. Try again later!"
    res.status(status).json( { message: message})
}