import { createContext, useContext, useState } from "react";

export const favoritosContext = createContext();

favoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  return (
    <favoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(favoritosContext);

  function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id,
    );
    let nuevaLista = [...favorito];

    if (!favoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
      return setFavorito(nuevaLista);
    }

    nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    return setFavorito(nuevaLista);
  }

  return { favorito, agregarFavorito };
}
