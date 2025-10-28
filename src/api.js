import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://belle-1-06n1.onrender.com/api", // ✅ Your live backend
});

export const getMessages = () => API.get("/messages");
export const addMessage = (newMessage) => API.post("/messages", newMessage);