import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Digital Experiences That Elevate Your Brand.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-gray-300 max-w-xl"
          >
            Butterbloom Media builds premium, conversion-focused products with a tech-luxury aesthetic. We blend design, engineering, and strategy to deliver measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_50px_rgba(244,63,94,0.35)] transition-shadow">Get Started</a>
            <a href="#services" className="px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10">WhatsApp Chatbots</a>
            <a href="#services" className="px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10">Web & App Development</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <div className="absolute -top-10 -right-6 w-44 h-44 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-6 -left-8 w-44 h-44 bg-rose-500/20 blur-3xl rounded-full" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <img src="/mnt/data/butter logo.png" alt="Butterbloom Logo" className="w-full h-64 object-contain p-8 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
