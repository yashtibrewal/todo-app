import { HandlerFunction, Middleware } from "../../../interfaces";
import { Request, Response, NextFunction } from "express";
import { addUserUseCase } from "./AddUser.usecase";
import { ApiResponse } from "../../../abstracts/ApiResponse";

class AddUserController extends ApiResponse implements Middleware {

    handler(): HandlerFunction {
        return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            const result = await addUserUseCase.execute(req.body);
            res.locals.response = result;
            await this.sendResponse(req, res);
            return;
        }
    }
}

export { AddUserController };