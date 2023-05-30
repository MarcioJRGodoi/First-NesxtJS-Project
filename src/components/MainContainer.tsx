import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./Footer";
import styles from "../styles/main.module.css";
const MainContainer = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
