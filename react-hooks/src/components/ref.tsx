"use client";

import { useEffect, useRef } from "react";

export default function RefComp() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const onSubmit = () => {
    if (inputRef.current) {
      const data = inputRef.current.value;
      alert(data);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        className="px-4 py-2 border rounded-xl mr-4"
        type="text"
      />
      <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white">
        submit
      </button>
    </div>
  );
}
