import React, { useRef } from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void
}


export const InputField: React.FC<Props> = (props) => {
    const input = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            props.handleSubmit(e);
            input.current?.blur();
        }}>
            <input type="text" ref={input} value={props.todo} onChange={(e) => { props.setTodo(e.target.value) }} className='input__box' placeholder='Add a task' />
            <button type='submit' className='input__submit' > + </button>
        </form>
    )
}
