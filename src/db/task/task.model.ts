import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
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
  }
);

const TaskModel = model("task", taskSchema);

export { TaskModel };
