# 💼 MyWallet

Projeto de controle de finanças pessoais com **backend em Node.js**, desenvolvido para praticar autenticação, persistência de dados e boas práticas de APIs REST.

## 🔗 Links Úteis

🌐 Aplicação (Render): https://projeto-wallet.onrender.com  
⚠️ O deploy pode estar temporariamente indisponível devido às limitações do plano gratuito do Render.

## 🛠 Tecnologias do Projeto

| Tecnologia | Função |
|-----------|--------|
| Node.js | Ambiente de execução JavaScript |
| Express | Framework para criação de APIs |
| MongoDB | Banco de dados NoSQL |
| JWT | Autenticação e autorização |
| bcrypt | Criptografia de senhas |
| Joi | Validação de dados |
| dotenv | Variáveis de ambiente |

## 🌐 Endpoints da API

**Base URL:**  
`http://localhost:5000` (local)  
`https://projeto-wallet.onrender.com` (deploy)

| Método | Rota | Descrição |
|------|------|-----------|
| POST | `/sign-up` | Cadastra um novo usuário |
| POST | `/sign-in` | Realiza login |
| POST | `/transactions` | Adiciona uma nova transação |
| GET | `/transactions` | Lista transações (com paginação) |
| PUT | `/transactions/:id` | Edita uma transação |
| DELETE | `/transactions/:id` | Remove uma transação |

---

💡 Para rodar o projeto localmente, configure o arquivo `.env` com a URL do MongoDB e a variável `JWT_SECRET`.
