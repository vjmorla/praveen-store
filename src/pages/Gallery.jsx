import React, { useState } from 'react'
import Lightbox from '../components/Lightbox'

const images = [
  '/src/assets/product-placeholder.svg',
  '/src/assets/product-placeholder.svg',
  '/src/assets/product-placeholder.svg',
  '/src/assets/product-placeholder.svg',
  '/src/assets/product-placeholder.svg',
  '/src/assets/product-placeholder.svg'
]

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  function openAt(i) {
    setIdx(i)
    setOpen(true)
  }

  return (
    <div className="page-container py-12">
      <div className="section-card">
        <h1 className="text-2xl font-bold text-sky-800">Gallery</h1>
        <p className="mt-4 text-gray-600">Image gallery placeholder. Replace with optimized images later.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => openAt(i)} className="rounded overflow-hidden bg-white shadow-sm focus:outline-none">
              <img src={src} alt={`Gallery ${i+1}`} className="w-full h-40 object-cover" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox open={open} src={images[idx]} alt={`Gallery ${idx+1}`} onClose={() => setOpen(false)} />
    </div>
  )
}
