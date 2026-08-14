import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { SITE } from '../data/siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow">
      <div className="h-1 bg-gradient-to-r from-sky-600 to-indigo-600" />
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-semibold">{SITE.name}</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <a href={`tel:${SITE.phone}`} className="px-3 py-2 btn-primary">Call</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 rounded bg-gray-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
            <Link to="/products" onClick={() => setOpen(false)} className="block">Products</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="block">Services</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
            <Link to="/gallery" onClick={() => setOpen(false)} className="block">Gallery</Link>
            <div className="flex gap-3 pt-2">
              <a href={`tel:${SITE.phone}`} className="flex-1 px-3 py-2 bg-blue-600 text-white rounded flex items-center justify-center gap-2"><Phone size={16}/> Call</a>
              <a href={SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : '#'} target="_blank" rel="noreferrer" className="flex-1 px-3 py-2 bg-green-500 text-white rounded flex items-center justify-center gap-2"><MessageCircle size={16}/> WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
