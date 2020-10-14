import { taskQueries } from "../../../db";
import { AddTaskRequest } from "./AddTask.request";

class AddTaskUseCase {

    async execute(task: AddTaskRequest) {

        return await taskQueries.createTask(task);

    }

}

const addTaskUseCase = new AddTaskUseCase();

export { addTaskUseCase };
