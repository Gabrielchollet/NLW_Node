/* Listagem dos elogios enviados pelo usuário que está logado na aplicação */

import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      /* Permite receber o objeto completo com todas as informações trazidas no interior de 'relations' */
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };