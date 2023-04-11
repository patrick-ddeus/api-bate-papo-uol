import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });

const ConnectDatabase = async () => {
    try {
        await client.connect();
        console.log("Conexão estabelecida com suceso");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

export const database = client.db();

export default ConnectDatabase;