import React from "react";
import { TodoType } from "../types";

interface Props {
  todo: TodoType;
  setShowDetails: (item: undefined) => void;
}

const TodoListItem: React.FC<Props> = ({ todo, setShowDetails }) => {
  return (
    <div className="card-item" onClick={() => setShowDetails(undefined)}>
      <p>Title:{todo.title}</p>
      <p>Description:{todo.description}</p>
      <p>Priority:{todo.priority}</p>
      <p>Completed:{JSON.stringify(todo.completed)}</p>
    </div>
  );
};

export default TodoListItem;
