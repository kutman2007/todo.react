import { Todo } from './comp/todoitem';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Todos } from './pages/todos';
import { Cont } from './cont';
import { Login } from './pages/auto';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Example } from './pages/click/App2';
export const App = () => {
  return (
    <div className='dad'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/todos' element={<Todos />} />
      <Route path='/click' element={<Example/>}/>
    </Routes>
    </div>
  )
}

