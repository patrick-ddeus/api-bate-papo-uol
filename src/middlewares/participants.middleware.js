import Joi from "joi";
import ParticipantService from "../services/participants.service.js";
import sanitizeObjects from "../helpers/sanitizeObject.js";

export const validParticipant = async (req, res, next) => {
    const { name } = sanitizeObjects(req.body);
    const userInDatabase = await ParticipantService.getOneOrManyParticipants({ name });

    const schema = Joi.object({
        name: Joi.string().required()
    });

    const { error } = schema.validate({ name });

    if (error) {
        return res.status(422).send(error.details[0].message);
    }

    if (userInDatabase.length !== 0) {
        return res.status(409).send("Usuário já logado");
    }

    req.body.name = name;
    
    return next();
};