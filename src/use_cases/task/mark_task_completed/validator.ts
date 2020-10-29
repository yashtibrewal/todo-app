import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import {MarkTaskCompletedParser} from "./parser";
import {MarkTaskCompletedRequestParam} from "./request";

export class MarkTaskCompletedValidator extends Middleware {
	/**
   * validate the request parameters and send back errors if any
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const markTaskCompletedParser =
      new MarkTaskCompletedParser(
        req.params as unknown as MarkTaskCompletedRequestParam,
      );
		if (markTaskCompletedParser.errors.length > 0) {
			res.status(400);
			res.locals.response = await this.fail(markTaskCompletedParser.errors);
			await this.sendResponse(res);
		}
		return;
	}
}
