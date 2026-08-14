import React from 'react'
import { SITE } from '../data/siteConfig'

export default function ProductCard({ image, name, brand, description }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 bg-gray-100">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        ) : (
          <img src="/src/assets/product-placeholder.svg" alt="placeholder" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        )}
        <div className="absolute left-3 top-3 px-2 py-1 bg-white/90 text-xs font-medium rounded-full text-sky-800">{brand || 'Brand'}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sky-900">{name || 'Product name'}</h3>
        <p className="mt-2 text-sm text-gray-600">{description || 'Short product description.'}</p>
        <div className="mt-4 flex items-center gap-3">
          <a href={`tel:${SITE.phone}`} className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded shadow">Enquire</a>
          <a href="/contact" className="text-sm text-gray-600">More details</a>
        </div>
      </div>
    </article>
  )
}
