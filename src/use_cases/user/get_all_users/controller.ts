import { Request, Response } from "express";
import { getAllUsersUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

class GetAllUsersController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getAllUsersUseCase.execute();
        res.locals.response = result;
        await this.sendResponse(res);
        return;
    }
}

export { GetAllUsersController }