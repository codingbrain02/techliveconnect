import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',    to: '/',         section: 'home'    },
  { label: 'About',   to: '/about',    section: 'about'   },
  { label: 'Reviews', to: '/reviews',  section: 'reviews' },
  { label: 'Contact', to: '/contact',  section: 'contact' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (to: string, section: string) => {
    navigate(to)
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const isActive = (to: string) => location.pathname === to

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05091a]/95 backdrop-blur-md border-b border-[#1a6bff]/20">
      <div className="flex items-center justify-between px-[6vw] h-[70px]">
        <button
          onClick={() => handleNav('/', 'home')}
          className="border-none cursor-pointer bg-transparent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="text-2xl font-extrabold tracking-widest text-white uppercase">
            Tech<span className="text-[#1a6bff]">Live</span>Connect
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map(({ label, to, section }) => (
            <li key={label}>
              {label === 'Contact' ? (
                <button
                  onClick={() => handleNav(to, section)}
                  className="bg-[#1a6bff] text-white text-xs font-semibold px-5 py-2.5 uppercase tracking-widest hover:bg-[#4d8fff] transition-all cursor-pointer border-none clip-path-none"
                  style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                >
                  Contact Us
                </button>
              ) : (
                <button
                  onClick={() => handleNav(to, section)}
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
                    isActive(to) ? 'text-[#1a6bff]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-[6vw] pb-6 pt-2 gap-4 list-none border-t border-[#1a6bff]/20">
          {navLinks.map(({ label, to, section }) => (
            <li key={label}>
              {label === 'Contact' ? (
                <button
                  onClick={() => handleNav(to, section)}
                  className="w-full bg-[#1a6bff] text-white text-xs font-semibold px-5 py-3 uppercase tracking-widest hover:bg-[#4d8fff] transition-colors cursor-pointer border-none"
                >
                  Contact Us
                </button>
              ) : (
                <button
                  onClick={() => handleNav(to, section)}
                  className={`w-full text-left text-xs font-semibold uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer py-1 ${
                    isActive(to) ? 'text-[#1a6bff]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar