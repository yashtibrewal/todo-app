import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import {DeleteTaskParser} from "./parser";

class DeleteTaskValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const addTaskParser = new DeleteTaskParser(req.params);
		if (addTaskParser.errors.length > 0) {
			res.status(400);
			res.locals.response = await this.fail(addTaskParser.errors);
			await this.sendResponse(res);
		}
		return;
	}
}


export {DeleteTaskValidator};
