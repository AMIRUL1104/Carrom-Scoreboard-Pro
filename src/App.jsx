import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import MatchSetup from "./pages/MatchSetup";
import PlayGround from "./pages/PlayGround";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [setupData, setSetupData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/match-setup/:id"
          element={<MatchSetup setSetupData={setSetupData} />}
        />
        <Route
          path="/play-ground/:id"
          element={<PlayGround SetupData={setupData} />}
        />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
