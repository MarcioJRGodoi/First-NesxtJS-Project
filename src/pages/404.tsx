import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Essa página não existe!</p>
      <Link href="/" legacyBehavior>
        <a>Voltar</a>
      </Link>
    </>
  );
};

export default NotFound;
