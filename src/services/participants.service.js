import { database } from "../database/connect.js";
const collection = database.collection("participants");

const getParticipants = () => collection.find().toArray();
const getOneOrManyParticipants = (objectQuery) => collection.find(objectQuery).toArray();
const createParticipant = (objectQuery) => collection.insertOne(objectQuery)
const updateParticipant = (objectQuery, update) => collection.updateOne(objectQuery, update)
const deleteParticipants = (objectQuery) => collection.deleteMany(objectQuery)

export default {
    getParticipants,
    getOneOrManyParticipants,
    createParticipant,
    updateParticipant,
    deleteParticipants
}