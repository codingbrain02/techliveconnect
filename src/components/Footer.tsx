import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <footer className={`border-t text-center py-10 px-[6vw] relative transition-colors duration-300 ${
      dark ? 'bg-[#05091a] border-[#1a6bff]/20' : 'bg-[#05091a] border-[#1a6bff]/20'
    }`}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a6bff] to-transparent opacity-40" />
      <div
        className="text-xl font-extrabold text-white mb-2 uppercase tracking-widest"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Tech<span className="text-[#1a6bff]">Live</span>Connect
      </div>
      <p className="text-xs text-gray-600 uppercase tracking-widest">
        © 2026 Tech Live Connect. All rights reserved. · Trusted tech support for everyone.
      </p>
    </footer>
  )
}

export default Footer