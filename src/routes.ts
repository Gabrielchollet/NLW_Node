/* Criação de todas as rotas */
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

/* Rota para o cadastro das tags com o middleware ensureAdmin entre o path da rota e a função */
router.post("/tags", ensureAdmin, createTagController.handle);
/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle);
/* Rota responsável por fazer o login do usuário */
router.post("/login", authenticateUserController.handle);
/* Rota para salvar o compliment */
router.post("/compliments", createComplimentController.handle);

export { router };