import styles from "./Favoritos.module.css";
import Banner from "../../components/Banner/Banner.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Card from "../../components/Card/Card.jsx";
import { useFavoritosContext } from "../../context/favoritos.jsx";

function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner img={"favoritos"} color={"#AF7EAA"} />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
