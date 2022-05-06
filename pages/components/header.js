import style from "../../styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Input from "./input";

export default function Header() {
  function buscarFilmes(querys) {
    console.log(querys);
  }
  return (
    <div>
      <header className={style.header}>
        <div className={style.headerTitulo}>
          <h1 className={style.titleH1}>
            WATCH<span className={style.titleH1Span}>PLUS</span>
          </h1>
        </div>
        <div className={style.menu}>
          <nav className={style.navBar}>
            <ul>
              <li>
                <Link href="/">
                  <a>INICIO</a>
                </Link>
              </li>
              <li>
                <Link href="/populares">
                  <a>POPULARES</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.headerSRCPFL}>
          <span className={style.searchIcon}>
            <FaSearch />
          </span>
          <Input onQuery={buscarFilmes} />
          <Image
            src="/img/profile.png"
            width="30"
            height="30"
            alt="foto de perfil"
            className={style.headerProfileIMG}
          />
        </div>
      </header>
    </div>
  );
}
