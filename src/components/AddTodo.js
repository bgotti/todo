import { useState, useContext } from 'react';
import { useTodosDispatch } from './TodoContext.js';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');
  const dispatch = useTodosDispatch();
  return (

    <div className="flex margin">
      <FormControl className="formcontrol"
        placeholder="Add todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button size="lg" className="add" onClick={() => {
        if (text !== "") {
              setText('');
              dispatch({
                type: 'added',
                id: nextId++,
                text: text,
              }) }
        else {
          alert("Please enter something!")
        };
      }}>Add</Button>
    </div>

  );
}

let nextId = 3;
