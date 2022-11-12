import React from "react";
import ImagenReserva from "../asset/cliente.jpg";

export const CrearCliente = () => {
  return (
    <div className="contenedor">
      <div className="contenedor1">
        <h3>Crear Cliente</h3>
        <ul>
          <li>Clickear en la Opción cliente, del menú de opciones.</li>
          <li>Clickear Crear.</li>
          <li>Completar con los Datos del Cliente.</li>
          <li>Clickear Aceptar.</li>
        </ul>
      </div>
      <div className="contenedor2">
        <div>
          <img src={ImagenReserva} alt="" />
        </div>
      </div>
    </div>
  );
};
