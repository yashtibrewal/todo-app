import { taskQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces";
import { DeleteTaskDto } from "./dto";
import { ModificationResponse } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Response = Either<ModificationResponse, ModificationResponse>
class DeleteTaskUseCase {
	async execute(data: DeleteTaskDto): Promise<Response> {
		const result = await taskQueries.deleteTask(data._id);
		return successClass(result);
	}
}

export const deleteTaskUsecase = new DeleteTaskUseCase();
