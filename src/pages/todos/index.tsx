import React from "react";
import styles from "../../styles/todos.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  return {
    props: { todos },
  };
}

const Todos = ({ todos }: any) => {
  return (
    <>
      <h1>Tarefas para fazer</h1>
      <ul className={styles.todolist}>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.title} -{" "}
            <Link href={`/todos/${todo.id}`} legacyBehavior>
              <a>Ver mais</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
