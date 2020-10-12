import { NextFunction } from "express";
import { Middleware, HandlerFunction } from "../interfaces";
import { Request, Response } from "express";

class HealthCheckMiddleware implements Middleware {
    handler(): HandlerFunction {
        return (req: Request, res: Response, next: NextFunction): void => {
            res.send({ status: "healthy" });
            next();
        }
    }
}

export { HealthCheckMiddleware }