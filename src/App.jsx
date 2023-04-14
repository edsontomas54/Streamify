import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Signup from './page/Signup'
import Netflix from './page/Netflix'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/' element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    )
}
