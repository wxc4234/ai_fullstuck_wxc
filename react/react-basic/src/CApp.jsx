// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import CChild from "./components/C-Child"

export default class CApp extends Component {
  state = {
    msg: '这是父组件需要的数据'
  }

  fn = () => {
    console.log('parent');
  }

  render() {
    return (
      <div>
        <h2>父组件</h2>

        <CChild msg ={ this.state.msg } />
      </div>
    )
  }
}
