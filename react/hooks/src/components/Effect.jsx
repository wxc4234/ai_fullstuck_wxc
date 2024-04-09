import  { useEffect,useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');

  useEffect(() => {
    console.log('当前点击了' + count + '次');
  },[count,name])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName('李四')}>{name}</button>
    </div>
  );
};

export default Effect;