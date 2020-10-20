import { Request, Response } from "express";
import { getAllUsersUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";

class GetAllUsersController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const result = await getAllUsersUseCase.execute();

        if (result.isErrClass()) {
            res.locals.response = this.fail([result.value]);
            res.status(400);
        } else {
            res.locals.response = this.success(result.value);
        }

        await this.sendResponse(res);
        return;
    }
}

export { GetAllUsersController }