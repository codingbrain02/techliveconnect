import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../context/ThemeContext'

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

const Contact = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'

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

  const inputClass = `w-full px-4 py-3 border text-sm outline-none transition ${
    dark
      ? 'bg-[#05091a] border-[#1a6bff]/20 text-white placeholder-gray-600 focus:border-[#1a6bff] focus:ring-1 focus:ring-[#1a6bff]/40 font-light'
      : 'bg-white border-gray-200 text-[#05091a] placeholder-gray-400 focus:border-[#1a6bff] focus:ring-1 focus:ring-[#1a6bff]/20'
  }`

  return (
    <section id="contact" className={`px-[6vw] py-28 relative overflow-hidden transition-colors duration-300 ${dark ? 'bg-[#080c1e]' : 'bg-[#f5f8ff]'}`}>
      <div className={`absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1a6bff] to-transparent ${dark ? 'opacity-40' : 'opacity-20'}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-semibold text-[#1a6bff] uppercase tracking-[4px] mb-4">Contact Us</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }}
            className={`text-5xl font-extrabold leading-none uppercase mb-4 transition-colors duration-300 ${dark ? 'text-white' : 'text-[#05091a]'}`}>
            Let's Fix It<br />
            <span className="text-[#1a6bff]">Together</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#1a6bff] mb-8" />
          <p className={`leading-relaxed mb-10 transition-colors duration-300 ${dark ? 'text-gray-300 font-light' : 'text-gray-600'}`}>
            Reach out to our support team and we'll get back to you as quickly as possible —
            usually within minutes during business hours.
          </p>

          {[
            { icon: '✉️', label: 'Email Us', value: ['official.support@techliveconnect.pro', 'official.techliveconnect@gmail.com'] },
            { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 24/7 Emergency Support Available' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 mb-6">
              <div className={`w-11 h-11 border flex items-center justify-center text-lg flex-shrink-0 transition-colors duration-300 ${
                dark ? 'bg-[#1a6bff]/10 border-[#1a6bff]/30' : 'bg-blue-50 border-blue-200'
              }`}>
                {icon}
              </div>
              <div>
                <strong className={`block text-xs font-semibold uppercase tracking-widest mb-1 transition-colors duration-300 ${dark ? 'text-white' : 'text-[#05091a]'}`}>{label}</strong>
                {Array.isArray(value)
                  ? value.map(v => <span key={v} className={`block text-sm transition-colors duration-300 ${dark ? 'text-gray-300 font-light' : 'text-gray-600'}`}>{v}</span>)
                  : <span className={`text-sm transition-colors duration-300 ${dark ? 'text-gray-300 font-light' : 'text-gray-600'}`}>{value}</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`border p-10 transition-colors duration-300 ${dark ? 'bg-[#0d1635] border-[#1a6bff]/20' : 'bg-white border-blue-100'}`}
          noValidate
        >
          <h3 style={{ fontFamily: 'var(--font-display)' }}
            className={`text-2xl font-extrabold uppercase tracking-wide mb-8 transition-colors duration-300 ${dark ? 'text-white' : 'text-[#05091a]'}`}>
            Send Us a Message
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                First Name <span className="text-[#1a6bff]">*</span>
              </label>
              <input type="text" placeholder="John" value={fields.firstName}
                onChange={e => handleChange('firstName', e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                Last Name <span className="text-[#1a6bff]">*</span>
              </label>
              <input type="text" placeholder="Doe" value={fields.lastName}
                onChange={e => handleChange('lastName', e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="mb-4">
            <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
              Email Address <span className="text-[#1a6bff]">*</span>
            </label>
            <input type="email" placeholder="john@example.com" value={fields.email}
              onChange={e => handleChange('email', e.target.value)} className={inputClass} />
          </div>

          <div className="mb-4">
            <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
              Issue Type <span className="text-[#1a6bff]">*</span>
            </label>
            <select value={fields.issueType} onChange={e => handleChange('issueType', e.target.value)}
              className={inputClass + (dark ? ' bg-[#05091a]' : ' bg-white')}>
              <option value="">Select an issue type</option>
              <option>Device Repair</option>
              <option>Network / Wi-Fi</option>
              <option>Cybersecurity</option>
              <option>Cloud & Backup</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-8">
            <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
              Describe Your Issue <span className={`normal-case tracking-normal font-light ${dark ? 'text-gray-600' : 'text-gray-400'}`}>(optional)</span>
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
              : dark ? 'bg-[#1a6bff]/20 text-gray-600 cursor-not-allowed' : 'bg-blue-200 text-white cursor-not-allowed'
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