import { Request, Response, NextFunction } from "express";

type HandlerFunction = (req: Request, res: Response, next: NextFunction) => void;

interface Middleware {
    handler(): HandlerFunction;
}

export { Middleware, HandlerFunction }