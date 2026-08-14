import React from 'react'
import { SITE } from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="h-1 bg-gradient-to-r from-indigo-600 to-sky-600" />
      <div className="bg-gradient-to-b from-white to-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">{SITE.name}</h3>
          <p className="text-sm text-gray-600">Professional sewing machine sales & service.</p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm">Phone: <a href={`tel:${SITE.phone}`} className="text-blue-600">{SITE.phone || 'Placeholder'}</a></p>
          <p className="text-sm">WhatsApp: {SITE.whatsapp ? <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="text-green-600">Chat on WhatsApp</a> : 'Placeholder'}</p>
          <p className="text-sm">Email: {SITE.email ? <a href={`mailto:${SITE.email}`} className="text-blue-600">{SITE.email}</a> : 'Placeholder'}</p>
        </div>
        <div>
          <h4 className="font-medium">Location</h4>
          <p className="text-sm">{SITE.address || 'Address placeholder'}</p>
          {SITE.googleMapsUrl && (
            <p className="text-sm mt-2"><a href={SITE.googleMapsUrl} target="_blank" rel="noreferrer" className="text-blue-600">View on Google Maps</a></p>
          )}
        </div>
      </div>
        <div className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
