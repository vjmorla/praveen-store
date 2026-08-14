import React from 'react'
import { SITE } from '../data/siteConfig'

export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      <div className="mt-4">
        <a href={`tel:${SITE.phone}`} className="inline-block px-3 py-2 bg-blue-600 text-white rounded">Call to Enquire</a>
      </div>
    </div>
  )
}
