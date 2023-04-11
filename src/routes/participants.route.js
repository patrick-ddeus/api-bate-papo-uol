import { Router } from "express";
import ParticipantsController from "../controllers/participants.controller.js";

const ParticipantRouter = Router();

ParticipantRouter.get("/", ParticipantsController.getAllParticipants);

export default ParticipantRouter