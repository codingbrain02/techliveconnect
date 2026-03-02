import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = ['home', 'about', 'reviews', 'contact']

const Main = () => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home'
    const section = sections.includes(path) ? path : 'home'
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
    </Routes>
  )
}

export default App