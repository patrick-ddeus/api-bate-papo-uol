import ParticipantService from "../services/participants.service.js";

const getAllParticipants = async (_, res) => {
    const participants = await ParticipantService.getParticipants();

    if (participants) {
        res.status(201).json(participants);
    }
};

const createParticipant = async (req, res) => {
    const { name } = req.body;

    const objectQuery = { name, lastStatus: Date.now() };

    try {
        await ParticipantService.createParticipant(objectQuery);
        res.status(201).send("OK")
    } catch (e) {
        console.error(e.message)
    }
};

export default {
    getAllParticipants,
    createParticipant
};