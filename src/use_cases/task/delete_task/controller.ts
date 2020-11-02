import {Request, Response} from "express";
import {deleteTaskUsecase} from "./usecase";
import {Middleware} from "../../../abstracts";
import {DeleteTaskRequest} from "./request";
import {DeleteTaskDtoConverter} from "./dto";


export class DeleteTaskController extends Middleware {
	/**
   * convert to a dto object, execute the use case and send back response.
   * @param req
   * @param res
   */
	async implementation(req: Request, res: Response): Promise<void> {
		const deleteTaskDtoConverter =
      new DeleteTaskDtoConverter(req.params as unknown as DeleteTaskRequest);
		const result =
      await deleteTaskUsecase.execute(deleteTaskDtoConverter.getConvertedDto());
		res.locals.response = await this.success(result.value);
		await this.sendResponse(res);
		return;
	}
}
