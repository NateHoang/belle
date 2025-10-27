
import { useEffect, useState } from "react";
import "./HomePage.css";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Fetch real messages from your backend
    fetch("http://localhost:5001/api/messages") // adjust if your backend runs elsewhere
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to load messages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1 className="home-title">💖 Birthday Wishes Wall 💌</h1>
        <p className="home-subtitle">
          These beautiful wishes were sent just for you 🎉
        </p>

        <div className="messages-grid">
          {loading ? (
            <p className="no-messages">Loading messages... 💌</p>
          ) : messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg._id} className="message-card">
                <h3 className="message-name">{msg.name}</h3>
                <p className="message-text">{msg.message}</p>
                <p className="message-date">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="no-messages">No messages yet 💬</p>
          )}
        </div>
      </div>
    </div>
  );
}
