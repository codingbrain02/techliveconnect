import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface FormFields {
  firstName: string
  lastName: string
  email: string
  issueType: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const inputClass = 'w-full px-4 py-3 bg-[#05091a] border border-[#1a6bff]/20 text-white text-sm outline-none focus:border-[#1a6bff] focus:ring-1 focus:ring-[#1a6bff]/40 transition placeholder-gray-600 font-light'

const Contact = () => {
  const [fields, setFields] = useState<FormFields>({
    firstName: '', lastName: '', email: '', issueType: '', message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const isValid =
    fields.firstName.trim() !== '' &&
    fields.lastName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) &&
    fields.issueType !== ''

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('loading')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: `${fields.firstName} ${fields.lastName}`,
        email: fields.email,
        title: fields.issueType,
        message: fields.message || 'No additional details provided.',
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setFields({ firstName: '', lastName: '', email: '', issueType: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleChange = (field: keyof FormFields, value: string) => {
    setFields(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="px-[6vw] py-28 bg-[#080c1e] relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1a6bff] to-transparent opacity-40" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-[4px] mb-4">Contact Us</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl font-extrabold text-white leading-none uppercase mb-4">
            Let's Fix It<br />
            <span className="text-[#1a6bff]">Together</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#1a6bff] mb-8" />
          <p className="text-gray-300 leading-relaxed mb-10 font-light">
            Reach out to our support team and we'll get back to you as quickly as possible —
            usually within minutes during business hours.
          </p>

          {[
            { icon: '✉️', label: 'Email Us', value: ['official.support@techliveconnect.pro', 'official.techliveconnect@gmail.com'] },
            { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 24/7 Emergency Support Available' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 bg-[#1a6bff]/10 border border-[#1a6bff]/30 flex items-center justify-center text-lg flex-shrink-0">
                {icon}
              </div>
              <div>
                <strong className="block text-white text-xs font-semibold uppercase tracking-widest mb-1">{label}</strong>
                {Array.isArray(value)
                  ? value.map(v => <span key={v} className="block text-gray-300 text-sm font-light">{v}</span>)
                  : <span className="text-gray-300 text-sm font-light">{value}</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#0d1635] border border-[#1a6bff]/20 p-10" noValidate>
          <h3 style={{ fontFamily: 'var(--font-display)' }}
            className="text-2xl font-extrabold text-white uppercase tracking-wide mb-8">
            Send Us a Message
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                First Name <span className="text-[#1a6bff]">*</span>
              </label>
              <input type="text" placeholder="John" value={fields.firstName}
                onChange={e => handleChange('firstName', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                Last Name <span className="text-[#1a6bff]">*</span>
              </label>
              <input type="text" placeholder="Doe" value={fields.lastName}
                onChange={e => handleChange('lastName', e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Email Address <span className="text-[#1a6bff]">*</span>
            </label>
            <input type="email" placeholder="john@example.com" value={fields.email}
              onChange={e => handleChange('email', e.target.value)} className={inputClass} />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Issue Type <span className="text-[#1a6bff]">*</span>
            </label>
            <select value={fields.issueType} onChange={e => handleChange('issueType', e.target.value)}
              className={inputClass + ' bg-[#05091a]'}>
              <option value="">Select an issue type</option>
              <option>Device Repair</option>
              <option>Network / Wi-Fi</option>
              <option>Cybersecurity</option>
              <option>Cloud & Backup</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Describe Your Issue <span className="text-gray-600 normal-case tracking-normal font-light">(optional)</span>
            </label>
            <textarea rows={4} placeholder="Tell us what's going on..."
              value={fields.message} onChange={e => handleChange('message', e.target.value)}
              className={inputClass + ' resize-y'} />
          </div>

          {status === 'success' && (
            <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-4">✓ Message sent! We'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">✗ Something went wrong. Please try again.</p>
          )}

          <button type="submit" disabled={!isValid || status === 'loading'}
            className={`w-full py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all ${
              status === 'loading' ? 'bg-[#1a6bff]/50 cursor-wait'
              : isValid ? 'bg-[#1a6bff] hover:bg-[#4d8fff] cursor-pointer hover:shadow-lg hover:shadow-[#1a6bff]/30'
              : 'bg-[#1a6bff]/20 text-gray-600 cursor-not-allowed'
            }`}
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact