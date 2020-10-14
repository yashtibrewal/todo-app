import { HandlerFunction, IMiddleware } from "../../../interfaces";
import { Request, Response, NextFunction } from "express";
import { addTaskUseCase } from "./AddTask.usecase";
import { Middleware } from "../../../abstracts";

class AddTaskController extends Middleware {

    async implementation(req: Request, res: Response):Promise<void>{
        const result = await addTaskUseCase.execute(req.body);
        res.locals.response = result;
        res.status(201);
        await this.sendResponse(res);
        return;
    }
}

export { AddTaskController };