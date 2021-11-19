import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNav title="Strivestaurant" />
        <Routes>
          <Route path="/" element={<Home title="Strivestaurant" />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
