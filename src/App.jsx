import { useState } from 'react'
import './App.css'
import Navbar from '../src/layout/Navbar'
import HomePage from '../src/pages/home/HomePage'
import AboutMe from './pages/home/AboutMe'
import FeaturedProjects from './pages/home/FeaturedProjects'
import Activities from './pages/home/Activities'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HomePage></HomePage>
      <AboutMe/>
      <FeaturedProjects/>
      <Activities/>
      <Footer></Footer>
    </>
  )
}

export default App
