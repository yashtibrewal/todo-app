import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import {AddTaskParser} from "./parser";

class AddTaskValidator extends Middleware {
	async implementation(req: Request, res: Response):Promise<void> {
		const addTaskParser = new AddTaskParser(req.body);
		if (addTaskParser.errors.length > 0) {
			res.status(400);
			res.locals.response = await this.fail(addTaskParser.errors);
			await this.sendResponse(res);
		}
		return;
	}
}


export {AddTaskValidator};
