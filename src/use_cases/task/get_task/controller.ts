import {Request, Response} from 'express';
import {getTaskUsecase} from './usecase';
import {Middleware} from '../../../abstracts';
import {GetTaskRequest} from './request';
import {GetTaskDtoConverter} from './dto';


export class GetTaskController extends Middleware {
  /**
   * convert to a dto object, execute the use case and send back response.
   * @param req
   * @param res
   */
  async implementation(req: Request, res: Response): Promise<void> {
    const getTaskDtoConverter =
      new GetTaskDtoConverter(req.params as unknown as GetTaskRequest);
    const result =
      await getTaskUsecase.execute(getTaskDtoConverter.getConvertedDto());
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
