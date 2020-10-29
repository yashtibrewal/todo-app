import {Middleware} from "../../../abstracts";
import {GetUserParser} from "./parser";
import {Request, Response} from "express";


export class GetUserValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const getUserParser = new GetUserParser(req.params);
		if (getUserParser.errors.length > 0) {
			res.locals.response = await this.fail(getUserParser.errors);
			res.status(400);
			await this.sendResponse(res);
		}
		return;
	}
}
