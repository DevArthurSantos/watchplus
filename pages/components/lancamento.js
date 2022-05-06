import style from "../../styles/Home.module.css";
import Image from "next/image";

export default function Lancamento() {
  return (
    <div className={style.lancamentoContainer}>
      <h2 className={style.lancamentoFilmeTitulo}>LANÇAMENTO</h2>
      <div className={style.lancamentoFilme}>
        <Image src="/img/profile.png" width="90" height="150" />
        <div className={style.lancamentoFilmeInfo}>
          <h3 className={style.lancamentoFilmeInfoTitulo}>Titulo</h3>
          <p className={style.lancamentoFilmeInfoParagrafo}>
            DATA | QUALIDADE | DURAÇÂO
            <br />
            Genero: Ação/Suspense
            <br />
            Audio: Português/Inglês
            <br />
            Legendas: Externa
            <br />
            Tamanho: 2.43 GB
          </p>
        </div>
      </div>
      <button className={style.lancamentoButton}> Mais informaçoes</button>
    </div>
  );
}
