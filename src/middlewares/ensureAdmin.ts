/***********
Dúvida: Se eu retirasse esse middleware, qual quer usuário poderia adicionar tags? 
*********/

import { Request, Response, NextFunction } from "express";



export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  /* Verificar se usuário admin */
  const admin = true;

  if (admin) {
    return next();
  }
  /* Usuário sem autorização para acessar essa rota */
  return response.status(401).json({
    error: "Unauthorized",
  });
}