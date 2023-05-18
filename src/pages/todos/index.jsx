import React, { useEffect, useState } from 'react';
import { Todo } from '../../comp/todoitem';
import { Cont } from '../../cont';
export const Todos = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("Write")

  const createTodo = () => {
    setTodos([...todos, { text: inputValue, complet: false }])
    setInputValue("")
    localStorage.setItem('todos', JSON.stringify([...todos, { text: inputValue, complet: false }]))
  }
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('todos'))
    local && setTodos(local)

  }, [])

  const up = (arr) => {
    localStorage.setItem('todos', JSON.stringify(arr))
  }
  const complete = (id) => {
    let arr = [...todos]
    arr[id].complete = !arr[id].complete
    setTodos(arr)
    up(arr)
  }
  const deletetodo = (id) => {
    let arr = [...todos]
    arr.splice(id, 1)
    setTodos(arr)
    up(arr)

  }
  return (
    <Cont.Provider value={{ complete, deletetodo }}>
      <div className="App">
        <h1>TODOLIST</h1>
        <div>
          <input type='text' className='write'
            placeholder='type something'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }} />
          <button className='btn' onClick={createTodo}>ADD</button>
        </div>
        {
          todos && todos.map((el, id) => {
            return <Todo todo={el} id={id}
              key={id}
            />
          })
        }
      </div>
    </Cont.Provider>

  )
}


