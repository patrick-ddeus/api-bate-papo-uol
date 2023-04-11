import { database } from "../database/connect.js";
const collection = database.collection("messages")

const postMessage = (objectQuery) => collection.insertOne(objectQuery)
const getMessages = (objectQuery) => collection.find(objectQuery)

export default {
    postMessage
}