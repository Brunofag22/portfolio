import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "../components/main-Corridor";
import Pasillo2 from "/src/components/pasillo2.jsx";

export default function Rutas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Pasillo2" element={<Pasillo2 />}></Route>
        </Routes>
      </Router>
    </>
  );
}
