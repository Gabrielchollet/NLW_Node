/* Criação de todas as rotas */

import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
/* Rota do usuário para inserir um usuário na aplicação */
router.post("/users", createUserController.handle)

export { router }