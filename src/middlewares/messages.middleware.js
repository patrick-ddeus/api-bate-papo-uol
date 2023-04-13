import Joi from "joi";
import ParticipantsService from "../services/participants.service.js";
import MessagesService from "../services/messages.service.js";
import sanitizeObjects from "../helpers/sanitizeObject.js";
import { ObjectId } from "mongodb";

export const validMessage = async (req, res, next) => {
    if (!req.headers.user) {
        return res.status(422).json({ message: "Headers must contain user" });
    }

    const { to, text, type, user } = sanitizeObjects({ ...req.body, user: req.headers.user });
    const userInRoom = await ParticipantsService.getOneOrManyParticipants({ name: user });

    const schema = Joi.object({
        to: Joi.string().required(),
        text: Joi.string().required(),
        type: Joi.valid("message", "private_message").required()
    });

    const { error } = schema.validate({ to, text, type });

    if (error) {
        return res.status(422).json({
            message: "Invalid body field!",
            error: error.details[0].message
        });
    }

    if (userInRoom.length === 0) {
        return res.status(422).json({ message: "User must be logged in!" });
    }
    req.body = { to, text, type, user };

    return next();
};

export const validGetMessage = async (req, res, next) => {
    const { limit } = req.query;

    if (!limit) {
        req.limit = 0;
        return next();
    } 

    const cleanedLimit = limit.replace(/\D+/, "")
    const parsedLimit = parseInt(cleanedLimit);
  
    if (parsedLimit <= 0 || isNaN(parsedLimit)) {
        return res.status(422).json({ message: "Invalid limit parameter!" });
    }

    req.limit = parsedLimit;
    

    return next();
};

export const validOwnerMessage = async (req, res, next) => {
    const { id } = req.params;
    const { user } = sanitizeObjects(req.headers);
    const ObjectID = new ObjectId(id);

    const messages = await MessagesService.getMessages({ _id: ObjectID });

    if (messages.length === 0) {
        return res.status(404).json({ message: "incorret id!" });
    }

    if (messages[0].from !== user) {
        return res.status(401).json({ message: "You're not the owner of message" });
    }

    req.messageID = { id: ObjectID };

    return next();
};