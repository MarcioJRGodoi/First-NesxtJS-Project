import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./Footer";
import { Main } from "./Content/index";
import styles from "../styles/main.module.css";
import Head from "next/head";
const MainContainer = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Bem Vindo</title>
        <link rel="icon" href="/images/images.jpg" />
      </Head>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
