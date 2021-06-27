import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  /* Receber o token */
  const authToken = request.headers.authorization

  /* Validar se token está preenchido */
  if (!authToken) {
    return response.status(401).end();
  }

  /*
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmRhQG5hbmRhLmNvbS5iciIsImlhdCI6MTYyNDc1ODg4NiwiZXhwIjoxNjI0ODQ1Mjg2LCJzdWIiOiIzZGIzZWU0MS03OTVkLTQwNzUtOGVhYy0zMDIwZTIyNjNmZGMifQ.owrTtPx09eHcdzsqwPIm83Ebb_nfPoRh8RKUTMWkr2s
  */
  const [, token] = authToken.split(" ")

  try {
    /* Validar se token é valido */
    const { sub } = verify(token, "74efb5e2e2c607a87838397ac8fe11cc") as IPayload;

    /* Recuperar informações do usuário */
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }



}