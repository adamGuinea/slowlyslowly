import React, { Fragment, useState, useEffect } from "react";
import { EditTodo } from "./EditTodo";

export type Todo = {
  description: string;
  todo_id: number;
};

export const ListTodo = () => {
  const [todos, setTodos] = useState<Todo[] | null>();
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);

  async function getTodos() {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const jsonData = await res.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteTodo(id: number) {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos && todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  function closeViewModal() {
    setModal(false);
  }

  function editTodo(todo: Todo) {
    //@ts-ignore
    setSelected(todo);
    setModal(true);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {todos &&
        todos.map(todo => (
          <div key={todo.todo_id}>
            <h3>{todo.description}</h3>
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
          </div>
        ))}
      {modal && <EditTodo todo={selected} closeViewModal={closeViewModal} />}
    </Fragment>
  );
};
