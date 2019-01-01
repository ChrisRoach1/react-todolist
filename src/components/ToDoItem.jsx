import React, { Component } from "react";
import "../ToDoItem.css";
export default props => (
  <div className="listItem" style={{ display: "flex" }}>
    <div
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button
      type="button"
      className="close deleteBtn"
      aria-label="Close"
      onClick={props.onDelete}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);
