import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
