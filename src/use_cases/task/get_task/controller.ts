import { Request, Response } from "express";
import { getTaskUsecase } from "./usecase";
import { Middleware } from "../../../abstracts";
import { GetTaskRequest } from "./request";
import { TaskNotFound } from "../UsecaseErrors";
import { GetTaskDtoConverter } from "./dto";


export class GetTaskController extends Middleware {
    async implementation(req: Request, res: Response): Promise<void> {
        const getTaskDtoConverter = new GetTaskDtoConverter(req.params as unknown as GetTaskRequest);
        const result = await getTaskUsecase.execute(getTaskDtoConverter.getConvertedDto());
        if (result instanceof TaskNotFound) {
            res.locals.response = await this.fail([result]);
        } else {
            res.locals.response = result;
        }
        await this.sendResponse(res);
        return;
    }
}