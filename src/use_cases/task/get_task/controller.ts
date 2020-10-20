import { Request, Response } from "express";
import { getTaskUsecase } from "./usecase";
import { Middleware } from "../../../abstracts";
import { GetTaskRequest } from "./request";
import { GetTaskDtoConverter } from "./dto";


export class GetTaskController extends Middleware {
    async implementation(req: Request, res: Response): Promise<void> {
        const getTaskDtoConverter = new GetTaskDtoConverter(req.params as unknown as GetTaskRequest);
        const result = await getTaskUsecase.execute(getTaskDtoConverter.getConvertedDto());
        if (result.isErrClass()) {
            res.locals.response = await this.fail([result.value]);
            res.status(400);
        }
        else {
            res.locals.response = await this.success(result.value);
        }
        await this.sendResponse(res);
        return;
    }
}