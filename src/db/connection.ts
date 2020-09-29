import mongodb from "mongodb";
mongodb.MongoClient.connect;
class Database {
  private DB_URI: string;
  constructor(DB_URI: string | undefined) {
    if (DB_URI === undefined) throw new Error("DB_URI invalid");
    this.DB_URI = DB_URI;
  }
  connect() {
    mongodb.MongoClient.connect(this.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
        console.log('Database Connection Established');
    }).catch((error:Error)=>{
        console.log("Database could not be connected "+error.message);
    });
  }
}

export {Database}
