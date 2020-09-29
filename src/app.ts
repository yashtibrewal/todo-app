import dotenv from "dotenv";
import { Database } from "./db/connection";
import express from "express";

dotenv.config();

const PORT = process.env.PORT;

const db = new Database(process.env.DB_URI);
db.connect();
