import { ObjectId } from "mongodb";
import { db } from "../config/database.js";

export async function addTransactions (req, res) {
    const { value, description, type } = req.body;
    const { userId } = req.user;

    try {
        await db.collection("transactions").insertOne({
            userId: new ObjectId(userId),
            value,
            description,
            type,
            date: new Date()
        });

        res.status(201).send("Transação feita com Sucesso!");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro interno no servidor.");
    }
};

export async function getTransactions (req, res) {
    let page = parseInt(req.query.page) || 1;
    if (page < 1) return res.status(400).send("Parâmetro de página inválido");

    const limit = 10;
    const skip = (page - 1) * limit;

    try {
        const transactions = await db.collection("transactions")
            .find({ userId: new ObjectId(req.user.userId) })
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit)
            .toArray();

        res.status(200).send(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
};

export async function  updateTransactions (req, res) {
    const { id } = req.params;
    const { value, description, type } = req.body;

    try {
        const result = await db.collection("transactions").updateOne(
            { _id: new ObjectId(id), userId: new ObjectId(req.user.userId) },
            { $set: { value, description, type } }
        );

        if (result.matchedCount === 0) return res.sendStatus(401);

        res.sendStatus(204); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
};

export async function deleteTransactions (req, res) {
    const { id } = req.params;

    try {
        const result = await db.collection("transactions").deleteOne({
            _id: new ObjectId(id),
            userId: new ObjectId(req.user.userId)
        });

        if (result.deletedCount === 0) return res.sendStatus(401);

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
};