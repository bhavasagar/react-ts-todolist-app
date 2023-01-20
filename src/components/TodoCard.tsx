import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'

interface Props {
    todo: Todo,
    todos: Todo[],    
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoCard = (props: Props) => {
    const setTodos = props.setTodos;
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(props.todo.task);

    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {    
        input.current?.focus();
    }, [edit])
    

    function todoEditHandler(e: React.FormEvent, id: number): void {        
        e.preventDefault();
        setTodos([...props.todos.filter(todo => todo.id !== id), {id, task:editTodo, state: props.todo.state}].sort((a: Todo, b: Todo) => a.id - b.id));
        setEdit(!edit);
    }   

    function todoDeleteHandler(id: number) {
        setTodos([...props.todos.filter(todo => todo.id !== id)]);
    }

    function todoUpdateHandler(id: number) {
        let state: string = "done";
        if (props.todo.state === "done") state = "pending"; 
        setTodos([...props.todos.filter(todo => todo.id !== id), {id, task:props.todo.task, state}].sort((a: Todo, b: Todo) => a.id - b.id));
    }

  return (
    <div className='todo__item'>
        { !edit ? 
            <div className={props.todo.state === "done" ? "todo__item--task task__striken" :"todo__item--task"}>
                {props.todo.task}
            </div>
            :
            <div className="todo__item--task-edit">
                <form onSubmit={(e) => todoEditHandler(e, props.todo.id)}>
                    <input ref={input} type="text" value={editTodo} onChange={e => setEditTodo(e.target.value)} placeholder="Change Task..." />
                </form>
            </div>
        }
        <div className="todo__item--modifiers">
            <div onClick={() => {
                if (props.todo.state !== "done") {
                    setEdit(!edit);
                }
            }} className="todo__item--icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"/></svg>
            </div>
            <div onClick={() => todoUpdateHandler(props.todo.id)} className="todo__item--icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            </div>
            <div onClick={() => todoDeleteHandler(props.todo.id)} className="todo__item--icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 9h8v10H8z" opacity=".3"/><path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>
            </div>
        </div>
    </div>
  )
}
