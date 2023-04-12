import { Router } from "express";
import MessagesController from "../controllers/messages.controller.js";
import { validMessage, validGetMessage, validOwnerMessage } from "../middlewares/messages.middleware.js";

const MessageRouter = Router();

MessageRouter.get("/", validGetMessage, MessagesController.getAllMessages);
MessageRouter.post("/", validMessage, MessagesController.sendMessage);
MessageRouter.put("/:id", validMessage, validOwnerMessage, MessagesController.updateMessage);
MessageRouter.delete("/:id", validOwnerMessage, MessagesController.deleteMessage);

export default MessageRouter;