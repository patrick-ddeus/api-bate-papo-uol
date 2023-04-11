import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import ConnectDatabase from "./database/connect.js";
import ParticipantRouter from "./routes/participants.routes.js";
import MessageRouter from "./routes/message.routes.js";
import StatusRouter from "./routes/status.routes.js";
import manageInativeUsers from "./helpers/managerInativeUsers.js";

const app = express();
const MILLISECONDS = 1000;
const SECONDS_TO_EXPIRE = 15;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/participants", ParticipantRouter);
app.use("/messages", MessageRouter);
app.use("/status", StatusRouter);

ConnectDatabase();
app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado em: http://${process.env.HOST}:${process.env.PORT}
`));

setInterval(() => {
    manageInativeUsers();
}, SECONDS_TO_EXPIRE * MILLISECONDS);