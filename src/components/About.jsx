import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-500/20 blur-3xl rounded-full" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <img src="/mnt/data/Gillian.png" alt="Founder" className="w-full h-[420px] object-cover object-center" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Butterbloom Media</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are a creative, service-obsessed, results-driven digital agency. Since 2022, our mission has been to craft digital experiences that combine elegance with performance—sites and apps that look stunning and convert.
          </p>
          <div className="mt-10">
            <h3 className="text-xl text-white font-semibold">Our Journey</h3>
            <div className="mt-4 space-y-4">
              {[
                { year: '2022', text: 'Butterbloom Media launches with a focus on premium design.' },
                { year: '2023', text: 'Expanded into AI chatbots and cross-platform development.' },
                { year: '2024', text: 'Scaled performance marketing and data-driven creative.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                >
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-rose-600 text-white grid place-content-center font-bold shadow-[0_0_30px_rgba(59,130,246,0.25)]">{item.year}</div>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {['Creativity', 'Service', 'Results', 'Integrity'].map((v, i) => (
              <motion.div key={v} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white font-medium">{v}</p>
                <p className="text-sm text-gray-400 mt-1">We champion {v.toLowerCase()} with precision and care.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
