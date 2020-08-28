import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user; //user.name, user.email 안써도됨
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   // props -> state
  //   // rest api
  //   // 기타 api 사용할 때도 컴포넌트가 마운트 된 뒤에 사용할 수 있음
  //   // 즉 ui가 화면에 나타난 후이기 때문에 DOM에 접근도 할 수 있음
  //   return () => {
  //     // 클린 함수(뒷정리 함수, 업데이트 전에 호출됨)
  //     // clearInterval, clearTimeout,
  //     // 라이브러리 인스턴스 제거 등
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

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
          onClick={() => onToggle(id)}
        >
          {username}
        </b>
        &nbsp;
        <span>({email})</span>
        {/* id값을 파라미터로 함수를 호출하기 위해 arrow function으로 작성해야함 */}
        {/* 그냥 넣으면 렌더링되는 시점에 함수가 호출됨 !! */}
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {/* 한 파일에 컴포넌트 2개 사용가능 */}
      {/* 원소 태그마다 key라는 고유값 필수 */}
      {/* key는 성능의 문제, 효율적인 인덱스 관리 */}
      {users.map((user) => (
        <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

// 컴포넌트, 즉 렌더링된 결과물을 재사용하기 위해서는 React.memo 사용
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
// prev, next props의 users가 같다면 리렌더링하지 않음
