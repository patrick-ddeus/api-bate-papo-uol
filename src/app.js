import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"

const app = express();

dotenv.config()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => console.log(`
    Servidor iniciadoe em: http://${process.env.HOST}:${process.env.PORT}
`));