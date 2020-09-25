import mongodb from "mongodb";

const MongoClient: typeof mongodb.MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("Could not connect to the db!");
    }

    const db = client.db(databaseName);
    const collection = db.collection("users");

    collection.insertOne({ name: "Yash" });
  }
);
