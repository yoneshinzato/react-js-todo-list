import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1>Todo List</h1>
        <TodoList />
      </>
    );
  }
}

export default App;
