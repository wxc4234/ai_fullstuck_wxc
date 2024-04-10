
import { useContext } from 'react';
import Con from '../_context';

const ContextChild = () => {
  const msg = useContext(Con);
  return (
    <div>
      <h4>ContextChild --{ msg }</h4>
    </div>
  );
};

export default ContextChild;