import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle arial-aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-nabvar-nav">
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/crear-reserva">Crear Reserva</NavLink>
            <NavLink to="/crear-alojamiento">Crear Alojamiento</NavLink>
            <NavLink to="/crear-cliente">Crear Cliente</NavLink>
            <NavLink to="/anular-reserva">Anular Reserva</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
