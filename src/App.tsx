import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Home } from "./components/Home";
import { CrearReserva } from "./components/CrearReserva";
import { CrearAlojamiento } from "./components/CrearAlojamiento";
import { AnularReserva } from "./components/AnularReserva";
import { NavBar } from "./components/NavBar";
import { CrearCliente } from "./components/CrearCliente";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crear-reserva" element={<CrearReserva />} />
          <Route path="/crear-alojamiento" element={<CrearAlojamiento />} />
          <Route path="/crear-cliente" element={<CrearCliente />} />
          <Route path="/anular-reserva" element={<AnularReserva />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
