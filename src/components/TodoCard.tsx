import React from 'react'
import { Todo } from '../model'

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoCard = (props: Props) => {
  return (
    <div className='todo__item'>
        {props.todo.task}
    </div>
  )
}
