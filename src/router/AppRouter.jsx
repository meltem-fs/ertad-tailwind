import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Börekler from '../pages/Börekler'
import Comm from '../pages/Comm'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/comm' element={<Comm/>} />
        <Route path='/börek' element={<Börekler/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
     </Routes>
     <Footer/>
    </>
    
  )
}

export default AppRouter