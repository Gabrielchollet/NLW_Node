import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";

const app = express();

/* O Express serve para trabalhar com diversos tipos de dados, como nessa aplicação queremos trabalhar com JSON devemos usar express.json() */
/* Middlewares: são interpretadores existentes no interior de uma requisição que podem interrompê-la por completo ou adicionar alguma informação */
/* Nesse caso temos um middleware que habilita o JSON para realizar as requisições */
app.use(express.json());
/* Neste há um middleware que está injetando as rotas */
app.use(router);
/* Middleware que pega as respostas vindas das rotas e faz uma tratativa verificando se há algum erro nessa resposta */
/* Middlewares para erros devem receber 04 parâmetros */
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  /* Identifica tudo que caiu no throw new */
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})
app.listen(3000, () => console.log("Server is running"));