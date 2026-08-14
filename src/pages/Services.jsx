import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <div className="page-container py-12">
      <div className="section-card">
        <h1 className="text-2xl font-bold text-sky-800">Services</h1>
        <p className="mt-4 text-gray-600">Our main service categories are listed below. Contact us for details.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <ServiceCard key={s.id} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
