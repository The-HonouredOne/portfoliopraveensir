import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import AdminLogin from './components/AdminLogin'
import AdminImageUpload from './AdminImages'
import ImageGallery from './components/ImageGallery'
import AdminDashboard from './components/AdminDashboard'
import AdminContacts from './components/AdminContacts'
// import AdminContactsTab from './components/AdminContacts'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/images" element={<AdminImageUpload />} />
        <Route path="/gallery" element={<ImageGallery />} />

        <Route path='/adminsecret' element={<AdminLogin />} />
        {/* <Route path="/admin" element={<AdminLogin />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
