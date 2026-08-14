import React from 'react'
import { SITE } from '../data/siteConfig'

export default function Contact() {
  return (
    <div className="page-container py-12">
      <div className="section-card">
        <h1 className="text-2xl font-bold text-sky-800">Contact</h1>
        <div className="mt-4 text-gray-700">
          <p>Phone: <a href={`tel:${SITE.phone}`} className="text-blue-600">{SITE.phone || 'Placeholder'}</a></p>
          <p>WhatsApp: {SITE.whatsapp ? <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="text-green-600">Chat on WhatsApp</a> : 'Placeholder'}</p>
          <p>Email: {SITE.email ? <a href={`mailto:${SITE.email}`} className="text-blue-600">{SITE.email}</a> : 'Placeholder'}</p>
          <p>Address: {SITE.address || 'Placeholder'}</p>
        </div>
      </div>
    </div>
  )
}
