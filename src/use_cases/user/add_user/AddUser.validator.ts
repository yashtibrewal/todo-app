import { HandlerFunction, Middleware } from "../../../interfaces";
import { AddUserParser } from "./AddUser.parser";
import { ApiResponse } from "../../../abstracts/ApiResponse";
import { NextFunction, Request, Response } from "express";

class AddUserValidator extends ApiResponse implements Middleware {

    handler(): HandlerFunction {
        return async (req: Request, res: Response, next: NextFunction) => {
            const addUserParser = new AddUserParser(req.body);
            if (addUserParser.errors.length > 0) {
                res.locals.response = await this.fail(addUserParser.errors);
                res.status(400);
                await this.sendResponse(res);
            } else {
                return next();
            }
        }
    }

}

export { AddUserValidator };