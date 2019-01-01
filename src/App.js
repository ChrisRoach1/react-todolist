import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToDoList />
      </React.Fragment>
    );
  }
}

export default App;
