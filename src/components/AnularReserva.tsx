import React from "react";
import ImagenReserva from "../asset/reservaList.jpg";
import ImagenReserva2 from "../asset/anularReserva.jpg";

export const AnularReserva = () => {
  return (
    <div className="contenedor">
      <div className="contenedor1">
        <h3>Anular Reserva:</h3>
        <ul>
          <li>Clickear en la opción Reservas del menú de opciones.</li>
          <li>Clickear Listar</li>
          <li>
            Seleccionar de la lista de Reservas, aquella que se desee anular.
          </li>
          <li>Clickear en Editar</li>
          <li>En el listado seleccionar Cancelar</li>
          <li>Presionar boton aceptar</li>
        </ul>
      </div>
      <div className="contenedor2">
        <div>
          <img src={ImagenReserva} alt="" />
        </div>
        <div>
          <img src={ImagenReserva2} alt="" />
        </div>
      </div>
    </div>
  );
};
