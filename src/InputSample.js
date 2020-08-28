import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    // 객체 상태를 업데이트할 때는 이전 값을 스프레드로 씌우고 업데이트해야함(불변성 유지)
    setInputs({
      ...inputs, //이전 값부터 저장
      [name]: value,
    });
  };
  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: '',
    });
    // DOM 객체에 접근 (current 사용)
    nameInput.current.focus();
  };
  return (
    <div>
      {/* 태그에 ref 붙임으로서 리액트에서 DOM객체 접근가능 */}
      <input name="name" onChange={onChange} placeholder="이름" value={name} ref={nameInput} />
      <input name="nickname" onChange={onChange} placeholder="닉네임" value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값: {name} ({nickname})
        </b>
      </div>
    </div>
  );
}

export default InputSample;
