
import { useNavigate } from "react-router-dom";
import "./ThankYouPage.css";

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1 className="thankyou-title">🎉 Thank You! 💌</h1>
        <p className="thankyou-message">
          Your birthday wish has been sent successfully! 💕  
          We appreciate your sweet message — it's now on the wall!
        </p>
        <button className="home-button" onClick={() => navigate("/")}>
          🎂 Back to Celebration 🎂
        </button>
      </div>
    </div>
  );
}
