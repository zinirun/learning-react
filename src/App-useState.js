import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

//useMemo: 특정 값이 바꼈을 때만 특정 함수를 실행 (재사용이 가능하게 해줌)
//연산된 값을 재사용할 때
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

function AppPrev2() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  // useCallback: 특정 함수를 재사용할 때
  // onChange 함수는 inputs가 바뀔때만 실행됨 -> 컴포넌트 리렌더링 성능 최적화
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'zini',
      email: 'zini@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'zini2',
      email: 'zini2@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'zini3',
      email: 'zini3@gmail.com',
      active: false,
    },
  ]);

  const nextId = useRef(4); // useState로 관리해도 되지만 리렌더링 필요없기때문에 굳이 안씀
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email, // ...inputs 써도됨
    };
    setUsers((users) => [...users, user]); //기존거 복사하고 새로운거 추가 -> concat써도됨
    //setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  // filter를 이용해 파라미터로 넘어온 id를 제외한 새로운 배열 생성해서 set
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);
  // setUsers에 users를 넣었으므로 컴포넌트가 처음 렌더링될때만 호출되고 그 뒤는 재사용됨

  // 불변성을 지키면서 배열을 업데이트 -> map
  // 파라미터 id만 active 값을 변경
  const onToggle = useCallback(
    (id) => {
      setUsers((users) =>
        users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)),
      );
    },
    [users],
  );

  //users에 변화가 일어났을 때만 호출됨 -> 최적화, 두번째 인자는 역시 뎁스
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default AppPrev2;
