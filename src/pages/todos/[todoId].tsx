import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export async function getStaticProps(context: any) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();
  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();

  const paths = data.map((todo: any) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });
  return { paths, fallback: false };
}

const Todo = ({ todo }: any) => {
  const router = useRouter();

  return (
    <>
      <Link href="/todos" legacyBehavior>
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo ID: {todo.id}</h1>
      <h3>texto: {todo.title}</h3>
      <p>
        Comentario aaaaa{" "}
        <Link href={`/todos/${todo.id}/comments/${todo.id}`} legacyBehavior>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  );
};
export default Todo;
