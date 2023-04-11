import { database } from "../database/connect.js";
const collection = database.collection("participants");

const getParticipants = () => collection.find().toArray();
const getOneParticipant = (objectQuery) => collection.find(objectQuery).toArray();
const createParticipant = (objectQuery) => collection.insertOne(objectQuery)
const updateParticipant = (objectQuery, update) => collection.updateOne(objectQuery, update)

export default {
    getParticipants,
    getOneParticipant,
    createParticipant,
    updateParticipant
}