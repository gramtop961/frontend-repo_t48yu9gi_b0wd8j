import { motion } from 'framer-motion'
import { Bot, Globe, Smartphone, Megaphone, Search, FileText, MousePointerClick, ShoppingBag, Sparkles } from 'lucide-react'

const services = [
  { icon: Bot, title: 'WhatsApp Chatbots', desc: 'AI automation integrated with your business systems for 24/7 service.' },
  { icon: Globe, title: 'Web Design & Development', desc: 'Premium, conversion-focused websites with modern performance.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Cross-platform apps engineered for speed and polish.' },
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'Creative strategy and daily management that drives growth.' },
  { icon: Search, title: 'SEO for Small Businesses', desc: 'Own your niche with local SEO and technical foundations.' },
  { icon: FileText, title: 'Content Creation', desc: 'High-quality content that informs, inspires, and converts.' },
  { icon: MousePointerClick, title: 'PPC & Google Ads', desc: 'ROI-first ad strategy with rigorous testing and tracking.' },
  { icon: ShoppingBag, title: 'Shopify / e-Commerce', desc: 'Beautiful storefronts, frictionless checkout, and scale.' },
  { icon: Sparkles, title: 'Brand Strategy', desc: 'Clarity, positioning, and distinctive visual identity.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0a0f1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(244,63,94,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="mt-3 text-gray-300 max-w-2xl">End-to-end digital solutions built for impact and growth.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/20 to-rose-500/20 blur-xl" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-rose-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
