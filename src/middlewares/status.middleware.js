import ParticipantsService from "../services/participants.service.js";

export const validStatus = async (req, res, next) => {
    const { user } = req.headers;
    const objectQuery = { name: user };
    const userInDatabase = await ParticipantsService.getOneParticipant(objectQuery);

    if (!user) {
        return res.status(404).json({ message: "Must send user in headers" });
    }

    if (!userInDatabase) {
        return res.status(404).json({ message: "User not registered" });
    }

    return next()
};