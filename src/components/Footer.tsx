const Footer = () => {
  return (
    <footer className="bg-[#05091a] border-t border-[#1a6bff]/20 text-center py-10 px-[6vw] relative">
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