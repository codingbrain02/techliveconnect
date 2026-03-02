import { useState } from 'react'
import type { FormEvent } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-[6vw] py-28 bg-[#f5f8ff]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-4xl font-extrabold text-[#0a1628] leading-tight mb-5">
            Let's Fix It Together
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Reach out to our support team and we'll get back to you as quickly as possible —
            usually within minutes during business hours.
          </p>

          {[
            { icon: '📞', label: 'Phone Support', value: '+1 (800) 123-4567' },
            { icon: '✉️', label: 'Email Us', value: 'support@techliveconnect.com' },
            { icon: '🕐', label: 'Hours', value: 'Mon–Sun, 24/7 Emergency Support Available' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                {icon}
              </div>
              <div>
                <strong className="block text-[#0a1628] text-sm font-semibold">{label}</strong>
                <span className="text-gray-500 text-sm">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-blue-100 rounded-2xl p-10"
        >
          <h3 className="text-xl font-extrabold text-[#0a1628] mb-6">Send Us a Message</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Issue Type</label>
            <select className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition bg-white">
              <option>Device Repair</option>
              <option>Network / Wi-Fi</option>
              <option>Cybersecurity</option>
              <option>Cloud & Backup</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">Describe Your Issue</label>
            <textarea
              rows={4}
              placeholder="Tell us what's going on and we'll help you fix it..."
              className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition resize-y"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all ${
              submitted
                ? 'bg-green-500 cursor-default'
                : 'bg-[#1a6bff] hover:bg-[#0047cc]'
            }`}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact