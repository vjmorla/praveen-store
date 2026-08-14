import React from 'react'
import { SITE } from '../data/siteConfig'

export default function ProductCard({ image, name, brand, description, onQuickView }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <div className="feature-image">
          <div className="feature-image-inner h-56 bg-gray-50 flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">Product image</div>
            )}
          </div>
        </div>
        <div className="absolute left-4 top-4 px-3 py-1 bg-white rounded-full text-sm font-semibold text-sky-700 shadow">{brand || 'Brand'}</div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-xl text-sky-900">{name || 'Product name'}</h3>
        <p className="mt-2 text-gray-600">{description || 'Short product description.'}</p>
        <div className="mt-5 flex items-center gap-3">
          <button onClick={() => onQuickView && onQuickView()} className="btn-primary">Quick view</button>
          <a href={`tel:${SITE.phone}`} className="btn-outline">Enquire</a>
        </div>
      </div>
    </article>
  )
}
