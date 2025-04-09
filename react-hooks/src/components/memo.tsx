"use client";
import { useMemo, useState } from "react";

export default function MemoComp() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incNumber = () => setNumber(number + 1);
  const incCount = () => setCount(count + 1);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 == 0;
  }, [number]);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
        onClick={incNumber}
      >
        number : {number}
      </button>
      <div className="text-6xl font-bold">
        {isNumberEven ? "even" : "odd"}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
        onClick={incCount}
      >
        count : {count}
      </button>
    </div>
  );
}
