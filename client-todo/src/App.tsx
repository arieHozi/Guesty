import React, { useState, useEffect } from "react";
import TodoListItem from "./component/TodoListItem";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { TodoType } from "./types";
import { getAll, createTodo, updateTodo, deleteTodo } from "./api/ApiRequests";

const App: React.FC = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [response, setResponse] = useState("Idle");
  const [showDetails, setShowDetails] = useState<TodoType | undefined>();
  const [details, setDetails] = useState(false);
  const [openAddTodo, setOpenAddTodo] = useState(false);
  const [callApi, setCallApi] = useState(true);

  useEffect(() => {
    setResponse("loading");

    getAll()
      .then((response) => {
        try {
          setData(response.data);
          setResponse("loded");
        } catch {
          setResponse("Erorr request");
        }
      })
      .catch((err) => {
        setResponse("Error Network");
      });
  }, [callApi]);

  const onNewTodoSubmit = (newTodo: TodoType) => {
    createTodo(newTodo)
      .then((response) => {
        try {
          setData(response.data);
        } catch {
          setResponse("Eroor");
        }
      })
      .catch((err) => {
        setResponse("Error Saving data");
      });
  };
  const onUpdate = (id: string) => {
    updateTodo(id)
      .then((response) => {
        try {
          setData(response.data);
          setCallApi((pre) => !pre);
        } catch {
          setResponse("Eroor");
        }
      })
      .catch((err) => {
        setResponse("Error Saving data");
      });
  };
  const onDelete = (id: string) => {
    deleteTodo(id)
      .then((response) => {
        try {
          setData(response.data);
          setCallApi((pre) => !pre);
        } catch {
          setResponse("Eroor");
        }
      })
      .catch((err) => {
        setResponse("Error Saving data");
      });
  };

  return (
    <div className="wrapper">
      <header>
        <h1 id="app-header">My Todo list</h1>
      </header>
      <button className="btn" onClick={() => setOpenAddTodo((pre) => !pre)}>
        add to do
      </button>

      {openAddTodo ? <TodoInput onNewTodoSubmit={onNewTodoSubmit} /> : null}

      {showDetails ? (
        <TodoListItem todo={showDetails} setShowDetails={setShowDetails} />
      ) : (
        <TodoList
          setShowDetails={setShowDetails}
          setDetails={setDetails}
          data={data}
          isLoading={response === "Loading" ? true : false}
          error={
            response === "Erorr request" || response === "Error Network"
              ? true
              : false
          }
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default App;
