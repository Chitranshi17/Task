import React, { useEffect, useState } from "react";

const Form = ({ saveTodo, edit, updateTodo, dark }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updateTodo(edit.todo.id, title);
    } else {
      saveTodo(title);
    }
    setTitle("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
  }, [edit]);

  return (
    <div
      className="container d-flex align-items-center jsutify-content-center w-50 mt-5"
      style={{}}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-100 d-flex  justify-content-cneter flex-column"
      >
        <div className="mb-3 form">
          {/* <label  className="form-label">
         Add Your Task Here
        </label> */}
          <input
            type="text"
            className="form-control rounded-0 p-3 fs-3"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Task Here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <button
          type="submit"
          className={
            dark
              ? "btn bg-info rounded-0 p-3 fw-bold fs-4 "
              : "btn bg-dark rounded-0 p-3 fw-bold  text-light fs-4"
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
