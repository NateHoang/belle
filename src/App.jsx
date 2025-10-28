import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddMessagePage from "./pages/AddMessagePage/AddMessagePage";
import ThankYouPage from "./pages/end/ThankYouPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/belle/" element={<HomePage />} />
        <Route path="/belle/add" element={<AddMessagePage />} />
        <Route path="/belle/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}
