import { database } from "../database/connect.js";
const collection = database.collection("messages")

const postMessage = (objectQuery) => collection.insertOne(objectQuery)
const getMessages = (objectQuery, limit = 0) => collection.find(objectQuery).limit(limit).toArray()
const deleteMessage = (objectQuery) => collection.deleteOne(objectQuery)
const updateMessage = (filter, objectQuery) => collection.updateOne(filter, objectQuery)

export default { 
    postMessage,
    getMessages,
    deleteMessage,
    updateMessage
}