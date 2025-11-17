import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Amara K.', role: 'Founder, Bloomist', text: 'They delivered a premium site that doubled our conversions within a month.' },
  { name: 'David R.', role: 'COO, Finlytics', text: 'Our chatbot automation cut support tickets by 40%—seamless integration.' },
  { name: 'Priya S.', role: 'CMO, VerveLabs', text: 'Their design sensibility is top-tier—elegant, fast, and conversion-focused.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0a0f1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(244,63,94,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by Clients</h2>
        <p className="mt-3 text-gray-300 max-w-2xl">Elegant results, measurable impact.</p>

        <div className="mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {testimonials.concat(testimonials).map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                <p className="text-gray-300">{t.text}</p>
                <div className="mt-4">
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-sm text-blue-300">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  )
}
