"use client";

import { useEffect, useState } from "react";

export default function StateComp() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `count state = ${count}`;
  }, [count]);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
      >
        increment
      </button>
      <h1 className="text-6xl font-bold">{count}</h1>
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
      >
        decrement
      </button>
    </div>
  );
}
