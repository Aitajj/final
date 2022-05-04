import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Campaings from "./pages/Campaings";
import Contact from "./pages/Contact";
import Freight from "./pages/Freight";
import CarpetWash from "./pages/CarpetWash";
import Evacuation from "./pages/Evacuation";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>

        <Routes>
          <Route path="campaigns" element={<Campaings/>} />
        </Routes>

        <Routes>
          <Route path="contact" element={<Contact/>} />
        </Routes>

        <Routes>
          <Route path="freight" element={<Freight/>} />
        </Routes>

        <Routes>
          <Route path="carpetwash" element={<CarpetWash/>} />
        </Routes>

        <Routes>
          <Route path="evacuation" element={<Evacuation/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
