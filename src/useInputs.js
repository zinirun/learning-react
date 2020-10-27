import { useState, useReducer, useCallback } from 'react';

// Custom Hooks - useXXX naming
// useState를 이용한 커스텀 훅
function useInputsState(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;
  }
}

// useReducer를 이용한 커스텀 훅
function useInputsReducer(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value,
    });
  });
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
  return [form, onChange, reset];
}

export default useInputsReducer;
