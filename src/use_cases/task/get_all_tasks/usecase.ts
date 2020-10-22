import { ITaskDocument, taskQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces/Result";
import { GetAllTaskParamsDto } from "./dto";
import { UseCaseError } from "../../../helpers";

type Response = Either<UseCaseError, ITaskDocument[]>
class GetAllTasksUseCase {

    async execute(data: GetAllTaskParamsDto): Promise<Response> {
        return successClass(await taskQueries.getAllTask(data.skip, data.limit));
    }

}

export const getAllTasksUseCase = new GetAllTasksUseCase();
