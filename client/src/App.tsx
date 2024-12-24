import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/publicPages/HomePage.jsx'
import ContactPage from './pages/publicPages/ContactPage'
import LoginPage from './pages/publicPages/LoginPage'
import RegisterPage from './pages/publicPages/RegisterPage'
import AboutPage from './pages/publicPages/AboutPage'
import FAQPage from './pages/publicPages/FAQPage'
import SearchResultsPage from './pages/publicPages/HostelsPage.js'

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
        <Route path='/hostels' element={<SearchResultsPage />} />
      </Routes>
    </Router>
  )
}


export default App;