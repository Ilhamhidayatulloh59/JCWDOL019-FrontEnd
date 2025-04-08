export default function Home() {
  const data = [
    { text: "Complete online JavaScript course", done: true },
    { text: "Jog around the park 3x", done: false },
    { text: "10 minutes meditation", done: false },
    { text: "Read for 1 hour", done: false },
    { text: "Pick up groceries", done: false },
    { text: "Complete Todo App on Frontend Mentor", done: false },
  ];
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
        <div className="bg-white rounded-md flex items-center px-5 py-4 shadow-md">
          <input
            type="text"
            placeholder="Create a new todo..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="bg-white mt-4 rounded-md shadow-md overflow-hidden">
          {data.map((todo, idx) => (
            <div
              key={idx}
              className="flex items-center px-5 py-4 border-b last:border-none group"
            >
              <div
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
              <span
                className={`text-sm md:text-base ${
                  todo.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
