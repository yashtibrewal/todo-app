import { Request, Response, NextFunction } from "express";
import { addUserUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

class AddUserController extends Middleware {

    async implementation(req: Request, res: Response):Promise<void>{
        const result = await addUserUseCase.execute(req.body);
        res.locals.response = result;
        res.status(201);
        await this.sendResponse(res);
        return;
    }
}

export { AddUserController };