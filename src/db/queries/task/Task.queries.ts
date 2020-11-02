import {ITask, ITaskDocument, TaskModel} from "../../models";
import {ObjectId} from "mongodb";

export class TaskQueries {
	/**
   * Query to create a task document
   * @param task
   */
	async createTask(task: ITask): Promise<ITaskDocument> {
		return await TaskModel.create(task);
	}

	/**
   * query for getting all the task documents
   * @param skip amount to skip document the result
   * @param limit amount to limit the documents in the result
   */
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

	/**
   * to query a task document based on the id
   * @param id
   */
	async getTask(id: ObjectId): Promise<ITaskDocument | null> {
		return await TaskModel.findById(id);
	}

	/**
   * to mark a task completed based on the id
   * @param _id
   */
	async completeTask(_id: ObjectId): Promise<ITaskDocument | null> {
		const result =
      await TaskModel
      	.findByIdAndUpdate({_id}, {completed: true}).setOptions({new: true});
		return result;
	}

	
	async updateTask(_id:ObjectId, task: ITask): Promise<ITaskDocument|null> {
		return await TaskModel.findOneAndUpdate({_id},task).setOptions({new: true});
	}
}
