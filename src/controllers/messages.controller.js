import dayjs from "dayjs";
import MessagesService from "../services/messages.service.js";

const getAllMessages = async (req, res) => {
    const { user } = req.headers;
    const limit = req.limit;
    const objectQuery = { $or: [{ from: user }, { to: "Todos" }, { to: user }] };

    try {
        const messages = await MessagesService.getMessages(objectQuery, limit);
        res.status(201).json(messages);
    } catch (e) {
        console.error(e);
    }
};

const sendMessage = async (req, res) => {
    const { to, text, type, user } = req.body;
    const objectQuery = { from: user, to, text, type, time: dayjs().format("HH:mm:ss") };
    
    try {
        await MessagesService.postMessage(objectQuery);
        res.status(201).json({ message: "OK" });
    } catch (e) {
        console.error(e.message);
    }
};

export default {
    getAllMessages,
    sendMessage
};