import React from "react";
import { Collapsible } from "../componentes_formularios/Collapsible";
const NavBar = () => {
  return (
    <>
      <section>
        <nav>
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
        </nav>
      </section>
    </>
  );
};
export { NavBar };
