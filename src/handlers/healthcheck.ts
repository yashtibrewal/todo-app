import { Request, Response } from "express";
import { Middleware } from "../abstracts";

class HealthCheckMiddleware extends Middleware {
    async implementation(req: Request, res: Response):Promise<void>{
        res.send({ status: "healthy" });
        return;
    }
}

export { HealthCheckMiddleware }