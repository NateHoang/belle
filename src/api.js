
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api" });

export const getMessages = () => API.get("/messages");
export const addMessage = (newMessage) => API.post("/messages", newMessage);