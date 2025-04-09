"use client";

import { useCallback, useState } from "react";
import Todo from "./todo";

export default function CallbackComp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const addTodo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <Todo addTodo={addTodo} todos={todos} />
      <hr />
      <div>
        Count : {count}
        <button
          className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
