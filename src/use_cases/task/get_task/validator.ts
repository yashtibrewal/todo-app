import { Request, Response } from "express";
import { Middleware } from "../../../abstracts";
import { GetTaskParser } from "./parser";

class GetTaskValidator extends Middleware {

    async implementation(req: Request, res: Response):Promise<void>{
        const addTaskParser = new GetTaskParser(req.params);
        if (addTaskParser.errors.length > 0) {
            res.status(400);
            res.locals.response = await this.fail(addTaskParser.errors);
            await this.sendResponse(res);
        }else{
            res.locals.addTaskParser = addTaskParser;
        }
        return;
    }

}


export { GetTaskValidator };