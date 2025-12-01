import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import AdminLogin from './components/AdminLogin'
import AdminContacts from './components/AdminContacts'

function App() {
 

  return (
   <>
   <Navbar/>
   
   <Routes>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/adminsecret' element={<AdminLogin/>}/>
     <Route path="/admin/contacts" element={<AdminContacts />} />
   </Routes>
   </>
  )
}

export default App
