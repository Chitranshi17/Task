import React from "react";
import Form from "./Form";
import ListGroup from "./ListGroup";

const Main = ({
  todos,
  todoDelete,
  saveTodo,
  editTodo,
  edit,
  updateTodo,
  dark,
}) => {
  return (
    <main>
      <div
        className={
          dark
            ? "container-fluid  d-flex align-items-center jsutify-content-center flex-column main-container bg-dark"
            : "container-fluid  d-flex align-items-center jsutify-content-center flex-column main-container bg-info"
        }
      >
        <Form
          saveTodo={saveTodo}
          edit={edit}
          updateTodo={updateTodo}
          dark={dark}
        />
        <div className="parent-container">
          <ListGroup
            todos={todos}
            todoDelete={todoDelete}
            editTodo={editTodo}
            dark={dark}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
