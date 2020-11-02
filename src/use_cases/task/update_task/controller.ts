import {Request, Response} from "express";
import {updateTaskUseCase} from "./usecase";
import {Middleware} from "../../../abstracts";
import {UpdateTaskDtoConverter, UpdateTaskParamsDtoConverter} from "./dto";
import { GetByIdParams } from "../../../interfaces";

class UpdateTaskController extends Middleware {
	/**
   * convert to the dto object,
   * execute the use case,
   * send back errors if any
   * else send back response
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const updateTaskDtoConverter = new UpdateTaskDtoConverter(req.body);
		const updateTaskParamsDtoConverter = new UpdateTaskParamsDtoConverter(req.params as unknown as GetByIdParams);
		const result =
      await updateTaskUseCase.execute(updateTaskParamsDtoConverter.getConvertedObject(),updateTaskDtoConverter.getConvertedObject());
		if (result.isSuccessClass()) {
			res.locals.response = await this.success(result.value);
			res.status(201);
		} else {
			res.locals.response = await this.fail([result.value]);
			res.status(400);
		}
		await this.sendResponse(res);
		return;
	}
}

export {UpdateTaskController};
