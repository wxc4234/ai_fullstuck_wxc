// import State from "./components/State";
// import Effect from "./components/Effect";
// import MyHooks from "./components/MyHooks";
// import State2 from "./components/State2";
// import Ref from "./components/Ref";
// import Con from "./_context";
// import Context from "./components/Context";
// import { Button } from "antd";

import TodoList from "./todo/TodoList";

const App = () => {
  return (
    // <Con.Provider value={"来自App中的数据"}>
    //   <div>
    //     {/* <State /> */}
    //     {/* <Effect /> */}
    //     {/* <MyHooks /> */}
    //     {/* <State2 num={ 10 } /> */}
    //     {/* <Ref /> */}
    //     <Context></Context>
    //   </div>
    //   <Button type="primary">antd</Button>
    // </Con.Provider>

    <div>
      <TodoList />
    </div>
  );
};

export default App;
