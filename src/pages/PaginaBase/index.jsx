import Card from "../../components/Card/Card.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
import FavoritosProvider from "../../context/favoritos.jsx";
import Container from "../../components/Container/Container.jsx";
import { Outlet } from "react-router-dom";
import Pie from "../../components/Pie/Pie.jsx";

function PaginaBase() {
  return (
    <main>
      <Cabecera />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Pie />
    </main>
  );
}

export default PaginaBase;
