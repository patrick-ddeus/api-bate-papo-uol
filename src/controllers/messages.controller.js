import dayjs from "dayjs";
import MessagesService from "../services/messages.service.js";

const getAllMessages = (req, res) => {

};

const sendMessage = async (req, res) => {
    const { to, text, type } = req.body;
    const { user } = req.headers
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