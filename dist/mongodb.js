"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = __importDefault(require("mongodb"));
var MongoClient = mongodb_1.default.MongoClient;
var connectionUrl = "mongodb://127.0.0.1:27017";
var databaseName = "task-manager";
MongoClient.connect(connectionUrl, { useNewUrlParser: true }, function (error, client) {
    if (error) {
        console.log("Could not connect to the db!");
    }
    var db = client.db(databaseName);
    var collection = db.collection("users");
    collection.insertOne({ name: "Yash" });
});
