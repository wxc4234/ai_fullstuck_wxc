// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

const State = () => {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("Hello World");
  const add = () => {
    setCount(count + 1);
    setTitle("Hello World " + count);
  }
  return (
    <div>
      <h4>title: { title }</h4>
      <button onClick={() => add()}>{ count }</button>
    </div>
  );
};

export default State;