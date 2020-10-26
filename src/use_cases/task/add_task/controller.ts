import {Request, Response} from 'express';
import {addTaskUseCase} from './usecase';
import {Middleware} from '../../../abstracts';
import {AddTaskDtoConverter} from './dto';

export class AddTaskController extends Middleware {
  async implementation(req: Request, res: Response): Promise<void> {
    const addTaskDtoConverter = new AddTaskDtoConverter(req.body);
    const result = await addTaskUseCase.execute(addTaskDtoConverter.getConvertedDto());

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
