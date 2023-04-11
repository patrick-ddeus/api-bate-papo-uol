import { database } from "../database/connect.js";
const collection = database.collection("messages")

const postMessage = (objectQuery) => collection.insertOne(objectQuery)
const getMessages = (objectQuery, limit) => collection.find(objectQuery).limit(limit).toArray()

export default {
    postMessage,
    getMessages
}