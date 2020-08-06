import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: [],
    };
  }

  addItem = (e) => {
    let state = this.state;
    if (this._taskInput.value !== "") {
      let newItem = {
        text: this._taskInput.value,
        key: Date.now(),
      };
      this.setState({ items: [...state.items, newItem] });
    }

    e.preventDefault();
    this.setState({ task: "" });
  };

  log = () => {
    console.log(this.state.items);
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="New Task"
            name="task"
            value={this.state.task}
            onChange={(event) => this.setState({ task: event.target.value })}
            ref={(ev) => (this._taskInput = ev)}
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={this.log}>log</button>
      </div>
    );
  }
}

export default TodoList;
