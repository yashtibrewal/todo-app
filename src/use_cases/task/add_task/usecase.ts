import {ITaskDocument, taskQueries} from "../../../db";
import {Either, successClass} from "../../../interfaces/Result";
import {AddTaskDto} from "./dto";
import {UseCaseError} from "../../../helpers";

type Response = Either<UseCaseError, ITaskDocument>

class AddTaskUseCase {
	async execute(task: AddTaskDto): Promise<Response> {
		const result = successClass(await taskQueries.createTask(task));
		return result;
	}
}

export const addTaskUseCase = new AddTaskUseCase();

