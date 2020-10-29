import {model, Schema, Document} from "mongoose";

interface ITask {
  description: string,
  completed?: boolean,
}

interface ITaskDocument extends ITask, Document { }

const taskSchema = new Schema(
	{
		description: {
			type: String,
			required: true,
			trim: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt",
		},
	},
);

const TaskModel = model<ITaskDocument>("task", taskSchema);

export {ITask, TaskModel, ITaskDocument};
