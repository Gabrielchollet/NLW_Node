/* Tudo que for relacionado à criação de usuário */
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
/* Método responsável por encriptografar a senha do usuário */
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  /* Do tipo async para trabalhar com promisse */
  async execute({ name, email, admin = false, password }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories);

    /* Verifica se o campo de email foi preenchido */
    if (!email) {
      throw new Error("Email incorrect");
    }

    /* Verificar se há um usuário cadastrado com esse email */
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    /* Se o usuário não existir, então esse será salvo dentro da BD */
    /* Para isso urge criar uma instância desse objeto */
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };