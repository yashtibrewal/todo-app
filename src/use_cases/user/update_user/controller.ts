import {Request, Response} from "express";
import {updateUserUseCase} from "./usecase";
import {Middleware} from "../../../abstracts";
import {UpdateUserDtoConverter, UpdateUserParamsDtoConverter} from "./dto";
import { GetByIdParams } from "../../../interfaces";

class UpdateUserController extends Middleware {
	/**
   * convert to the dto object,
   * execute the use case,
   * send back errors if any
   * else send back response
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const updateUserDtoConverter = new UpdateUserDtoConverter(req.body);
		const updateUserParamsDtoConverter = new UpdateUserParamsDtoConverter(req.params as unknown as GetByIdParams);
		const result =
      await updateUserUseCase.execute(updateUserParamsDtoConverter.getConvertedObject(),updateUserDtoConverter.getConvertedObject());
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

export {UpdateUserController};
