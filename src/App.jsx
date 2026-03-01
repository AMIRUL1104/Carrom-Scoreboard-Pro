import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import MatchSetup from "./pages/MatchSetup";
import PlayGround from "./pages/PlayGround";
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
      </Routes>
    </Router>
  );
}

export default App;
