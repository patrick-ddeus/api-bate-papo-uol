import ParticipantsService from "../services/participants.service.js";

const removeInativeUsers = async () => {
    const expiredDate = Date.now() - 10000;
    const objectQuery = { lastStatus: { $lt: expiredDate } };
    ParticipantsService.deleteParticipants(objectQuery);
};

export default removeInativeUsers;