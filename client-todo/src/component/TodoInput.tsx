import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../types";

interface Props {
  onNewTodoSubmit: (item: TodoType) => void;
}

const TodoInput: React.FC<Props> = ({ onNewTodoSubmit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");

  const cleanInput = () => {
    setTitle("");
    setDesc("");
    setPriority("Low");
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: title,
      description: desc,
      priority: priority,
      completed: false,
    };
    onNewTodoSubmit(newTask);
    cleanInput();
  };

  return (
    <form className="form-input" onSubmit={onSubmitHandler}>
      <div className="input-item">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="input-item">
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          type="text"
          placeholder="Description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </div>
      <div className="input-item">
        <label htmlFor="priority">Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Meduim</option>
          <option>High</option>
        </select>
      </div>
      <input className="btn btn-input" type="submit" value="submit" />
    </form>
  );
};

export default TodoInput;
