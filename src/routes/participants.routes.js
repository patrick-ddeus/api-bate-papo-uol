import { Router } from "express";
import ParticipantsController from "../controllers/participants.controller.js";
import { validParticipant } from "../middlewares/participants.middleware.js";
const ParticipantRouter = Router();

ParticipantRouter.get("/", ParticipantsController.getAllParticipants);
ParticipantRouter.post("/", validParticipant, ParticipantsController.createParticipant);

export default ParticipantRouter;