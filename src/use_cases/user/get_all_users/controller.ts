import {Request, Response} from 'express';
import {getAllUsersUseCase} from './usecase';
import {Middleware} from '../../../abstracts';
import {GetAllUsersParamsDtoConverter} from './dto';
import {GetAllUsersParamRequest} from './request';

class GetAllUsersController extends Middleware {
  /**
   * convert to the dto object,
   * execute the use case,
   * send back errors if any
   * else send back response
   * @param req
   * @param res
   */
  async implementation(req: Request, res: Response): Promise<void> {
    const getAllUsersParamsDtoConverter =
      new GetAllUsersParamsDtoConverter(
        req.query as unknown as GetAllUsersParamRequest,
      );
    const result =
      await getAllUsersUseCase.execute(
          getAllUsersParamsDtoConverter.getConvertedDto(),
      );
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

export {GetAllUsersController};
