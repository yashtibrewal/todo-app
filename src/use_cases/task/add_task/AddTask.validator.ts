import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../../../abstracts/ApiResponse";
import { HandlerFunction, Middleware } from "../../../interfaces";
import { AddTaskParser } from "./AddTask.parser";

class AddTaskValidator extends ApiResponse implements Middleware {

    handler(): HandlerFunction {
        return async (req: Request, res: Response, next: NextFunction) => {
            const addTaskParser = new AddTaskParser(req.body);
            if (addTaskParser.errors.length > 0) {
                res.status(400);
                res.locals.response = await this.fail(addTaskParser.errors);
                await this.sendResponse(res);
            } else {
                return next();
            }
        }
    }

}


export { AddTaskValidator };