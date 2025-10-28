import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMessages } from "../../api";
import "./HomePage.css";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMessages()
      .then((res) => {
        setMessages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to load messages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">🎉 Happy Birthday Belle 🎉</h1>
          <p className="hero-subtitle">from the CNU 2029 Students</p>
        </div>
      </section>

      {/* ===== MESSAGES SECTION ===== */}
      <section className="messages-section">
        <div className="home-wrapper">
          <h2 className="home-title">💖 Birthday Wishes Wall 💌</h2>
          <p className="home-subtitle">
            These beautiful wishes were sent just for you 🎉
          </p>

          <div className="add-message-button-container">
            <button
              className="add-message-button"
              onClick={() => navigate("/add")}
            >
              ✨ Add Your Message ✨
            </button>
          </div>

          <div className="messages-grid">
            {loading ? (
              <p className="no-messages">Loading messages… 💌</p>
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
              <p className="no-messages">No messages yet 💬</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}