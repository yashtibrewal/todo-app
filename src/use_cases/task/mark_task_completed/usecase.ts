import {ITaskDocument, taskQueries} from '../../../db';
import {Either, errClass, successClass} from '../../../interfaces/Result';
import {TaskNotFound} from '../UsecaseErrors';
import {MarkTaskCompletedDto} from './dto';
import {UseCaseError} from '../../../helpers';

type Response = Either<UseCaseError, ITaskDocument>
class MarkTaskCompletedUseCase {
  async execute(data: MarkTaskCompletedDto): Promise<Response> {
    const result = await taskQueries.completeTask(data._id);
    if (result == undefined) {
      return errClass(new TaskNotFound());
    } else {
      return successClass(result);
    }
  }
}

export const markTaskCompletedUseCase = new MarkTaskCompletedUseCase();
