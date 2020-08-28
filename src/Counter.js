import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0); //구조분해를 통한 할당(기본값 0)

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1); //Update 함수 (함수형 업데이트)
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
