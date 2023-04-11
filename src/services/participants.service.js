import { database } from "../database/connect.js";

export const getParticipants = () => database.collection("participants").find().toArray(); 