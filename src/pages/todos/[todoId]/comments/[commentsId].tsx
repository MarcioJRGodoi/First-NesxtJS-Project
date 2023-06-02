import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Coments = () => {
  const router = useRouter();

  const commentId = router.query.commentsId;
  const todoId = router.query.todoId;

  return (
    <>
      <Link href={`/todos/${todoId}`} legacyBehavior>
        <a>Voltar</a>
      </Link>
      <h2>Comentario Foda: {commentId}</h2>
    </>
  );
};
export default Coments;
