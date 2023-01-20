import React, {useState } from 'react';
import './App.css';
import "./components/styles.css";
import { InputField } from './components/InputField';
import { Todos } from './components/Todos';
import { Todo } from './model';

const App: React.FC = () => {  
  
  const [todo, setTodo] = useState<string>("");
  // console.log(todo);
  
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todos);
  // useEffect(() => {
  //   localStorage.setItem('task-app--todos', JSON.stringify(todos));
  // }, [todos]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todo) return;
    
    setTodos([...todos, {id: Date.now(), task:todo, state: "pending"}]);    
    setTodo("");
  }

  return (
    <div className="App">
      <div className="heading">
          Note My Tasks
      </div>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;