import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoItem from "./ToDoItem";
import "../ToDoList.css";
//the to do list
class ToDoList extends Component {
  state = {
    todos: [],
    todosToShow: "all"
  };

  addToDo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateToDoToShow = s => {
    this.setState({
      todosToShow: s
    });
  };

  handleDeleteToDo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className="jumbotronCustom">
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteToDo(todo.id)}
            todo={todo}
          />
        ))}

        <ToDo onSubmit={this.addToDo} />
        <div>
          <button
            className="btn btn-light btns"
            onClick={() => this.updateToDoToShow("all")}
          >
            All
          </button>
          <button
            className="btn btn-light btns"
            onClick={() => this.updateToDoToShow("active")}
          >
            Active
          </button>
          <button
            className="btn btn-light btns"
            onClick={() => this.updateToDoToShow("complete")}
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
