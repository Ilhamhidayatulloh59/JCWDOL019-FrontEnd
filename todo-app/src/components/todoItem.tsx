"use client";

import { ITodo } from "@/types/todo";

interface IProps {
  todo: ITodo;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onDone, onDelete }: IProps) {
  return (
    <div
      key={todo.id}
      className="flex items-center px-5 py-4 border-b last:border-none group"
    >
      <div
        onClick={() => onDone(todo.id)}
        className={`w-5 h-5 border-2 rounded-full mr-4 flex-shrink-0 ${
          todo.done
            ? "bg-gradient-to-br from-purple-400 to-blue-400 border-none"
            : "border-gray-300"
        }`}
      >
        {todo.done && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white mx-auto mt-[1px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <div className="flex w-full justify-between">
        <span
          className={`text-sm md:text-base ${
            todo.done ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.desc}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-1 bg-red-500 text-white text-sm rounded-sm"
        >
          delete
        </button>
      </div>
    </div>
  );
}
