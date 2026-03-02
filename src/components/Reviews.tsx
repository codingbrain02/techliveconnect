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
    <section id="reviews" className="px-[6vw] py-28 bg-white">
      <div className="text-center max-w-lg mx-auto mb-14">
        <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-widest mb-3">Customer Reviews</p>
        <h2 className="text-4xl font-extrabold text-[#0a1628] leading-tight">
          What Our Clients Are Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map(({ initials, name, role, text }) => (
          <div
            key={name}
            className="bg-[#f5f8ff] border border-blue-100 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 transition-all"
          >
            <div className="text-yellow-400 text-base tracking-widest mb-4">★★★★★</div>
            <p className="text-gray-700 leading-relaxed text-sm mb-6">{text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a6bff] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {initials}
              </div>
              <div>
                <div className="font-semibold text-[#0a1628] text-sm">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews