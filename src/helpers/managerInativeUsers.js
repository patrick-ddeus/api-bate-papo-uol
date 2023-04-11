import ParticipantsService from "../services/participants.service.js";
import MessagesService from "../services/messages.service.js";
import dayjs from "dayjs"

const removeInativeUsers = () => {
    const expiredDate = Date.now() - 10000;
    getAllInativeUsers(expiredDate);
    const objectQuery = { lastStatus: { $lt: expiredDate } };
    ParticipantsService.deleteParticipants(objectQuery);
};

const getAllInativeUsers = async (expiredDate) => {
    const users = await ParticipantsService.getOneOrManyParticipants({ lastStatus: { $lt: expiredDate } });
    users.forEach((user) => {
        MessagesService.postMessage({
            from: user.name,
            to: "Todos",
            text: "sai da sala...",
            type: "status",
            time: dayjs().format("HH:mm:ss")
        });
    });
};

export default removeInativeUsers;