import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

//props가 바꼈을때만 리렌더링
export default React.memo(CreateUser);
