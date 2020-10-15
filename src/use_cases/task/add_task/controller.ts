import { Request, Response } from "express";
import { addTaskUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

export class AddTaskController extends Middleware {

    async implementation(req: Request, res: Response):Promise<void>{
        const result = await addTaskUseCase.execute(req.body);
        res.locals.response = result;
        res.status(201);
        await this.sendResponse(res);
        return;
    }
}
