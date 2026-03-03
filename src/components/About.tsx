import { useTheme } from '../context/ThemeContext'

const services = [
  { icon: '🖥️', title: 'Device Repair', desc: 'Laptops, desktops, and mobile devices diagnosed and fixed fast.' },
  { icon: '🌐', title: 'Network Setup', desc: 'Wi-Fi, routers, and business networks configured for peak performance.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'Protect your data with antivirus, firewall, and security audits.' },
  { icon: '☁️', title: 'Cloud & Backup', desc: 'Setup and manage cloud storage so your files are always safe.' },
]

const About = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="about" className={`px-[6vw] py-28 relative overflow-hidden transition-colors duration-300 ${dark ? 'bg-[#080c1e]' : 'bg-[#f5f8ff]'}`}>
      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1a6bff] to-transparent ${dark ? 'opacity-40' : 'opacity-20'}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-[4px] mb-4">About Us</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}
            className={`text-5xl font-extrabold leading-none mb-6 uppercase transition-colors duration-300 ${dark ? 'text-white' : 'text-[#05091a]'}`}>
            We Solve Tech<br />
            <span className="text-[#1a6bff]">Problems,</span><br />
            Big & Small
          </h2>
          <div className="w-16 h-[2px] bg-[#1a6bff] mb-6" />
          <p className={`leading-relaxed mb-4 transition-colors duration-300 ${dark ? 'text-gray-300 font-light' : 'text-gray-600'}`}>
            Tech Live Connect was founded with a simple mission: make technology work for everyone.
            We believe that no one should feel frustrated or helpless when their tech breaks down.
          </p>
          <p className={`leading-relaxed mb-10 transition-colors duration-300 ${dark ? 'text-gray-300 font-light' : 'text-gray-600'}`}>
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
              className={`border p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1a6bff]/10 transition-all group ${
                dark
                  ? 'bg-[#0d1635] border-[#1a6bff]/20 hover:border-[#1a6bff]/60'
                  : 'bg-white border-blue-100 hover:border-[#1a6bff]/40'
              }`}
            >
              <div className="text-2xl mb-4">{icon}</div>
              <h4 style={{ fontFamily: 'var(--font-display)' }}
                className={`font-bold text-base uppercase tracking-wide mb-2 group-hover:text-[#4d8fff] transition-colors ${dark ? 'text-white' : 'text-[#05091a]'}`}
              >{title}</h4>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${dark ? 'text-gray-400 font-light' : 'text-gray-500'}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About