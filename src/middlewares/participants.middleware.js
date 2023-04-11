import Joi from "joi";
import ParticipantService from "../services/participants.service.js";

export const validParticipant = async (req, res, next) => {
    const { name } = req.body;
    const userInDatabase = await ParticipantService.getOneParticipant({ name });

    const schema = Joi.object({
        name: Joi.string().required()
    });

    const { error } = schema.validate({ name });

    if (error) {
        return res.status(422).send(error);
    }

    if (userInDatabase.length !== 0) {
        return res.status(409).send("Usuário já logado");
    }

    return next();
};