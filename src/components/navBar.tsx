import Link from "next/link";
import React from "react";
import styles from "../styles/navBar.module.css";
export const NavBar = () => {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/produtos" legacyBehavior>
            <a> Produtos</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>opa</Link>
        </li>
        <li>
          <Link href={"/main"}>main</Link>
        </li>
        <li>
          <Link href={"/todos"}>todos</Link>
        </li>
      </ul>
    </div>
  );
};
