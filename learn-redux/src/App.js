import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Search />
    </div>
  );
}

export default App;
