import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <h1> Learning UseEffect in React</h1>
      <Counter />
      <Search />
      <Profile />
    </>
  );
}

export default App;
