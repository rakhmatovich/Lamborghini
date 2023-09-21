import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Models from "./pages/Models";
import MotorSport from "./pages/MOTORSPORT";
import Museum from "./pages/Museum";
import Shop from "./pages/Shop";
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motorsport" element={<MotorSport />} />
        <Route path="/store" element={<Store />} />
        <Route path="/company" element={<Company />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/models" element={<Models />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
