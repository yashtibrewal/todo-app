import {Request, Response} from "express";
import {getAllTasksUseCase} from "./usecase";
import {Middleware} from "../../../abstracts";
import {GetAllTaskParamsDtoConverter} from "./dto";
import {GetAllTaskRequestParamsRequest} from "./request";

class GetAllTasksController extends Middleware {
	/**
   * parse the request query and execute the use case and send back response
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const getAllTaskParamsDtoConverter =
      new GetAllTaskParamsDtoConverter(
        req.query as unknown as GetAllTaskRequestParamsRequest);
		const result =
      await getAllTasksUseCase
      	.execute(getAllTaskParamsDtoConverter.getConvertedDto());
		if (result.isSuccessClass()) {
			res.locals.response = await this.success(result.value);
		} else {
			res.locals.response = await this.fail([result.value]);
			res.status(400);
		}
		await this.sendResponse(res);
		return;
	}
}

export {GetAllTasksController};
