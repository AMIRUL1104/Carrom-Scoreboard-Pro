import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import MatchSetup from "./pages/MatchSetup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/match-setup/:id" element={<MatchSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
