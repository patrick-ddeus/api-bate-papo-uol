import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(5000, () => console.log(`
    Servidor iniciado na porta 5000
`));