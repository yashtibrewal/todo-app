import mongoose from "mongoose";


class Database {
	private DB_URI: string;
	constructor(DB_URI: string | undefined) {
		if (DB_URI === undefined) throw new Error("DB_URI invalid");
		this.DB_URI = DB_URI;
	}
	connect(): void {
		mongoose.connect(this.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		}).then(() => {
			console.log("Database Connection Established");
		}).catch((error: Error) => {
			console.log("Database could not be connected " + error.message);
		});
	}
}

export { Database };
