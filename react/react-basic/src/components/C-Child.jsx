// // eslint-disable-next-line no-unused-vars
// import React, { Component } from "react";

// export default class CChild extends Component {
//   render() {
//     return (
//       <div>
//         <h4>子组件</h4>
//         <p>{this.props.msg}</p>
//       </div>
//     );
//   }
// }


function CChild(props) {
  console.log(this);
  return (

    <div>
      <h4>子组件</h4>
      <p>{props.msg}</p>
    </div>
  );
}

export default CChild;