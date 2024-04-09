import  { Component } from "react";
// eslint-disable-next-line no-unused-vars
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    list: ["html", "css"],
    inputValue: "",
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue], // 将inputValue添加到list中
      inputValue: "",
    });
  };

  handleDelete = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({ list: newList });
  };

  render() {
    return (
      <div>
        <header>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />

          <button onClick={this.handleButtonClick}>提交</button>
        </header>
        <section>
          {/* 将list和删除方法作为props传递给TodoItem */}
          <TodoItem list={this.state.list} onDelete={this.handleDelete} />
        </section>
      </div>
    );
  }
}

export default TodoList;
