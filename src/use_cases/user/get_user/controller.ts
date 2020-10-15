import { NextFunction, Request, Response } from "express";
import { Middleware } from "../../../abstracts";
import { UserNotFound } from "../UsecaseErrors";
import { GetUserRequest } from "./request";
import { getUserUseCase } from "./usecase";


export class GetUserController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getUserUseCase.execute(req.params as unknown as GetUserRequest);
        if (result instanceof UserNotFound) {
            res.locals.response = await this.fail([result]);
        } else {
            res.locals.response = result;
        }
        await this.sendResponse(res);
        return;
    }

}