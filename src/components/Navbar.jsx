import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { SITE } from '../data/siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-40 transition-colors duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="brand-wordmark" aria-label={SITE.name}>
            <span className="brand-badge">P</span>
            <span className="brand-text">{SITE.name}</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:text-sky-700 transition">Home</Link>
          <Link to="/products" className="hover:text-sky-700 transition">Products</Link>
          <Link to="/services" className="hover:text-sky-700 transition">Services</Link>
          <Link to="/about" className="hover:text-sky-700 transition">About</Link>
          <Link to="/gallery" className="hover:text-sky-700 transition">Gallery</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : '#'} target="_blank" rel="noreferrer" className="px-4 py-2 btn-outline flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</a>
          <a href={`tel:${SITE.phone}`} className="px-4 py-2 btn-primary flex items-center gap-2"><Phone size={16}/> Call</a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded bg-white/80 backdrop-blur-md shadow-sm">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-semibold">{SITE.name}</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded bg-gray-100"><X size={18} /></button>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 border-b">Home</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="py-2 border-b">Products</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2 border-b">Services</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 border-b">About</Link>
            <Link to="/gallery" onClick={() => setOpen(false)} className="py-2 border-b">Gallery</Link>
          </div>
          <div className="mt-6 space-y-3">
            <a href={SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : '#'} target="_blank" rel="noreferrer" className="w-full block text-center px-4 py-3 bg-green-500 text-white rounded">WhatsApp</a>
            <a href={`tel:${SITE.phone}`} className="w-full block text-center px-4 py-3 bg-sky-700 text-white rounded">Call</a>
          </div>
        </div>
      </div>
    </header>
  )
}
