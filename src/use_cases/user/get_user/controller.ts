import {Request, Response} from 'express';
import {Middleware} from '../../../abstracts';
import {GetUserDtoConverter} from './dto';
import {GetUserRequest} from './request';
import {getUserUseCase} from './usecase';


export class GetUserController extends Middleware {
  async implementation(req: Request, res: Response): Promise<void> {
    const getUserDtoConverter = new GetUserDtoConverter(req.params as unknown as GetUserRequest);
    const result = await getUserUseCase.execute(getUserDtoConverter.getConvertedDto());
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
