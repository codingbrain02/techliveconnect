const services = [
  { icon: '🖥️', title: 'Device Repair', desc: 'Laptops, desktops, and mobile devices diagnosed and fixed fast.' },
  { icon: '🌐', title: 'Network Setup', desc: 'Wi-Fi, routers, and business networks configured for peak performance.' },
  { icon: '🛡️', title: 'Cybersecurity', desc: 'Protect your data with antivirus, firewall, and security audits.' },
  { icon: '☁️', title: 'Cloud & Backup', desc: 'Setup and manage cloud storage so your files are always safe.' },
]

const About = () => {
  return (
    <section id="about" className="px-[6vw] py-28 bg-[#f5f8ff]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-4xl font-extrabold text-[#0a1628] leading-tight mb-5">
            We Solve Tech Problems, Big & Small
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Tech Live Connect was founded with a simple mission: make technology work for everyone.
            We believe that no one should feel frustrated or helpless when their tech breaks down.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our certified technicians bring expertise, patience, and clear communication to every
            case — whether you're a home user dealing with a slow laptop or a business needing
            full IT management.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#1a6bff] text-white font-semibold px-7 py-3 rounded-xl shadow-md shadow-blue-200 hover:bg-[#0047cc] transition-colors"
          >
            Talk to an Expert
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-blue-100 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 transition-all"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h4 className="font-semibold text-[#0a1628] text-sm mb-1">{title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About