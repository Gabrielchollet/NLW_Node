import express, { request } from "express";

/* bibliotecas de tipagens @types/nome  */
const app = express();

/* Principais METHODS HTTP
  GET => Buscar uma informação
  POST => Inserir (Criar) uma informação
  PUT => Alterar uma informação
  DELETE => Remover um dado
  PATCH => Alterar uma informação específica
*/

/* Tipos de Parâmetros da aplicação:
  - Routes Params => Fazem parte da rota. Ex.: http://localhost:3000/produtos/id 
  - Query Params => Utilizados para filtragens Ex.: http://localhost:3000/produtos?nome=teclado&description=otimo&
  A principal diferença entre Routes e Query Params é que nestes há parâmetros facultativos
  - Body Params => São os parâmetros usados no método PATCH, POST ou PUT e que vem no corpo da requisição
  Ex. para uma inserção de um produto: {
    "name": "teclado",
    "description": "otimo"
  } 
*/

/* Criar rota */
app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
})
/* Criar o servidor */
/* http://localhost:3000 */
app.listen(3000, () => console.log("Server is running"));