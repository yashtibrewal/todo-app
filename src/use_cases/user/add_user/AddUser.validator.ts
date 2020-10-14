import { HandlerFunction, IMiddleware } from "../../../interfaces";
import { AddUserParser } from "./AddUser.parser";
import { ApiResponse } from "../../../abstracts/ApiResponse";
import { NextFunction, Request, Response } from "express";
import { Middleware } from "../../../abstracts";

class AddUserValidator extends Middleware {

    async implementation(req: Request, res: Response):Promise<void>{
        const addUserParser = new AddUserParser(req.body);
        if (addUserParser.errors.length > 0) {
            res.locals.response = await this.fail(addUserParser.errors);
            res.status(400);
            await this.sendResponse(res);
        }
        return;
    }
    

}

export { AddUserValidator };