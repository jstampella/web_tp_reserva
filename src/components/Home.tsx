import React from "react";
import ImagenReserva from "../asset/home.jpg";

export const Home = () => {
  return (
    <div className="contenedor">
      <div className="contenedor2">
        <h1>Sistema de Reserva</h1>
        <div>
          <img src={ImagenReserva} alt="" />
        </div>
      </div>
    </div>
  );
};
