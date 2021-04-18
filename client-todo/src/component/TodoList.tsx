import React, { useState} from "react";
import { TodoType } from "../types";
import Todo from "./Todo";
import Pagination from "../util/Pagination";

interface Props {
  setShowDetails: (item: TodoType) => void;
  setDetails: (item: boolean) => void;
  data: TodoType[] | undefined;
  isLoading: boolean;
  error: any;
  onUpdate: (item: string) => void;
  onDelete: (item: string) => void;
}

const TodoList: React.FC<Props> = ({
  setShowDetails,
  setDetails,
  data,
  isLoading,
  error,
  onUpdate,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong:{error}</div>;
  if (data?.length === 0) return <div>No Items On List</div>;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * todosPerPage;
  const indexOfFirstPost = indexOfLastPost - todosPerPage;
  const currentPosts = data && data.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {currentPosts &&
          currentPosts.map((item) => (
            <Todo
              key={item.id}
              item={item}
              setShowDetails={setShowDetails}
              setDetails={setDetails}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
      </ul>
      <Pagination
        paginate={paginate}
        postPerPage={todosPerPage}
        totalPosts={data ? data.length : 0}
      />
    </div>
  );
};

export default TodoList;
