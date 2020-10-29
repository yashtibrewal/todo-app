import {ITaskDocument, taskQueries} from "../../../db";
import {Either, errClass, successClass} from "../../../interfaces/Result";
import {TaskNotFound} from "../UsecaseErrors";
import {GetTaskDto} from "./dto";
import {UseCaseError} from "../../../helpers";

type Response = Either<UseCaseError, ITaskDocument>
class GetTaskUseCase {
	async execute(data: GetTaskDto): Promise<Response> {
		const result = await taskQueries.getTask(data._id);
		if (result == undefined) {
			return errClass(new TaskNotFound());
		} else {
			return successClass(result);
		}
	}
}

export const getTaskUsecase = new GetTaskUseCase();
