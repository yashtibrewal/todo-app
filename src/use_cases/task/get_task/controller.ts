import { Request, Response } from "express";
import { getTaskUsecase } from "./usecase";
import { Middleware } from "../../../abstracts";
import { GetTaskRequest } from "./request";
import { TaskNotFound } from "../UsecaseErrors";


export class GetTaskController extends Middleware {
    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getTaskUsecase.execute(req.params as unknown as GetTaskRequest);
        if(result instanceof TaskNotFound){
            res.locals.response = await this.fail([result]);
        }else{
            res.locals.response = result;
        }
        await this.sendResponse(res);
        return;
    }
}