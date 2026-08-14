import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page-container py-12">
      <div className="section-card overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">About Us</div>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Built around quality machines and dependable service.</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Praveen Sewing Machines is dedicated to providing quality sewing machines and reliable service solutions for a wide range of sewing needs. From helping customers choose the right machine to servicing and maintenance, our focus is on delivering dependable equipment and helpful support.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are a professional tailor, a growing business, or looking for a sewing machine for personal use, we aim to make the process simple by helping you find the right equipment and the support you need.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Owned by <span className="font-semibold text-slate-900">Nandam Praveen Kumar</span>, Praveen Sewing Machines is committed to building lasting customer relationships through quality products, responsive service, and customer-focused assistance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">Explore Machines</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="image-holder" style={{ height: 280, borderRadius: '1rem' }}>Store / business image placeholder</div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-700">What we do</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Help customers choose dependable sewing machines suited to home, tailoring, and professional use.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-700">How we help</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Offer practical support with product guidance, repairs, servicing, and genuine spare parts for sewing equipment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-700">Our approach</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Focused on quality, trust, and long-term customer relationships built on responsive and reliable service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
