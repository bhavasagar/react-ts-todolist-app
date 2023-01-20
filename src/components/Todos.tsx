import React from 'react'
import { Todo } from '../model'
import { TodoCard } from './TodoCard'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Todos = (props: Props) => {
  return (
    <div className="container">
        {props.todos.map(todo => (<TodoCard todo={todo} key={todo.id} todos={props.todos} setTodos={props.setTodos}  />))}
    </div>
  )
}
