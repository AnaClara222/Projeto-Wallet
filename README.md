# MyWallet 💼

Projeto de controle de finanças pessoais com backend em Node.js e deploy no Render.

## Links Úteis

| Serviço        | Link                                                                 |
|----------------|----------------------------------------------------------------------|
| MongoDB Atlas  | https://cloud.mongodb.com/v2/68a11017eb8a5459e17b33ab#/clusters/detail/MyWallet |
| Aplicação      | https://projeto-wallet.onrender.com                  |

## Tecnologias do Projeto

| Tecnologia    | Função                                                                 |
|--------------|------------------------------------------------------------------------|
| Node.js       | Ambiente de execução JavaScript                                        |
| Express       | Framework para criar APIs e rotas                                      |
| MongoDB       | Banco de dados NoSQL                                                   |
| Mongoose      | *(Observação: este projeto usa a lib `mongodb` diretamente)*          |
| JWT           | Gerenciamento de autenticação e autorização                             |
| bcrypt        | Criptografia de senhas                                                 |
| Joi           | Validação de dados de requisições                                      |
| dotenv        | Configuração de variáveis de ambiente                                  |

## 🌐 Endpoints da API

> Base URL: `http://localhost:5000` (local) ou `https://projeto-wallet.onrender.com` (deploy)

| Método | Rota                    | Descrição                                           |
|--------|------------------------|---------------------------------------------------|
| POST   | `/sign-up`              | Cadastra um novo usuário                           |
| POST   | `/sign-in`              | Realiza login de usuário                            |
| POST   | `/transactions`         | Adiciona uma nova transação                         |
| GET    | `/transactions`         | Lista todas as transações do usuário (suporta paginação via `?page=1`) |
| PUT    | `/transactions/:id`     | Edita uma transação específica                      |
| DELETE | `/transactions/:id`     | Deleta uma transação específica                     |

---

> 💡 Lembre-se de configurar o arquivo `.env` com a URL do MongoDB e a `JWT_SECRET` antes de rodar localmente.
