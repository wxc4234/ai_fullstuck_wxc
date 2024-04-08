// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

// 受控组件 input框自己的value状态被react组件状态所控制
export default class InputComponent extends Component {
  state = {
    message: '你好'
  }

  changeHandler = (e) => {
    // console.log(123);
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.message } onChange={this.changeHandler}/>
      </div>
    )
  }
}
