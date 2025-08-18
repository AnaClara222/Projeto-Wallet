import { MongoClient } from "mongodb"; 

import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

async function startServer() {
    try {
        await mongoClient.connect();
        console.log("MongoDB Conectado!");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error.message);
    }
}

startServer();
export const db = mongoClient.db();