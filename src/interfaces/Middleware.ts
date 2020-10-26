import {Request, Response, NextFunction} from 'express';

type HandlerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

interface IMiddleware {
    handler(): HandlerFunction;
}

export {IMiddleware, HandlerFunction};
