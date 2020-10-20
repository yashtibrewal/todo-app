import { ITask, ITaskDocument, TaskModel } from "../../models"
import { ObjectId } from "mongodb";

class TaskQueries {

    async createTask(task: ITask): Promise<ITaskDocument> {
        return await TaskModel.create(task);
    }

    async getAllTask(): Promise<ITaskDocument[]> {
        return await TaskModel.find();
    }

    async getTask(id: ObjectId):Promise<ITaskDocument|null> {
        return await TaskModel.findById(id);
    }

}

const taskQueries = new TaskQueries();

export { taskQueries };