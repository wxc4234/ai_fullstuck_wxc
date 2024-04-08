import React from "react";
// eslint-disable-next-line no-unused-vars
import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";

import { Provider } from "./Provider";

class BApp extends React.Component {
  state = {
    message: "hello",
  };

  fn = (newMsg) => {
    console.log(newMsg);
    this.setState({
      message: newMsg,
    });
  };

  render() {
    return (
      <Provider value={ this.state.message }>
        <div>
          <h2>父组件</h2>
          {/* <BrotherA cb={this.fn} />
        <BrotherB message={ this.state.message } /> */}

          <BrotherB />
        </div>
      </Provider>
    );
  }
}

export default BApp;
