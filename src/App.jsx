import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/mnt/data/butter logo.png" alt="Butterbloom Media" className="h-8 w-auto object-contain" />
            <p className="text-gray-400">© {new Date().getFullYear()} Butterbloom Media</p>
          </div>
          <div className="text-gray-400 text-sm">Premium digital experiences. Built with love.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
