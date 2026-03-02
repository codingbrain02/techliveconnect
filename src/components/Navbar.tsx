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

  const handleNav = (to: string, section: string) => {
    navigate(to)
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const isActive = (to: string) => location.pathname === to

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] h-[70px] bg-white/90 backdrop-blur-md border-b border-blue-100">
      <button
        onClick={() => handleNav('/', 'home')}
        className="font-extrabold text-xl tracking-tight text-[#0a1628] bg-transparent border-none cursor-pointer"
      >
        Tech<span className="text-[#1a6bff]">Live</span>Connect
      </button>
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navLinks.map(({ label, to, section }) => (
          <li key={label}>
            {label === 'Contact' ? (
              <button
                onClick={() => handleNav(to, section)}
                className="bg-[#1a6bff] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#0047cc] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            ) : (
              <button
                onClick={() => handleNav(to, section)}
                className={`font-medium text-sm transition-colors bg-transparent border-none cursor-pointer ${
                  isActive(to) ? 'text-[#1a6bff]' : 'text-gray-500 hover:text-[#1a6bff]'
                }`}
              >
                {label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar