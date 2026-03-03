const services = [
  { icon: '🖥️', title: 'Device Repair', desc: 'Laptops, desktops, and mobile devices diagnosed and fixed fast.' },
  { icon: '🌐', title: 'Network Setup', desc: 'Wi-Fi, routers, and business networks configured for peak performance.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'Protect your data with antivirus, firewall, and security audits.' },
  { icon: '☁️', title: 'Cloud & Backup', desc: 'Setup and manage cloud storage so your files are always safe.' },
]

const About = () => {
  return (
    <section id="about" className="px-[6vw] py-28 bg-[#080c1e] relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1a6bff] to-transparent opacity-40" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-[4px] mb-4">About Us</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl font-extrabold text-white leading-none mb-6 uppercase">
            We Solve Tech<br />
            <span className="text-[#1a6bff]">Problems,</span><br />
            Big & Small
          </h2>
          <div className="w-16 h-[2px] bg-[#1a6bff] mb-6" />
          <p className="text-gray-300 leading-relaxed mb-4 font-light">
            Tech Live Connect was founded with a simple mission: make technology work for everyone.
            We believe that no one should feel frustrated or helpless when their tech breaks down.
          </p>
          <p className="text-gray-300 leading-relaxed mb-10 font-light">
            Our certified technicians bring expertise, patience, and clear communication to every
            case — whether you're a home user dealing with a slow laptop or a business needing
            full IT management.
          </p>
          <a href="#contact"
            className="inline-block bg-[#1a6bff] text-white font-semibold px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-[#4d8fff] transition-all hover:shadow-lg hover:shadow-[#1a6bff]/30"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Talk to an Expert
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map(({ icon, title, desc }) => (
            <div key={title}
              className="bg-[#0d1635] border border-[#1a6bff]/20 p-6 hover:border-[#1a6bff]/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1a6bff]/10 transition-all group"
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h4 style={{ fontFamily: 'var(--font-display)' }}
                className="font-bold text-white text-base uppercase tracking-wide mb-2 group-hover:text-[#4d8fff] transition-colors"
              >{title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About