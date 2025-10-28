
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import messagesRouter from "./routes/messages.js";

// Load environment variables first
dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",          // local
      "https://belle-lovat.vercel.app", // ✅ your Vercel frontend
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ✅ MongoDB connection
const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.iauwrji.mongodb.net/birthdaycard?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Routes
app.use("/api/messages", messagesRouter);

// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
