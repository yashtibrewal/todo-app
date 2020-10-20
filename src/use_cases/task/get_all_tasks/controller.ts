import { Request, Response } from "express";
import { getAllTasksUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

class GetAllTasksController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getAllTasksUseCase.execute();
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

export { GetAllTasksController }