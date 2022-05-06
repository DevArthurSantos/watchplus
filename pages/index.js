import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import Lancamento from "./components/lancamento";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.conteiner}>
        <Header />
        <Lancamento />
        <main className={styles.mainPopulares}></main>
      </div>
    </div>
  );
}
