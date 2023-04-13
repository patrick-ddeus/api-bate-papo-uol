import Joi from "joi";
import ParticipantService from "../services/participants.service.js";
import sanitizeObjects from "../helpers/sanitizeObject.js";

export const validParticipant = async (req, res, next) => {
    if (typeof req.body.name === "number") {
        return res.status(422).send("invalid name field!");
    }

    const { name } = sanitizeObjects(req.body);
    const userInDatabase = await ParticipantService.getOneOrManyParticipants({ name });

    const schema = Joi.object({
        name: Joi.string().alphanum().required()
    });

    const { error } = schema.validate({ name });

    if (error) {
        return res.status(422).send(error.details[0].message);
    }

    if (userInDatabase.length !== 0) {
        return res.status(409).send("User already in room!");
    }

    req.body.name = name;

    return next();
};