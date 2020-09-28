import mongoose from "mongoose";
import { TaskModel } from "./db/task/task.model";

const connection = mongoose.connect(
  "mongodb://localhost:27017/task-manager-api",
  { useNewUrlParser: true }
);

const task = new TaskModel({ description: "Learn Backend" });

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
