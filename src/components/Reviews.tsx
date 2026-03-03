interface Review {
  initials: string
  name: string
  role: string
  text: string
}

const reviews: Review[] = [
  {
    initials: 'MR',
    name: 'Marcus Reynolds',
    role: 'Small Business Owner',
    text: 'I had been struggling with a persistent network issue for weeks. The TLC team diagnosed and fixed it in under an hour — remotely! Their technician was patient, clear, and genuinely kind. Absolutely the best tech support experience I\'ve ever had.',
  },
  {
    initials: 'SP',
    name: 'Sofia Patel',
    role: 'Marketing Manager',
    text: 'My laptop completely crashed two days before a major presentation. Tech Live Connect had it running again same day! They also recovered all my files and even set up automatic backups so it never happens again. Lifesavers — literally.',
  },
  {
    initials: 'JH',
    name: 'James Henderson',
    role: 'Retired Teacher',
    text: 'I\'m not very tech-savvy, but TLC never made me feel embarrassed for asking basic questions. They explained everything in plain English, set up my new computer perfectly, and followed up the next day to make sure everything was working. Truly exceptional service.',
  },
]

const Reviews = () => {
  return (
    <section id="reviews" className="px-[6vw] py-28 bg-[#05091a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(26,107,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,255,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="text-center max-w-lg mx-auto mb-16 relative">
        <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-[4px] mb-4">Customer Reviews</p>
        <h2 style={{ fontFamily: 'var(--font-display)' }}
          className="text-5xl font-extrabold text-white leading-none uppercase">
          What Our Clients<br />
          <span className="text-[#1a6bff]">Are Saying</span>
        </h2>
        <div className="w-16 h-[2px] bg-[#1a6bff] mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {reviews.map(({ initials, name, role, text }) => (
          <div key={name}
            className="bg-[#0d1635] border border-[#1a6bff]/20 p-8 hover:border-[#1a6bff]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1a6bff]/10 transition-all group"
          >
            {/* Quote mark */}
            <div className="text-5xl text-[#1a6bff]/20 font-serif leading-none mb-2 select-none" style={{ fontFamily: 'Georgia, serif' }}>"</div>
            <div className="text-yellow-400 text-sm tracking-widest mb-4">★★★★★</div>
            <p className="text-gray-300 leading-relaxed text-sm mb-8 font-light">{text}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-[#1a6bff]/10">
              <div className="w-10 h-10 bg-[#1a6bff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0"
                style={{ fontFamily: 'var(--font-display)', clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
              >
                {initials}
              </div>
              <div>
                <div className="font-semibold text-white text-sm" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>{name}</div>
                <div className="text-xs text-[#1a6bff]/70 uppercase tracking-widest">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews