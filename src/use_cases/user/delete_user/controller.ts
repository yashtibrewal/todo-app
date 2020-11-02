import {Request, Response} from "express";
import {Middleware} from "../../../abstracts";
import {DeleteUserDtoConverter} from "./dto";
import {DeleteUserRequest} from "./request";
import {deleteUserUseCase} from "./usecase";


export class DeleteUserController extends Middleware {
	/**
   * convert to the dto object,
   * execute the use case,
   * send back errors if any
   * else send back response
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const deleteUserDtoConverter =
      		new DeleteUserDtoConverter(req.params as unknown as DeleteUserRequest);
		const result =
    		await deleteUserUseCase.execute(deleteUserDtoConverter.getConvertedDto());
		if (result.isErrClass()) {
			res.locals.response = await this.fail([result.value]);
			res.status(400);
		} else {
			res.locals.response = await this.success(result.value);
		}
		await this.sendResponse(res);
		return;
	}
}
