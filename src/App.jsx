import React from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import TopHeader from './components/TopHeader.jsx'



function App() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
