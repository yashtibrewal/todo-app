import { Request, Response } from "express";
import { Middleware } from "../../../abstracts";
import { GetAllTaskParser } from "./parser";
import { GetAllTaskRequestParams } from "./request";

class GetAllTasksValidator extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const getAllTaskParser = new GetAllTaskParser(req.query as unknown as GetAllTaskRequestParams);
        if (getAllTaskParser.errors.length > 0) {
            res.status(400);
            res.locals.response = await this.fail(getAllTaskParser.errors);
            await this.sendResponse(res);
        }
        return;
    }

}


export { GetAllTasksValidator };