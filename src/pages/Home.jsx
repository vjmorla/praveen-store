import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/siteConfig'
import ProductCard from '../components/ProductCard'
import BrandCard from '../components/BrandCard'
import BRANDS from '../data/brands'

const sampleProducts = [
  { id: 1, name: 'Mechanical Sewing Machine', brand: 'JACK', description: 'Sturdy, reliable machine for home use.', image: encodeURI('/src/assets/Mechanical Machine.avif') },
  { id: 2, name: 'Electronic Sewing Machine', brand: 'JUKI', description: 'Multiple stitch types and modern features.', image: '/src/assets/Electrical.webp' },
  { id: 3, name: 'Industrial Sewing Machine', brand: 'PEGASUS', description: 'Heavy duty for professional workshops.', image: '/src/assets/Industrial.jpg' }
]

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/src/assets/Backgroundimage-800.webp 800w, /src/assets/Backgroundimage-1200.webp 1200w, /src/assets/Backgroundimage-1920.webp 1920w" type="image/webp" sizes="(max-width: 768px) 800px, (max-width: 1200px) 1200px, 1920px" />
            <img src="/src/assets/Backgroundimage.webp" alt="Praveen Sewing Machines shop" className="w-full h-full object-cover" loading="eager" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b63d6]/6 to-transparent"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-start">
              <div className="p-6 bg-black/40 rounded-lg backdrop-blur-sm max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Praveen Sewing Machines</h1>
                <p className="mt-4 text-gray-100 text-lg">Professional sewing machine sales and trusted servicing for Mangalagiri and nearby areas.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${SITE.phone}`} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded shadow">Call Now</a>
                  <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 border border-blue-100 rounded shadow-sm">Contact</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src="/src/assets/sewing-machine.svg" alt="Sewing machine" className="max-w-md w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-sky-800">Selected Products</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="subtle-section py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-sky-800">Brands We Carry</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {BRANDS.map(b => (
              <div key={b.id} className="flex items-center justify-center p-4">
                <BrandCard name={b.name} logo={b.logo} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
