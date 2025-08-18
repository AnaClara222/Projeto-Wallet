import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/database.js";

export async function signUp (req, res) {
    const { name, email, password } = req.body;

    try {
        const usuarioExistente = await db.collection("users").findOne({ email });
        if (usuarioExistente) {
            return res.status(409).send("Este e-mail já está em uso.");
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).send("Cadastro realizado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(500).send("Erro interno do servidor.");
    }
};

export async function signIn (req, res) {
    const { email, password } = req.body;

    try {
        const usuario = await db.collection("users").findOne({ email });

        if (!usuario) {
            return res.status(404).send("E-mail não cadastrado!");
        }

        const senhaCorreta = bcrypt.compareSync(password, usuario.password);

        if (!senhaCorreta) {
            return res.status(401).send("Senha incorreta!");
        }

        const token = jwt.sign(
            { userId: usuario._id },
            process.env.JWT_SECRET,
            { expiresIn: 86400 } //24h
        );

        return res.status(200).send(token);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro interno no servidor.");
    }
};