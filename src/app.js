import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routers/authRouter.js";
import transactionsRouter from "./routers/transactionsRouter.js";
import "./config/database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(transactionsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando liso na porta ${port}`);
});