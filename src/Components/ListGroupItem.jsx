import React from "react";

const ListGroupItem = ({ todo, todoDelete, editTodo, dark }) => {
  return (
    <>
      <li
        className={
          dark
            ? "list-group-item  p-5 d-flex align-items-center justify-content-between bg-info mt-2 border border-black"
            : "list-group-item  p-5 d-flex align-items-center justify-content-between bg-dark mt-2 border light"
        }
        style={{ height: "4rem" }}
      >
        <h6 className={dark ? " fs-4 text-dark" : "text-light fs-4"}>
          {todo.title}
        </h6>
        <span className="float-end">
          <button
            className="btn fs-4 btn-sm btn-warning rounded-0"
            onClick={() => editTodo(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm fs-4 btn-danger rounded-0"
            onClick={() => todoDelete(todo.id)}
          >
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default ListGroupItem;
