"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext<string>("");

export default function ContextComp() {
  const [user] = useState<string>("Andi");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Hello {user}</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Component 3</h1>
    </div>
  );
}
