import { getParticipants } from "../services/participants.service.js";

const getAllParticipants = async (req, res) => {
    const participants = await getParticipants()

    if(participants){
        res.status(201).json(participants)
    }
};

export default {
    getAllParticipants
}