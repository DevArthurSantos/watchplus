import axios from "axios";
import style from "../../styles/Home.module.css";
import FilmeCard from "../components/filmeCard";
import Header from "../components/header";

function Populares(props) {
  const date = props.date;
  return (
    <div>
      <title>WatchPlus - Populares</title>
      <div className={style.conteiner}>
        <Header />
        <h1 className={style.tituloPopulares}>Populares</h1>
        <main className={style.mainPopulares}>
          {date.map((Filmes) => {
            const imgUrl =
              "https://image.tmdb.org/t/p/w220_and_h330_face" +
              Filmes.backdrop_path;
            return (
              <FilmeCard
                titulo={Filmes.title}
                lang={Filmes.original_language}
                capa={imgUrl}
                popularidade={Filmes.popularity}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const api = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=05bfa3fcdadc2a3de82b7bcf9a41d052&language=pt-BR&page=1"
  );
  const res = api.data.results;
  return { props: { date: res } };
}

export default Populares;
