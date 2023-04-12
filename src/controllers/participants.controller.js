import ParticipantService from "../services/participants.service.js";
import MessagesService from "../services/messages.service.js";
import dayjs from "dayjs";

const getAllParticipants = async (_, res) => {
    const participants = await ParticipantService.getParticipants();

    if (participants) {
        res.status(200).json(participants);
    }
};

const createParticipant = async (req, res) => {
    const { name } = req.body;

    const objectQuery = { name, lastStatus: Date.now() };

    try {
        await ParticipantService.createParticipant(objectQuery);
        MessagesService.postMessage(
            {
                from: name,
                to: "Todos",
                text: "entra na sala...",
                type: "status",
                time: dayjs().format("HH:mm:ss")
            });
        res.status(201).json({ message: "OK" });
    } catch (e) {
        console.error(e.message);
    }
};

export default {
    getAllParticipants,
    createParticipant
};