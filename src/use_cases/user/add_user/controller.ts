import {Request, Response} from 'express';
import {addUserUseCase} from './usecase';
import {Middleware} from '../../../abstracts';
import {AddUserDtoConverter} from './dto';

class AddUserController extends Middleware {
  /**
   * convert to the dto object,
   * execute the use case,
   * send back errors if any
   * else send back response
   * @param req
   * @param res
   */
  async implementation(req: Request, res: Response): Promise<void> {
    const addUserDtoConverter = new AddUserDtoConverter(req.body);
    const result =
      await addUserUseCase.execute(addUserDtoConverter.getConvertedObject());
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

export {AddUserController};
