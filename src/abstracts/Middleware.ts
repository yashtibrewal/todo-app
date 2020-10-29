import {UnexpectedError} from "../helpers";
import {HandlerFunction, IMiddleware} from "../interfaces";
import {ApiResponse} from "./ApiResponse";
import {NextFunction, Request, Response} from "express";

abstract class Middleware extends ApiResponse implements IMiddleware {
	/**
   * Returns a middleware function for express
   */
	handler(): HandlerFunction {
		return async (
			req: Request,
			res: Response,
			next: NextFunction,
		): Promise<void> => {
			try {
				await this.implementation(req, res);
				if (!res.headersSent) {
					return next();
				}
				return;
			} catch (err) {
				res.locals.response =
          await this.
          	fail([new UnexpectedError(err.message).errorValue()]);
				res.status(500);
				await this.sendResponse(res);
				return;
			}
		};
	}

  /**
   * custom implementation of a middleware function
   * is left to the child classes.
   * @param req request
   * @param res response
   */
  abstract implementation(req: Request, res: Response): Promise<void>;
}

export {Middleware};
