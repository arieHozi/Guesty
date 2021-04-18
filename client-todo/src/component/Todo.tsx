import React from "react";
import { TodoType } from "../types";

interface Props {
  item: TodoType;
  setShowDetails: (item: TodoType) => void;
  setDetails: (item: boolean) => void;
  onUpdate: (item: string) => void;
  onDelete: (item: string) => void;
}

const Todo: React.FC<Props> = ({
  item,
  setShowDetails,
  setDetails,
  onUpdate,
  onDelete,
}) => {
  const HendleClick = () => {
    setShowDetails(item);
    setDetails(true);
  };

  return (
    <div className="todo">
      <li
        onClick={HendleClick}
        className={item.completed ? "todo-item active" : "todo-item"}
      >
        {item.title}
      </li>
      <button className="btn-complete" onClick={() => onUpdate(item.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="btn-trash" onClick={() => onDelete(item.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
