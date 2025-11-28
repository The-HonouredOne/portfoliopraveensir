import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'

function App() {
 

  return (
   <>
   <Navbar/>
   
   <Routes>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default App
