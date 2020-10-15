import { Middleware } from "../../../abstracts"
import { GetUserParser } from "./parser"
import { GetUserRequest } from "./request";
import { Request, Response } from "express"


export class GetUserValidator extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const getUserParser = new GetUserParser(req.params as unknown as GetUserRequest);
        console.log(req.params);
        if (getUserParser.errors.length > 0) {
            res.locals.response = await this.fail(getUserParser.errors);
            res.status(400);
            await this.sendResponse(res);
        }
        return;
    }

}