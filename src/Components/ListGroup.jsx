import React from "react";
import ListGroupItem from "./ListGroupItem";

const ListGroup = ({ todos, todoDelete, editTodo, dark }) => {
  return (
    <ul className="list-group child-container ">
      {todos.map((todo) => (
        <ListGroupItem
          key={todo.id}
          todo={todo}
          todoDelete={todoDelete}
          editTodo={editTodo}
          dark={dark}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
