/* Criação de todas as rotas */
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

/* Rota para o cadastro das tags com o middleware ensureAdmin entre o path da rota e a função */
router.post("/tags", ensureAdmin, createTagController.handle);
/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle);
export { router }