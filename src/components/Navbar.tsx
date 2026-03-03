import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

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
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  const handleNav = (to: string, section: string) => {
    navigate(to)
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const isActive = (to: string) => location.pathname === to

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      dark
        ? 'bg-[#05091a]/95 border-[#1a6bff]/20'
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="flex items-center justify-between px-[6vw] h-[70px]">
        {/* Logo */}
        <button
          onClick={() => handleNav('/', 'home')}
          className="border-none cursor-pointer bg-transparent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className={`text-2xl font-extrabold tracking-widest uppercase transition-colors duration-300 ${dark ? 'text-white' : 'text-[#05091a]'}`}>
            Tech<span className="text-[#1a6bff]">Live</span>Connect
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10 list-none">
            {navLinks.map(({ label, to, section }) => (
              <li key={label}>
                {label === 'Contact' ? (
                  <button
                    onClick={() => handleNav(to, section)}
                    className="bg-[#1a6bff] text-white text-xs font-semibold px-5 py-2.5 uppercase tracking-widest hover:bg-[#4d8fff] transition-all cursor-pointer border-none"
                    style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
                  >
                    Contact Us
                  </button>
                ) : (
                  <button
                    onClick={() => handleNav(to, section)}
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
                      isActive(to)
                        ? 'text-[#1a6bff]'
                        : dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#1a6bff]'
                    }`}
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-10 h-10 flex items-center justify-center border transition-all cursor-pointer ${
              dark
                ? 'border-[#1a6bff]/30 text-[#4d8fff] hover:border-[#1a6bff] hover:bg-[#1a6bff]/10'
                : 'border-gray-200 text-gray-500 hover:border-[#1a6bff] hover:text-[#1a6bff]'
            } bg-transparent`}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center bg-transparent border-none cursor-pointer text-base"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${dark ? 'bg-white' : 'bg-[#05091a]'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${dark ? 'bg-white' : 'bg-[#05091a]'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${dark ? 'bg-white' : 'bg-[#05091a]'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className={`flex flex-col px-[6vw] pb-6 pt-2 gap-4 list-none border-t ${dark ? 'border-[#1a6bff]/20' : 'border-gray-100'}`}>
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
                    isActive(to) ? 'text-[#1a6bff]' : dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#1a6bff]'
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