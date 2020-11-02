import {Middleware} from "../../../abstracts";
import {DeleteUserParser} from "./parser";
import {Request, Response} from "express";


export class DeleteUserValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const deleteUserParser = new DeleteUserParser(req.params);
		if (deleteUserParser.errors.length > 0) {
			res.locals.response = await this.fail(deleteUserParser.errors);
			res.status(400);
			await this.sendResponse(res);
		}
		return;
	}
}
