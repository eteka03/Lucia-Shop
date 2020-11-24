import React from "react";
import { Container } from "reactstrap";
import MenuPrincipal from "./MenuPrincipal";
import PiedDePage from "./PiedDePage";

export default function Layout({ children }) {
  return (
    <Container className="layout" fluid={true}>
      <header className="conteneur_large">
        <MenuPrincipal />
      </header>

      <main>{children}</main>

      <footer>
        <PiedDePage />
      </footer>
    </Container>
  );
}
