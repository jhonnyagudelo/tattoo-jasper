import React from "react";
import { Collapsible } from "../componentes_formularios/Collapsible";
import { Nav } from "./styles";
const NavBar = () => {
  return (
    <>
      <section>
        <Nav>
          <figure>
            <img src="../../../assets/images/logo.jpeg" width="100" />
          </figure>
          <li>Home</li>
          <Collapsible summary={"Estilos de tatuajes"}>
            <ul>
              <li>Realista</li>
              <li>Lettering</li>
              <li>New School</li>
              <li>Dotwork</li>
              <li>Geometrico</li>
            </ul>
          </Collapsible>
          <Collapsible summary={"Artistas"}>
            <ul>
              <li>Christian raigosa</li>
            </ul>
          </Collapsible>
          <li>Pedir una cotizacion</li>
          <li>Reservar una cita</li>
        </Nav>
      </section>
    </>
  );
};
export { NavBar };
