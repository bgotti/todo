import './App.css';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import { TodoProvider } from './components/TodoContext.js';

export default function TodoBoard() {
  return (

    <TodoProvider className="App">
      <header className="App-header">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      </header>
    </TodoProvider>
  );
}
