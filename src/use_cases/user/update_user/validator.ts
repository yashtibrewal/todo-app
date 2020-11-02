
import {UpdateUserParamParser, UpdateUserParser} from "./parser";
import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import { GetByIdParams } from "../../../interfaces";

class UpdateUserValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const updateUserParser = new UpdateUserParser(req.body);
		const updateUserParamParser = new UpdateUserParamParser(req.params as unknown as GetByIdParams);
		if (updateUserParser.errors.length > 0 || updateUserParamParser.errors.length > 0) {

			const errors = [];

			for(const error of updateUserParser.errors){
				errors.push(error);
			}

			for(const error of updateUserParamParser.errors){
				errors.push(error);
			}

			res.locals.response = await this.fail(errors);
			res.status(400);
			await this.sendResponse(res);
		}
		return;
	}
}

export {UpdateUserValidator};
