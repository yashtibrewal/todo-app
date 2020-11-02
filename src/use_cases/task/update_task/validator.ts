
import {UpdateTaskParamParser, UpdateTaskParser} from "./parser";
import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import { GetByIdParams } from "../../../interfaces";

class UpdateTaskValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const updateTaskParser = new UpdateTaskParser(req.body);
		const updateTaskParamParser = new UpdateTaskParamParser(req.params as unknown as GetByIdParams);
		if (updateTaskParser.errors.length > 0 || updateTaskParamParser.errors.length > 0) {

			const errors = [];

			for(const error of updateTaskParser.errors){
				errors.push(error);
			}

			for(const error of updateTaskParamParser.errors){
				errors.push(error);
			}

			res.locals.response = await this.fail(errors);
			res.status(400);
			await this.sendResponse(res);
		}
		return;
	}
}

export {UpdateTaskValidator};
