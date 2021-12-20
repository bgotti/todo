import { useState, useContext } from 'react';
import { useTodos, useTodosDispatch } from './TodoContext.js';
import Button from 'react-bootstrap/Button';
import ListGroup  from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TodoList() {
  const todos = useTodos();
  return (
    <ListGroup>
      {todos.map(todo => (
        <ListGroup.Item key={todos.id}>
          <Todo todo={todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodosDispatch();
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              todo: {
                ...todo,
                text: e.target.value
              }
            });
          }} />{' '}
        <Button onClick={() => setIsEditing(false)}>
          Save
        </Button>{' '}
      </>
    );
  } else {
    todoContent = (
      <>
        {' '}{todo.text}
        {' '}<Button onClick={() => setIsEditing(true)}>
          Edit
        </Button>{' '}
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            todo: {
              ...todo,
              done: e.target.checked
            }
          });
        }}
      />
      {todoContent}
      <Button variant="danger" onClick={() => {
        dispatch({
          type: 'deleted',
          id: todo.id
        });
      }}>
        Delete
      </Button>
    </label>
  );
}
