// eslint-disable-next-line no-unused-vars
import React from "react";
import { Consumer } from "../Provider";

// eslint-disable-next-line no-unused-vars
const BrotherB = (props) => {
  return (
    <Consumer>
      {
        (value) => {
          return (
            <div>
              <h4>子组件B -- { value }</h4>
            </div>
          );
        }
      }
    </Consumer>
  );
};

BrotherB.propTypes = {};

export default BrotherB;
