import React, { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import QuickViewModal from '../components/QuickViewModal'
import BRANDS from '../data/brands'

const ALL_PRODUCTS = [
  { id: 1, name: 'Mechanical Sewing Machine', brand: 'JACK', type: 'mechanical', description: 'Sturdy, reliable machine for home use.' },
  { id: 2, name: 'Electronic Sewing Machine', brand: 'JUKI', type: 'electronic', description: 'Multiple stitch types and modern features.' },
  { id: 3, name: 'Industrial Sewing Machine', brand: 'PEGASUS', type: 'industrial', description: 'Heavy duty for professional workshops.' },
  { id: 4, name: 'Brother Home Machine', brand: 'BROTHER', type: 'mechanical', description: 'Compact and easy to use for small projects.' }
]

export default function Products() {
  const [filters, setFilters] = useState({ brand: '', type: '', sort: 'featured', q: '' })
  const [quickProduct, setQuickProduct] = useState(null)

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS.slice()
    if (filters.brand) list = list.filter(p => p.brand === filters.brand)
    if (filters.type) list = list.filter(p => p.type === filters.type)
    if (filters.q) list = list.filter(p => p.name.toLowerCase().includes(filters.q.toLowerCase()))
    if (filters.sort === 'name-asc') list.sort((a,b) => a.name.localeCompare(b.name))
    if (filters.sort === 'name-desc') list.sort((a,b) => b.name.localeCompare(a.name))
    return list
  }, [filters])

  return (
    <div className="page-container py-12">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="min-w-0">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">Our machines</div>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Machines</h1>
            </div>

            <div className="w-full sm:max-w-xs">
              <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Search</label>
              <input
                placeholder="Search machines"
                value={filters.q}
                onChange={e => setFilters(f => ({ ...f, q: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map(p => (
              <ProductCard key={p.id} {...p} onQuickView={() => setQuickProduct(p)} />
            ))}
          </div>

          {filtered.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">No machines match the selected filters.</div>}
        </div>
      </div>

      <QuickViewModal open={!!quickProduct} onClose={() => setQuickProduct(null)} product={quickProduct} />
    </div>
  )
}
