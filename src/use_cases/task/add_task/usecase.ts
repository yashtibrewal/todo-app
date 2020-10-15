import { taskQueries } from "../../../db";
import { AddTaskRequest } from "./request";

class AddTaskUseCase {

    async execute(task: AddTaskRequest) {
        return await taskQueries.createTask(task);
    }

}

export const addTaskUseCase = new AddTaskUseCase();

