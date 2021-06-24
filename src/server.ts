import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const app = express();

/* O Express serve para trabalhar com diversos tipos de dados, como nessa aplicação queremos trabalhar com JSON devemos usar express.json() */
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));