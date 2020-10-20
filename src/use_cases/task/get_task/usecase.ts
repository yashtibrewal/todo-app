import { ITaskDocument, taskQueries } from "../../../db";
import { TaskNotFound } from "../UsecaseErrors";
import { GetTaskDto } from "./dto";


class GetTaskUseCase {

    async execute(data: GetTaskDto): Promise<ITaskDocument | TaskNotFound> {
        const result = await taskQueries.getTask(data._id);
        if (result == undefined) {
            return new TaskNotFound();
        } else {
            return result;
        }

    }

}

export const getTaskUsecase = new GetTaskUseCase();
