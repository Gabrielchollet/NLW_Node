/* Responsável por autenticar o usuário */
import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    /* Verificar se o email existe */
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }
    /* Verificas se senha está correta */
    /* O método compare() da biblioteca bcryptjs é responsável por verificar se a senha escolhida pelo usuário e a senha "hashada" são as mesmas */
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    /* Gerar token */
    const token = sign(
      {
        email: user.email,
      },
      "74efb5e2e2c607a87838397ac8fe11cc",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };