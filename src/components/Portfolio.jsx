import { motion } from 'framer-motion'

const items = [
  { title: 'E-Commerce Revamp', result: '3.2x revenue', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop' },
  { title: 'SaaS Website', result: '+68% signups', img: 'https://images.unsplash.com/photo-1551033541-2075d8363c79?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Mobile App UI', result: '4.9⭐ ratings', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="case-studies" className="relative py-24 bg-[#0b1020]">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Case Studies</h2>
        <p className="mt-3 text-gray-300 max-w-2xl">Selected work showcasing measurable results.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <span className="text-sm text-blue-300">{item.result}</span>
                </div>
                <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-rose-500 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
