import './Counter.css';
import React, {useState} from 'react';

const Counter = ({num}) => {  
  console.log(num);
  
  const [count, setCount] = useState(num);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div className='Counter'>
      <h2>{count}</h2>
      <div className='buttonContainer'>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;