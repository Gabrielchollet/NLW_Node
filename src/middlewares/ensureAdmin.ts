/***********
Dúvida: Se eu retirasse esse middleware, qual quer usuário poderia adicionar tags? 
*********/
import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request;
  console.log(user_id);

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  /* Verificar se usuário admin */

  if (admin) {
    return next();
  }
  /* Usuário sem autorização para acessar essa rota */
  return response.status(401).json({
    error: "Unauthorized",
  });
}