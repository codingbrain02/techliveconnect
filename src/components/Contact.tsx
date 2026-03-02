import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

interface FormFields {
  firstName: string
  lastName: string
  email: string
  issueType: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const Contact = () => {
  const [fields, setFields] = useState<FormFields>({
    firstName: '',
    lastName: '',
    email: '',
    issueType: '',
    message: '',
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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: `${fields.firstName} ${fields.lastName}`,
          email: fields.email,
          title: fields.issueType,
          message: fields.message || 'No additional details provided.',
        },
        EMAILJS_PUBLIC_KEY
      )

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

  const isLoading = status === 'loading'

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
            { icon: '📞', label: 'Phone Support', value: '+1-866-520-0000' },
            { icon: '✉️', label: 'Email Us', value: 'official.support@techliveconnect.pro' },
            { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 24/7 Emergency Support Available' },
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
          noValidate
        >
          <h3 className="text-xl font-extrabold text-[#0a1628] mb-6">Send Us a Message</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                value={fields.firstName}
                onChange={e => handleChange('firstName', e.target.value)}
                className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={fields.lastName}
                onChange={e => handleChange('lastName', e.target.value)}
                className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={fields.email}
              onChange={e => handleChange('email', e.target.value)}
              className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
              Issue Type <span className="text-red-500">*</span>
            </label>
            <select
              value={fields.issueType}
              onChange={e => handleChange('issueType', e.target.value)}
              className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition bg-white"
            >
              <option value="">Select an issue type</option>
              <option>Device Repair</option>
              <option>Network / Wi-Fi</option>
              <option>Cybersecurity</option>
              <option>Cloud & Backup</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-[#0a1628] mb-1.5">
              Describe Your Issue{' '}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what's going on and we'll help you fix it..."
              value={fields.message}
              onChange={e => handleChange('message', e.target.value)}
              className="w-full px-4 py-2.5 border border-blue-100 rounded-xl text-sm outline-none focus:border-[#1a6bff] focus:ring-2 focus:ring-blue-100 transition resize-y"
            />
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <p className="text-green-600 text-sm font-medium mb-4">
              ✓ Your message has been sent! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm font-medium mb-4">
              ✗ Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all ${
              isLoading
                ? 'bg-blue-300 cursor-wait'
                : isValid
                ? 'bg-[#1a6bff] hover:bg-[#0047cc] cursor-pointer'
                : 'bg-blue-200 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact