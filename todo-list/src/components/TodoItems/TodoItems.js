import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delete = (key) => {
    this.props.delete(key);
  };

  render() {
    return (
      <>
        <ul>
          {this.props.list.map((item) => {
            return (
              <li onClick={() => this.delete(item.key)} key={item.key}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoItems;
