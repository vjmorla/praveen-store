import React, { useEffect } from 'react'

export default function Lightbox({ src, alt, open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-w-4xl w-full mx-4">
        <button onClick={onClose} aria-label="Close" className="absolute right-2 top-2 z-10 text-white bg-black/40 rounded p-2">✕</button>
        <img src={src} alt={alt} className="w-full h-auto rounded shadow-lg" loading="eager" decoding="async" />
      </div>
    </div>
  )
}
