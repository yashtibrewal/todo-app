import {ITask, ITaskDocument, TaskModel} from '../../models';
import {ObjectId} from 'mongodb';

export class TaskQueries {
  async createTask(task: ITask): Promise<ITaskDocument> {
    return await TaskModel.create(task);
  }

  async getAllTask(skip: number, limit: number): Promise<ITaskDocument[]> {
    return await TaskModel.aggregate([
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
  }

  async getTask(id: ObjectId): Promise<ITaskDocument | null> {
    return await TaskModel.findById(id);
  }

  async completeTask(_id: ObjectId): Promise<ITaskDocument | null> {
    const result = await TaskModel.findByIdAndUpdate({_id}, {completed: true}).setOptions({new: true});
    console.log(result);
    return result;
  }
}
