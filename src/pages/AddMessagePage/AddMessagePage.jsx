
import { useState } from "react";
import { addMessage } from "../../api";
import { useNavigate } from "react-router-dom";
import "./AddMessagePage.css";

export default function AddMessagePage() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate submission delay or send to backend
      await addMessage(form);
      navigate("/thank-you");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="message-form">
        <h2 className="form-title">💌 Leave a Message</h2>

        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Write your birthday message..."
            className="textarea-field"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "✨ Submit ✨"}
        </button>
      </form>
    </div>
  );
}
