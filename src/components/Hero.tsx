const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-[6vw] pt-36 pb-24 bg-gradient-to-br from-[#f0f5ff] to-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -right-28 w-[600px] h-[600px] bg-[radial-gradient(circle,#c4d9ff,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[radial-gradient(circle,#dce9ff,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-2xl relative z-10 animate-fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1a6bff] text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-7">
          <span className="text-[8px]">●</span>
          Available 24/7 — We're here when you need us
        </div>

        <h1 className="text-5xl font-extrabold leading-tight text-[#0a1628] mb-5">
          Tech Support You Can{' '}
          <span className="text-[#1a6bff]">Actually Trust</span>
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10">
          From device troubleshooting to network setup, Tech Live Connect delivers
          fast, friendly, and reliable tech support for individuals and businesses alike.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-[#1a6bff] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-300/40 hover:bg-[#0047cc] hover:-translate-y-0.5 transition-all"
          >
            Get Support Now
          </a>
          <a
            href="#about"
            className="border-2 border-[#1a6bff] text-[#1a6bff] font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-14">
          {[
            { num: '10K+', label: 'Clients Helped' },
            { num: '98%', label: 'Satisfaction Rate' },
            { num: '24/7', label: 'Support Available' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-[#0a1628]">{num}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero