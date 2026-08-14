import React from 'react'
import { SITE } from '../data/siteConfig'

export default function Contact() {
  return (
    <div className="page-container py-12">
      <div className="section-card">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">Contact</div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">We’re here to help with the right machine and support.</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you need help choosing a sewing machine, want to book a service, or need spare parts support, our team is ready to assist.
            </p>

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{' '}
                <a href={`tel:${SITE.phone}`} className="text-sky-700 hover:text-sky-900">{SITE.phone || 'Placeholder'}</a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">WhatsApp:</span>{' '}
                {SITE.whatsapp ? <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-emerald-700">Chat on WhatsApp</a> : 'Placeholder'}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{' '}
                {SITE.email ? <a href={`mailto:${SITE.email}`} className="text-sky-700 hover:text-sky-900">{SITE.email}</a> : 'Placeholder'}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Address:</span>{' '}
                <span>{SITE.address || 'Placeholder'}</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-700">Business Hours</div>
            <div className="mt-4 space-y-3 text-slate-700">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2">
                <span>Monday - Saturday</span>
                <span className="font-medium text-slate-900">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Sunday</span>
                <span className="font-medium text-slate-900">Closed</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm leading-6 text-slate-600">
              Visit our store for machine demos, repairs, maintenance, and expert guidance.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
