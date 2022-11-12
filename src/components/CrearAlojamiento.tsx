import React from "react";
import ImagenReserva from "../asset/alojamiento.jpg";
import ImagenReserva2 from "../asset/alojamientoList.jpg";

export const CrearAlojamiento = () => {
  return (
    <div className="contenedor">
      <div className="contenedor1">
        <h3>Crear Alojamiento:</h3>
        <ul>
          <li>Clickear en la opción Alojamiento, del menú de opciones.</li>
          <li>Clickear Crear.</li>
          <li>Completar con las características del mismo.</li>
          <li>
            Clickear Crear, para guardar el alojamiento en el sistema (o
            Cancelar, si fuera el caso).
          </li>
        </ul>
        <h3>Modificar Alojamiento:</h3>
        <ul>
          <li>Clickear en la opción Alojamiento, del menú de opciones.</li>
          <li>Clickear Listar.</li>
          <li>
            Seleccionar de la lista de alojamientos existentes, aquel que se
            desee modificar.
          </li>
          <li>Actualizar sus características.</li>
          <li>Clickear Modificar.</li>
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
