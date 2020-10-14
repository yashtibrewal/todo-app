import { ITask, ITaskDocument, TaskModel } from "../../models"

class TaskQueries {

    async createTask(task: ITask): Promise<ITaskDocument> {
        return await TaskModel.create(task);
    }

}

const taskQueries = new TaskQueries();

export { taskQueries };