import Joi from "joi";
import ParticipantsService from "../services/participants.service.js";

export const validMessage = async (req, res, next) => {
    const { to, text, type } = req.body;
    const { user } = req.headers;
    const userInRoom = await ParticipantsService.getOneOrManyParticipants({ name: user });

    const schema = Joi.object({
        to: Joi.string().required(),
        text: Joi.string().required(),
        type: Joi.valid("message", "private_message").required()
    });

    const { error } = schema.validate({ to, text, type });

    if (error) {
        return res.status(422).json({
            message: "Campo body inválido!",
            error: error.details[0].message
        });
    }

    if (userInRoom.length !== 1) {
        return res.status(422).json({ message: "Usuário precisa estar logado" });
    }

    return next();
};

export const validGetMessage = async (req, res, next) => {
    const { limit } = req.query;

    if (Number(limit) < 0) {
        return res.status(422).json({ message: "Invalid limit argument!" });
    }

    if (!limit) {
        req.limit = 0;
    } else {
        req.limit = Number(limit);
    }

    return next();
};
