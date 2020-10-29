
import {AddUserParser} from "./parser";
import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";

class AddUserValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const addUserParser = new AddUserParser(req.body);
		if (addUserParser.errors.length > 0) {
			res.locals.response = await this.fail(addUserParser.errors);
			res.status(400);
			await this.sendResponse(res);
		}
		return;
	}
}

export {AddUserValidator};
