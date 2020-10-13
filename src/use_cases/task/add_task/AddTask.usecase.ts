import { taskQueries } from "../../../db";

class AddTaskUseCase {

    async execute(task: any) {

        return await taskQueries.createTask(task);

    }

}

const addTaskUseCase = new AddTaskUseCase();

export { addTaskUseCase };
