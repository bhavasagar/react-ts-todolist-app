import React from 'react'
import { Todo } from '../model'
import { TodoCard } from './TodoCard'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

export const Todos = (props: Props) => {
  return (
    <div className="container">
        {props.todos.map(todo => (<TodoCard todo={todo} todos={props.todos} setTodo={props.setTodo} setTodos={props.setTodos}  />))}
    </div>
  )
}
