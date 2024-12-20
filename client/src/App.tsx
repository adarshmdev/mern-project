import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/publicPages/HomePage.jsx'
import ContactPage from './pages/publicPages/ContactPage'
import LoginPage from './pages/publicPages/LoginPage'
import RegisterPage from './pages/publicPages/RegisterPage'
import AboutPage from './pages/publicPages/AboutPage'
import FAQPage from './pages/publicPages/FAQPage'

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
      </Routes>
    </Router>
  )
}


export default App;