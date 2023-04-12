import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import sanitizeObjects from "../helpers/sanitizeObject.js";
import MessagesService from "../services/messages.service.js";

const getAllMessages = async (req, res) => {
    const { user } = req.headers;
    const limit = req.limit;
    const objectQuery = { $or: [{ from: user }, { to: "Todos" }, { to: user }] };

    try {
        const messages = await MessagesService.getMessages(objectQuery, limit);
        res.status(201).json(messages);
    } catch (err) {
        console.error(err);
    }
};

const sendMessage = async (req, res) => {
    const { to, text, type, user } = req.body;
    const objectQuery = { from: user, to, text, type, time: dayjs().format("HH:mm:ss") };

    try {
        await MessagesService.postMessage(objectQuery);
        res.status(201).json({ message: "OK" });
    } catch (err) {
        console.error(err);
    }
};

const deleteMessage = async (req, res) => {
    const { id } = req.messageID;

    try {
        await MessagesService.deleteMessage({ _id: id });

        res.json({ message: "deleted message!" });
    } catch (err) {
        console.error(err);
    }

};

const updateMessage = async (req, res) => {
    const { to, text, type } = req.body;
    const { id } = req.messageID;

    try {
        await MessagesService.updateMessage({ _id: id }, { $set: { to, text, type } });
        res.json({ message: "updated message!" });
    } catch (err) {
        console.error(err);
    }

};

export default {
    getAllMessages,
    sendMessage,
    deleteMessage,
    updateMessage
};