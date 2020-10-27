import React, { useCallback, useReducer, useRef, useMemo, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputsReducer from './useInputs';
import produce from 'immer'; // 불변성 유지

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      throw new Error('Unhandled action');
  }
}

// Dispatch를 관리하는 컨텍스트, 상태도 관리할 수 있음
export const UserDispatch = createContext(null);

function App() {
  const [{ username, email }, onChange, reset] = useInputsReducer({
    username: '',
    email: '',
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
      <div>활성 사용자 수: 0</div>
    </UserDispatch.Provider>
  );
}

export default App;
