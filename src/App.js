import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text:'tarea numero 1', completed: false},
  {text:'tarea numero 2', completed: false},
  {text:'tarea numero 3', completed: false}
]

function App() {
  return (
   <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
    <CreateTodoButton/>
   </React.Fragment> 
    );
}

export default App;
