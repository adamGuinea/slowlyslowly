import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

export const InputTodo = () => {
  const [description, setDescription] = useState("");

  let history = useHistory();

  async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      setDescription("");
      history.push("/");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1>Daily Goals</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};
