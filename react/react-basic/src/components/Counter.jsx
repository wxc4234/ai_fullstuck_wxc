// const Counter = () => {
//   return (
//     <div>
//       <button>计数器</button>
//     </div>
//   )
// }

// export default Counter;

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  setCount = () => {
    this.setState({
      // 继承自Component的方法，用于更新state，里面会触发视图更新
      count: this.state.count + 1,
      // 如果不使用箭头函数this指向undefined，因为这个函数是作为一个普通函数调用的，而不是作为一个对象的方法调用的
    });
  };

  render() {
    return (
      <button onClick={this.setCount}>计数器 -- {this.state.count}</button>
    );
  }
}

export default Counter;
