import React from "react";
import { InputTodo } from "./components/InputTodo";
import { BrowserRouter } from "react-router-dom";
import { ListTodo } from "./components/ListTodo";

function App() {
  return (
    <BrowserRouter>
      <InputTodo />
      <ListTodo />
    </BrowserRouter>
  );
}

export default App;
