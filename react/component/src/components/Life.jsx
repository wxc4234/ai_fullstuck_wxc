import  { Component, createRef } from "react";

export default class Life extends Component {
  constructor() {
    super();
    // console.log('Life 组价开始加载');
    this.ref = createRef();

    this.state = {
      count: 1,
    };
  }

  handlerClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    // this.state.count++;
    // this.forceUpdate();
  };

  componentDidMount() {
    console.log("Life 组件挂载完成", this.ref.current);
  }

  componentDidUpdate() {
    console.log("Life 组件更新完成", this.ref.current);
  }

  render() {
    console.log("Life 组价开始编译");
    return (
      <div>
        <h4 ref={this.ref} onClick={() => this.handlerClick()}>
          {this.state.count}
        </h4>
      </div>
    );
  }
}
