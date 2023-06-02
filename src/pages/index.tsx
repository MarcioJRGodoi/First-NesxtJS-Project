import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
        <meta name="keywords" content="teste, minecraft, nextJS" />
        <meta name="description" content="Programa teste de nextJS" />
      </Head>
      <div className={styles.card}>
        <h1 className={styles.title}>Home</h1>
        <Image
          src="/images/images.jpg"
          alt="imagem de gato"
          width={500}
          height={400}
        />
      </div>
    </>
  );
}
