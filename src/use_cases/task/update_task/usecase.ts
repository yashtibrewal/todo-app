import {ITaskDocument, taskQueries} from "../../../db";
import {Either, errClass, successClass} from "../../../interfaces/Result";
import {UpdateTaskDto, UpdateTaskParamDto} from "./dto";
import {UseCaseError} from "../../../helpers";
import { TaskNotFound } from "../UsecaseErrors";

type Response = Either<UseCaseError, ITaskDocument>
class UpdateTaskUseCase {
	async execute(task_params: UpdateTaskParamDto,task_data: UpdateTaskDto): Promise<Response> {
		const result = await taskQueries.updateTask(task_params._id,task_data);
		if(result == undefined){
			return errClass(new TaskNotFound());
		}
		return successClass(result);
	}
}

const updateTaskUseCase = new UpdateTaskUseCase();

export {updateTaskUseCase};
