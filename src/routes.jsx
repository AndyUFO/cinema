import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/index.jsx";
import Favoritos from "./pages/Favoritos/index.jsx";
import Cabecera from "./components/Cabecera/Cabecera.jsx";
import Pie from "./components/Pie/Pie.jsx";
import Container from "./components/Container/Container.jsx";
import FavoritosProvider from "./context/favoritos.jsx";
import Player from "./pages/Player/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import PaginaBase from "./pages/PaginaBase/index.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
