const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] h-[70px] bg-white/90 backdrop-blur-md border-b border-blue-100">
      <div className="font-extrabold text-xl tracking-tight text-[#0a1628]">
        Tech<span className="text-[#1a6bff]">Live</span>Connect
      </div>
      <ul className="hidden md:flex items-center gap-10 list-none">
        <li><a href="#home" className="text-gray-500 font-medium text-sm hover:text-[#1a6bff] transition-colors">Home</a></li>
        <li><a href="#about" className="text-gray-500 font-medium text-sm hover:text-[#1a6bff] transition-colors">About</a></li>
        <li><a href="#reviews" className="text-gray-500 font-medium text-sm hover:text-[#1a6bff] transition-colors">Reviews</a></li>
        <li>
          <a
            href="#contact"
            className="bg-[#1a6bff] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#0047cc] transition-colors"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar