import React from 'react'

export default function QuickViewModal({ open, onClose, product }) {
  if (!open || !product) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex items-center justify-center bg-gray-50">
            <div className="w-full h-72 bg-gray-100 flex items-center justify-center">{product.image ? <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> : <div className="text-gray-500">Image</div>}</div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <div className="text-sm text-gray-500 mt-1">{product.brand}</div>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <div className="mt-6 flex gap-3">
              <a href={`tel:${product.phone || ''}`} className="btn-primary">Enquire</a>
              <a href="/contact" className="btn-outline">Contact</a>
            </div>
          </div>
        </div>
        <button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 p-2 rounded bg-white/80">✕</button>
      </div>
    </div>
  )
}
