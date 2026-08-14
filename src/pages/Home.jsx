import React from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/siteConfig'
import ProductCard from '../components/ProductCard'
import BrandCard from '../components/BrandCard'
import BRANDS from '../data/brands'
import { Phone } from 'lucide-react'

const sampleProducts = [
  { id: 1, name: 'Mechanical Sewing Machine', brand: 'JACK', description: 'Sturdy, reliable machine for home use.', image: '/src/assets/product-placeholder.svg' },
  { id: 2, name: 'Electronic Sewing Machine', brand: 'JUKI', description: 'Multiple stitch types and modern features.', image: '/src/assets/product-placeholder.svg' },
  { id: 3, name: 'Industrial Sewing Machine', brand: 'PEGASUS', description: 'Heavy duty for professional workshops.', image: '/src/assets/product-placeholder.svg' }
]

export default function Home() {
  return (
    <div>
      {/* HERO (deep navy) */}
      <section className="hero-section">
        <div className="page-container grid md:grid-cols-2 items-center gap-8 py-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-200">SEWING MACHINES • SALES • SERVICE</div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-xl">Quality Sewing Machines.
              <span className="block text-cyan-300">Reliable Service.</span>
            </h1>
            <p className="mt-5 text-cyan-100 text-lg max-w-prose">Local experts offering machine sales, professional servicing and genuine spare parts. Browse machines, request a demo, or contact us for repairs.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">Explore Machines</Link>
              <Link to="/contact" className="btn-outline-light">Contact Us</Link>
            </div>
          </div>

          <div aria-hidden="true" className="hero-visual">
            {/* Decorative hero visual — image removed until real assets are added */}
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip page-container -mt-10">
        <div className="trust-strip">
          <div className="trust-item"><div className="icon-circle bg-white text-primary">Q</div><div><h4>Quality Machines</h4><p>Authorized & genuine parts</p></div></div>
          <div className="trust-item"><div className="icon-circle bg-white text-primary">S</div><div><h4>Professional Service</h4><p>Repairs & maintenance</p></div></div>
          <div className="trust-item"><div className="icon-circle bg-white text-primary">P</div><div><h4>Genuine Spares</h4><p>Original parts available</p></div></div>
          <div className="trust-item"><div className="icon-circle bg-white text-primary">C</div><div><h4>Customer Support</h4><p>Phone & WhatsApp assistance</p></div></div>
        </div>
      </section>

      {/* BRANDS (white) */}
      <section className="page-container mt-16">
        <div className="section-card">
          <h3 className="text-xl font-semibold text-primary-dark">Trusted Brands</h3>
          <p className="text-gray-600 mt-2 max-w-prose">Explore quality sewing machines from leading manufacturers.</p>
          <div className="mt-6 brand-strip">
            {BRANDS.map(b => (
              <div key={b.id} className="brand-logo" title={b.name}>
                {b.logo ? <img src={b.logo} alt={b.name} className="max-w-full max-h-full object-contain"/> : <div className="text-sm font-semibold text-gray-600">{b.name}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS (light blue) */}
      <section className="section-light-blue mt-16 py-12">
        <div className="page-container">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">OUR MACHINES</div>
            <h2 className="mt-2 text-3xl font-bold text-primary-dark">Machines Built for Every Need</h2>
            <p className="mt-3 text-gray-700 max-w-prose">Professional, household and industrial machines — find the right model for your workshop or home.</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (white) */}
      <section className="page-container mt-16">
        <div className="section-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold">More Than Machines</h3>
              <p className="text-gray-700 mt-2 max-w-prose">Sales, repairs, servicing and maintenance — everything to keep you sewing.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="service-card">
                  <h5 className="font-semibold">Sales</h5>
                  <p className="text-sm text-gray-600">In-store demos and expert advice.</p>
                </div>
                <div className="service-card">
                  <h5 className="font-semibold">Repair</h5>
                  <p className="text-sm text-gray-600">Fast, reliable service using genuine parts.</p>
                </div>
                <div className="service-card">
                  <h5 className="font-semibold">Servicing</h5>
                  <p className="text-sm text-gray-600">Scheduled maintenance and tune-ups.</p>
                </div>
                <div className="service-card">
                  <h5 className="font-semibold">Installation</h5>
                  <p className="text-sm text-gray-600">On-site setup and training.</p>
                </div>
              </div>
            </div>

            <div className="image-holder" style={{height:300}}>Services image</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (soft cyan) */}
      <section className="section-soft-cyan mt-16 py-12">
        <div className="page-container grid md:grid-cols-2 gap-8 items-center">
          <div className="image-holder" style={{height:340}}>Why choose us image</div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">WHY PRAVEEN SEWING MACHINES</div>
            <h3 className="mt-3 text-3xl font-bold text-primary-dark">Everything You Need to Keep Sewing.</h3>
            <ul className="mt-4 space-y-3 text-gray-700 max-w-prose">
              <li><strong>Quality equipment</strong> — Trusted manufacturers.</li>
              <li><strong>Professional assistance</strong> — Demonstrations and guidance.</li>
              <li><strong>Reliable service</strong> — Skilled repairs and maintenance.</li>
              <li><strong>Genuine parts</strong> — Original spares for longevity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT (light gray) */}
      <section className="section-light-gray mt-16 py-12">
        <div className="page-container">
          <div className="section-card grid md:grid-cols-2 gap-6 items-center">
            <div className="image-holder" style={{height:240}}>About image</div>
            <div>
              <h3 className="text-2xl font-semibold">About</h3>
              <p className="text-gray-700 mt-2 max-w-prose">A short introduction to the business. Replace this with the real about copy when available.</p>
              <div className="mt-4">
                <Link to="/about" className="btn-outline">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="page-container mt-16">
        <h3 className="text-2xl font-semibold">Gallery</h3>
        <div className="mt-6 gallery-grid">
          <div className="gallery-item g-large">Large</div>
          <div className="gallery-item">Small</div>
          <div className="gallery-item g-vertical">Vertical</div>
          <div className="gallery-item">Small</div>
          <div className="gallery-item">Small</div>
          <div className="gallery-item">Small</div>
        </div>
        <div className="mt-6"><Link to="/gallery" className="btn-outline">View Gallery</Link></div>
      </section>

      {/* CONTACT CTA (dark) */}
      <section className="contact-cta-section mt-16">
        <div className="page-container">
          <div className="contact-cta">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Need the Right Sewing Machine?</h3>
              <p className="mt-2 text-cyan-100">Talk to our experts today — get a recommendation and on-site demo.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={`tel:${SITE.phone}`} className="btn-primary">Call Now</a>
              <a href={SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : '#'} className="btn-outline-light">WhatsApp Us</a>
              <a href="/contact" className="btn-outline-light">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is separate component */}
    </div>
  )
}

