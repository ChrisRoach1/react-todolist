import React, { Component } from "react";
import "../ToDo.css";

// the to do form
class ToDo extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") {
      alert("Please enter a task!");
    } else {
      this.props.onSubmit({
        id: Date.now(),
        text: this.state.text,
        complete: false
      });
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="to do..."
          className="form-control inputField"
        />
        <button className="btn btn-light addBtn" onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default ToDo;
