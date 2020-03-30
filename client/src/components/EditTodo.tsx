import React, { useState } from "react";
import Modal from "react-modal";
import { Todo } from "./ListTodo";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    width: 300,
    height: "auto",
    overflow: "scroll"
  }
};

type Props = {
  closeViewModal: () => void;
  todo: Todo | null;
};

export const EditTodo = ({ closeViewModal, todo }: Props) => {
  const [description, setDescription] = useState("");

  async function updateDescription(e: any) {
    e.preventDefault();

    try {
      const body = { description };
      console.log(body);
      console.log(description);
      await fetch(`http://localhost:5000/todos/${todo && todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={closeViewModal}
    >
      <button className="modal__close" onClick={closeViewModal}>
        close
      </button>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={e => updateDescription(e)}>Confirm</button>
    </Modal>
  );
};
