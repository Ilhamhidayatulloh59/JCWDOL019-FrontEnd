"use client";

import TodoItem from "@/components/todoItem";
import { RootState } from "@/redux/store";
import { setTodos } from "@/redux/todoSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onAddTodo = () => {
    if (inputRef.current && inputRef.current.value != "") {
      const desc = inputRef.current.value;
      const maxId =
        todos.length == 0 ? 0 : Math.max(...todos.map((todo) => todo.id));
      // setTodos([...todos, { id: maxId + 1, desc, done: false }]);
      dispatch(setTodos([...todos, { id: maxId + 1, desc, done: false }]));
      inputRef.current.value = "";
    } else {
      alert("Input empty");
    }
  };

  const onDoneTodo = (id: number) => {
    const newTodos = todos.map((item) => {
      if (item.id == id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    // setTodos(newTodos)
    dispatch(setTodos(newTodos));
  };

  const onDeleteTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    // setTodos(newTodos)
    dispatch(setTodos(newTodos));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/03b8/22a8/10f232874b021926bb904eafb394287f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dyeFvUxkhBnHDEM27lBLUUTyATset9iQMFID~aQr0~ErlcEAwxz~9488YjGJ09ibZ1KsvqJdNJqpgIq77nbeKu79HdAx8Usd131i3~WuxHK1i6xO6aLCDApjAwUOplKCLpaeNdma0ZSkDSLpDj5bMurMDsqwe5gz2wYF8nNpOFPhAo4dssM-2oiIRBfiIbWb17VbuSKGu7ZNswjAHg8T0-r828QjruOkSZS05naUHB3RPykS1Kic2Afw85JzqNIIe~2ZKZBMeWcOwjtUCzCtlt0V9zAGVpMobcQVJm4ikokcrni7ylzeLq8kGjZMpPXktYZODJj4Hqicd6cR4SA~ug__')", // ganti ini
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-400 opacity-70 mix-blend-multiply" />
      </div>

      <section className="relative z-10 -mt-44 mx-auto w-full max-w-xl px-6">
        <div className="relative z-10 mb-10 flex items-center justify-between text-white text-3xl font-bold tracking-[0.3em] uppercase">
          <span>Todo</span>
        </div>
        <div className="bg-white rounded-md flex items-center px-5 py-2 shadow-md">
          <input
            ref={inputRef}
            type="text"
            placeholder="Create a new todo..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={onAddTodo}
            className="ml-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <div className="bg-white mt-4 rounded-md shadow-md overflow-hidden">
          {todos.map((todo, idx) => (
            <TodoItem
              todo={todo}
              onDone={onDoneTodo}
              onDelete={onDeleteTodo}
              key={idx}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
