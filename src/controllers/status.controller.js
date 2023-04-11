import ParticipantsService from "../services/participants.service.js";

const postStatus = async (req, res) => {
    const { user } = req.headers;
    const newTimeStamp = Date.now();

    try {
        await ParticipantsService.updateParticipant({ name: user }, { $set: { lastStatus: newTimeStamp } });
        res.status(200).json({ message: "OK" });
    } catch (e) {
        console.error(e);
    }

};

export default {
    postStatus
};