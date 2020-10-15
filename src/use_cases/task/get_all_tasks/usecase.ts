import { taskQueries } from "../../../db";

class GetAllTasksUseCase {

    async execute() {
        return await taskQueries.getAllTask();
    }

}

export const getAllTasksUseCase = new GetAllTasksUseCase();
