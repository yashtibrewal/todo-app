import { ITaskDocument, taskQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces/Result";

type Response = Either<UseCaseError, ITaskDocument[]>
class GetAllTasksUseCase {

    async execute(): Promise<Response> {
        return successClass(await taskQueries.getAllTask());
    }

}

export const getAllTasksUseCase = new GetAllTasksUseCase();
