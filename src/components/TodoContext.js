import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext(null);
const TodosDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(
    todosReducer,
    initialTodos
  );

  return (
    <TodoContext.Provider value={todos}>
      <TodosDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </TodosDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function todosReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [...todos, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return todos.map(t => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return todos.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTodos= [

];