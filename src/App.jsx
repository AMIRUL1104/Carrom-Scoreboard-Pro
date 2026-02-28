import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import MatchSetup from "./pages/MatchSetup";
import PlayGround from "./pages/PlayGround";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/match-setup/:id" element={<MatchSetup />} />
        <Route path="/play-ground/:id" element={<PlayGround />} />
      </Routes>
    </Router>
  );
}

export default App;
