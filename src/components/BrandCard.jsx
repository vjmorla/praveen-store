import React from 'react'

function initials(name) {
  return name.split(' ').map(s => s[0]).join('').slice(0,3).toUpperCase()
}

export default function BrandCard({ name, logo }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {logo ? (
        <img src={logo} alt={name} className="w-24 h-24 object-contain" loading="lazy" decoding="async" />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-lg font-semibold">{initials(name)}</div>
      )}
      <div className="text-sm font-medium">{name}</div>
    </div>
  )
}
