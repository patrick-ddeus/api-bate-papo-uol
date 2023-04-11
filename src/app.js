import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import ConnectDatabase from "./database/connect.js";
import ParticipantRouter from "./routes/participants.route.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/participants", ParticipantRouter);

ConnectDatabase();
app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado em: http://${process.env.HOST}:${process.env.PORT}
`));