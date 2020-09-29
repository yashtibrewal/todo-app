import mongoose from "mongoose";
import { TaskModel } from "./db/task/task.model";
import { UserModel } from "./db/user/user.model";

const connection = mongoose.connect(
  "mongodb://localhost:27017/task-manager-api",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// const task = new TaskModel({ description: "Learn Backend" });
// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const user = new UserModel({
//   name: "Yash",
//   email: "yashkush.tibrewal@gmail.com",
//   password: "pass!2345",
// });
// user
//   .save()
//   .then(() => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
