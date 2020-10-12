import { NextFunction } from "express";
import { Middleware, HandlerFunction } from "../interfaces";
import { Request, Response } from "express";

class HealthCheckMiddleware implements Middleware {
    handler(): HandlerFunction {
        return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
            res.send({ status: "healthy" });
            next();
            return;
        }
    }
}

export { HealthCheckMiddleware }