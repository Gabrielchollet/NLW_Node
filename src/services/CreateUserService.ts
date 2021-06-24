/* Tudo que for relacionado à criação de usuário */
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  /* Do tipo async para trabalhar com promisse */
  async execute({ name, email, admin }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories);

    /* Verifica se o campo de email foi preenchido */
    if (!email) {
      throw new Error("Email incorrect");
    }

    /* Verificar se há um usuário cadastrado com esse email */
    const userAlreadyExists = await usersRepository.findOne({
      email
    })
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    /* Se o usuário não existir, então esse será salvo dentro da BD */
    /* Para isso urge criar uma instância desse objeto */
    const user = await usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }