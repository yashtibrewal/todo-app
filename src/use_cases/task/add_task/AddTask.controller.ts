import { HandlerFunction, Middleware } from "../../../interfaces";
import { Request, Response, NextFunction } from "express";
import { addTaskUseCase } from "./AddTask.usecase";
import { ApiResponse } from "../../../abstracts/ApiResponse";

class AddTaskController extends ApiResponse implements Middleware {

    handler(): HandlerFunction {
        return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            const result = await addTaskUseCase.execute(req.body);
            res.locals.response = result;
            await this.sendResponse(res);
            return;
        }
    }
}

export { AddTaskController };