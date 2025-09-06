import { NextFunction, Request, Response } from "express";

interface HttpError extends Error {
    status?: number;
}

export const notFound = (req:Request, res:Response, next:NextFunction) => {
    const error:HttpError = new Error("Not found!");
    error.status = 404;
    next(error)
}