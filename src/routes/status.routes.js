import { Router } from "express";
import StatusController from "../controllers/status.controller.js";
import { validStatus } from "../middlewares/status.middleware.js";
const StatusRouter = Router();

StatusRouter.post("/", validStatus, StatusController.postStatus);

export default StatusRouter;