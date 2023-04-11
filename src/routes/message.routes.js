import { Router } from "express";
import MessagesController from "../controllers/messages.controller.js";
import { validMessage, validGetMessage } from "../middlewares/messages.middleware.js";

const MessageRouter = Router();

MessageRouter.get("/", validGetMessage, MessagesController.getAllMessages);
MessageRouter.post("/", validMessage, MessagesController.sendMessage);

export default MessageRouter;