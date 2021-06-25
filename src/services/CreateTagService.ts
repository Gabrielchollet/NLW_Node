import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"



class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    /* Se não tiver o nome definido lança um excessão */
    if (!name) {
      throw new Error("Incorrect name!");
    }
    /* Verifica no BD se essa tag existe por meio do findOne: SELECT * FROM TAGS WHERE NAME = 'name' */
    /* O await significa que temos que esperar que essa busca seja feita */
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    /* Criação de uma referência da tag no repositorio */
    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };