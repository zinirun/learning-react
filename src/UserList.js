import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;

  const dispatch = useContext(UserDispatch);

  // 두번째 인자 안넣으면 모든 부모 컴포넌트에 대해서 리렌더링될때마다 호출됨
  useEffect(() => {
    console.log('유저 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 값이 바뀌기 전');
      console.log(user);
    };
  }, [user]); //2번째 인자는 의존성 배열, 바뀔때마다 호출됨
  // 미리 선언해놓은 상태, 함수를 사용할 경우 무조건 두번째 인자에 넣어주어야 함

  return (
    <div>
      <div>
        <b
          style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer',
          }}
          onClick={() =>
            dispatch({
              type: 'TOGGLE_USER',
              id,
            })
          }
        >
          {username}
        </b>
        &nbsp;
        <span>({email})</span>
        {/* id값을 파라미터로 함수를 호출하기 위해 arrow function으로 작성해야함 */}
        {/* 그냥 넣으면 렌더링되는 시점에 함수가 호출됨 !! */}
        <button
          onClick={() =>
            dispatch({
              type: 'REMOVE_USER',
              id,
            })
          }
        >
          삭제
        </button>
      </div>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {/* 한 파일에 컴포넌트 2개 사용가능 */}
      {/* 원소 태그마다 key라는 고유값 필수 */}
      {/* key는 성능의 문제, 효율적인 인덱스 관리 */}
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

// 컴포넌트, 즉 렌더링된 결과물을 재사용하기 위해서는 React.memo 사용
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
// prev, next props의 users가 같다면 리렌더링하지 않음
