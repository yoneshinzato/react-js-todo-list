import React, { Component } from "react";
import TodoItems from "../TodoItems/TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: [],
    };
  }

  addItem = (ev) => {
    let state = this.state;
    if (this._taskInpput.value !== "") {
      let newItem = {
        text: this._taskInpput.value,
        key: Date.now(),
      };
      this.setState({ items: [...state.items, newItem] });
    }
    ev.preventDefault();
    this.setState({ task: "" });
  };

  // log = () => {
  //   console.log(this.state.items);
  // };

  deleteItem = (key) => {
    // console.log(key);
    let filt = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({ items: filt });
  };

  render() {
    return (
      <>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="new task"
            name="task"
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
            ref={(event) => (this._taskInpput = event)}
          />
          <button type="submit">Adicionar</button>
        </form>
        {/* <button onClick={this.log}>log</button> */}
        <TodoItems list={this.state.items} delete={this.deleteItem} />
      </>
    );
  }
}

export default TodoList;
