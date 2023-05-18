import React, { useContext } from 'react'
import './Todoitem.css'
import { Cont } from '../../cont'
export const Todo = ({ todo, id }) => {
    const { deletetodo, complete } = useContext(Cont)
    return (
        <div className='todo-item' style={todo.complete ? ready : notready}>
            {todo.text}
            <button className='btn1' onClick={() => complete(id)}>{todo.complete ? "Cancel" : "Execute"}</button>
            <button className='btn1' onClick={() => deletetodo(id)}>Delete</button>
        </div>
    )
}
const ready = {
    textDecoration: 'line-through',
    color:'red'
}
const notready = {
    textDecoration: 'none'
}