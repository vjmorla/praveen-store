import React from 'react'

function initials(name) {
  return name.split(' ').map(s => s[0]).join('').slice(0,3).toUpperCase()
}

export default function BrandCard({ name, logo }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {logo ? (
        <div className="brand-logo"><img src={logo} alt={name} className="max-w-full max-h-full object-contain" loading="lazy" decoding="async" /></div>
      ) : (
        <div className="brand-logo flex items-center justify-center text-gray-600 font-semibold">{initials(name)}</div>
      )}
      <div className="text-sm font-medium mt-2">{name}</div>
    </div>
  )
}
