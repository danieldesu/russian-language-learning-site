import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mainmenu from "./components/Mainmenu";
import Cyrillic from "./routes/Cyrillic";
import Words from "./routes/Words";
import Phrases from "./routes/Phrases";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Mainmenu />} />
          <Route path="/cyrillic" element={<Cyrillic />} />
          <Route path="/words" element={<Words />} />
          <Route path="/phrases" element={<Phrases />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
