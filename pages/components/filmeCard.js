import style from "../../styles/Home.module.css";
import Image from "next/image";
import { useRef } from "react";

export default function FilmeCard(props) {
  let paragrafo = useRef(null);
  const onMouseEnter = () => {
    paragrafo.current.style.visibility = "visible";
  };
  const onMouseLeave = () => {
    setInterval(() => {
      paragrafo.current.style.visibility = "hidden";
    }, 5000);
  };
  return (
    <div className={style.filmeCard}>
      <div className={style.filmeCardFilme}>
        <div className={style.filmeCardSpanIMG}>
          <Image
            src={props.capa}
            width="150"
            height="200"
            alt="capa do filme"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className={style.filmeCardFilmeInfo} ref={paragrafo}>
          <p className={style.filmeCardInfoParagrafo}>
            Genero: Ação/Suspense
            <br />
            Audio: {props.lang}
            <br />
            Legendas: {props.lang}
            <br />
            Popularidade: {props.popularidade.toString()}
          </p>
          <h3 className={style.filmeCardFilmeInfoTitulo}>{props.titulo}</h3>
        </div>
        <button className={style.filmeCardButton}>Overview</button>
      </div>
    </div>
  );
}
