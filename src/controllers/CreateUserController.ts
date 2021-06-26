/* No interior do controller teremos acesso aos Requestes e Responses */
/* serve para pegar as informações do server (rota) e repassar para o SERVICE */

import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

/* Diferentemente do que ocorre em server.ts, precisamos chamar outra classe que não tem acesso a variável app, é preciso definir as tipagens */
class CreateUserController {
  async handle(request: Request, reponse: Response) {
    /* Nessa parte precisamos recuperar os parâmetros name, email e admin de dentro da requisição */
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin, password });

    return reponse.json(user);
  }
}

export { CreateUserController };