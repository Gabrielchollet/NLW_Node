/* Criação de todas as rotas */
import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle)
/* Rota para o cadastro das tags */
router.post("/tags", createTagController.handle)
export { router }