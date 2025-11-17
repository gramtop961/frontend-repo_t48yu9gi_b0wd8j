import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img src="/mnt/data/butter logo.png" alt="Butterbloom Media" className="h-8 w-auto object-contain" />
            <span className="text-white font-semibold tracking-wide">Butterbloom Media</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-blue-500 to-rose-500 group-hover:w-full transition-all" />
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] transition-shadow">
              Get Started
            </a>
          </div>
          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4 bg-black/70 backdrop-blur">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white text-center">Get Started</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
