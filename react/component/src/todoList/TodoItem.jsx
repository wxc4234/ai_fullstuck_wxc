
import { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => this.props.onDelete(index)}>x</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoItem;
