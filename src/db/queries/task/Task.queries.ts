import { TaskModel } from "../../.";

class TaskQueries {

    async createTask(task: any) {
        return await TaskModel.create(task);
    }

}

const taskQueries = new TaskQueries();

export { taskQueries };