// import List from "./components/List";
// import Page from "./components/Page";
// import Life from "./components/Life";
import TodoList from "./todoList/TodoList";

const App = () => {
  // const colors = [
  //   { id: 1, name: 'red' },
  //   { id: 2, name: 'blue' },
  //   { id: 3, name: 'green' },
  // ]

  return (
    <div>
      <h2>hello react</h2>
      {/* <List colors={colors} fn={() => { }} obj={{ name: 'wxc' }} /> */}
      {/* <Page /> */}

      {/* <Life /> */}
      <TodoList />
    </div>
  );
};


export default App;