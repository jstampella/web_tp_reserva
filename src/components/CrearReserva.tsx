import React from "react";
import ImagenReserva from "../asset/reserva.jpg";
import ImagenReserva2 from "../asset/reserva2.jpg";

export const CrearReserva = () => {
  return (
    <div className="contenedor">
      <div className="contenedor1">
        <h3>Crear Reserva</h3>
        <ul>
          <li>Clickear en la Opción Reserva, del menú de opciones.</li>
          <li>Clickear Crear.</li>
          <li>Elegir la fecha de Inicio del hospedaje.</li>
          <li>
            Elegir entre la lista de clientes, aquel que quiera realizar la
            Reserva.
          </li>
          <li>
            Si el cliente no está registrado, seleccionar en el botón crear y
            registrarlo, siguiendo los pasos de "Crear Cliente".
          </li>
          <li>Seleccionar la cantidad de días de duración del hospedaje.</li>
          <li>Seleccionar la cantidad de Huéspedes.</li>
          <li>Elegir el Tipo de Alojamiento (casa, hotel o todos)</li>
          <li>
            Seleccionar Filtro (Ciudad, Nombre del Alojamiento o ID del
            Alojamiento).
          </li>
          <li>
            Clickear Buscar. Aparecerá el o los Alojamientos que cumplan con las
            características seleccionadas.
          </li>
          <li>Seleccionar uno, según las Preferencias del Cliente.</li>
          <li>Clickear Presupuesto, imprimir.</li>
          <li>Clickear Reservar para completar reserva.</li>
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
