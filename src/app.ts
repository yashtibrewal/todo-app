import dotenv from "dotenv";
import { Database } from "./db/connection";
import express from "express";
import { healthCheckRouter } from "./routers";
import { userRouter, taskRouter } from "./routers";

dotenv.config();

const PORT = process.env.PORT;

const db = new Database(process.env.DB_URI);
db.connect();

const app = express();

app.use(express.json());

app.use('/healthcheck', healthCheckRouter);

app.use("/user", userRouter);

app.use("/task", taskRouter);

app.use("*", (req,res,next)=>{
    res.status(404).send();
})

app.listen(PORT, () => {
    console.log(`Application up and running at ${PORT}`);
})