import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Build Something Exceptional</h2>
          <p className="mt-4 text-gray-300 max-w-xl">Tell us about your goals—brand, product, growth—and we’ll craft an action plan tailored for impact.</p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-medium">WhatsApp</p>
              <p className="text-gray-400 text-sm mt-1">Instant messaging for quick questions</p>
              <a href="https://wa.me/1" target="_blank" className="inline-block mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white">Open Chat</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white font-medium">Calendar</p>
              <p className="text-gray-400 text-sm mt-1">Book a 20-minute discovery call</p>
              <a href="#" className="inline-block mt-3 px-4 py-2 rounded-full bg-white/10 text-white border border-white/10">Open Calendar</a>
            </div>
          </div>
        </div>
        <div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input className="mt-1 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white outline-none focus:ring-2 ring-blue-500/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white outline-none focus:ring-2 ring-blue-500/40" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-300">Project Type</label>
                <select className="mt-1 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white outline-none focus:ring-2 ring-blue-500/40">
                  <option>Web Design & Development</option>
                  <option>WhatsApp Chatbot</option>
                  <option>Mobile App</option>
                  <option>Marketing & Growth</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white outline-none focus:ring-2 ring-blue-500/40" placeholder="Tell us about your goals..." />
              </div>
            </div>
            <button type="button" className="mt-6 w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white">Send Message</button>
          </form>
        </div>
      </div>

      <a href="#contact" className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-lg shadow-blue-600/20" aria-label="WhatsApp CTA">
        <MessageCircle className="w-5 h-5" />
      </a>
    </section>
  )
}
