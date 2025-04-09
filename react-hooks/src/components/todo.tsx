"use client";

import { memo } from "react";

interface IProps {
  todos: string[];
  addTodo: () => void;
}

function Todo({ todos, addTodo }: IProps) {
  console.log("child render");
  return (
    <div>
      <h2>My Todo</h2>
      {todos.map((item, idx) => {
        return <p key={idx}>{item}</p>;
      })}
      <button
        className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  );
}

export default memo(Todo);
