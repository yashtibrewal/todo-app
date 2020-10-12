import dotenv from "dotenv";
import { Database } from "./db/connection";
import express from "express";
import { healthCheckRouter } from "./routers";

dotenv.config();

const PORT = process.env.PORT;

const db = new Database(process.env.DB_URI);
db.connect();

const app = express();

app.use('/healthcheck', healthCheckRouter);

app.listen(PORT, () => {
    console.log(`Application up and running at ${PORT}`);
})