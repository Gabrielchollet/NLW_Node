/* Lista as tags que o usuário poderá adicionar na aplicação */
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    /* A função 'classToPlain' vai dentro da entidade tag e vai criar novos objetos apartir dos existentes vindos do TypeORM */
    return classToPlain(tags);
  }
}

export { ListTagsService };