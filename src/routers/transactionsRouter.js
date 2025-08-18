import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {validateSchema} from "../middleware/schemaMiddleware.js"
import { transactionSchema } from "../schemas/transactionSchema.js";
import { 
    addTransactions, 
    getTransactions, 
    updateTransactions, 
    deleteTransactions 
} from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.post("/transactions", authenticateToken, validateSchema(transactionSchema), addTransactions);
transactionsRouter.get("/transactions", authenticateToken, getTransactions);
transactionsRouter.put("/transactions/:id", authenticateToken, validateSchema(transactionSchema), updateTransactions);
transactionsRouter.delete("/transactions/:id", authenticateToken, deleteTransactions);

export default transactionsRouter;