import { Request, Response } from "express";
import { getAllTasksUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

class GetAllTasksController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getAllTasksUseCase.execute();
        res.locals.response = result;
        await this.sendResponse(res);
        return;
    }
}

export { GetAllTasksController }