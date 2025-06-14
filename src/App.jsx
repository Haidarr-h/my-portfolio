import { useState } from 'react'
import './App.css'
import Navbar from '../src/layout/Navbar'
import HomePage from '../src/pages/home/HomePage'
import AboutMe from './pages/home/AboutMe'

function App() {

  return (
    <>
      <Navbar />
      <HomePage></HomePage>
      <AboutMe/>

    </>
  )
}

export default App
