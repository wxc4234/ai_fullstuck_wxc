
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';
import { useState } from 'react';

// 父组件
const TodoList = () => {
  const [intputval, setIntputval] = useState('');
  const [data, setData] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]);

  const handlerInput = (e) => {
    setIntputval(e.target.value);
  }

  const handlerButton = () => {
    if(!intputval) return;
    setData([...data, intputval]);

    setIntputval('');
  }

  const handlerDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" value={intputval} onChange={handlerInput}/>
        <Button onClick={handlerButton}>提交</Button>
      </header>

      <section>
        <TotoItem data={data} onDelete={handlerDelete}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;