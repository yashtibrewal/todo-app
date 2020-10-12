import { Router } from "express";
import { healthCheckMiddleware } from "../handlers";
const healthCheckRouter = Router();

healthCheckRouter.get('', healthCheckMiddleware.handler());

export { healthCheckRouter };