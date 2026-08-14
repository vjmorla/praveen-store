import React from 'react'

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="hidden lg:block lg:w-[280px] lg:shrink-0">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm lg:sticky lg:top-24">
        <div className="mb-5 flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900">Filters</h4>
          <button
            type="button"
            className="text-xs font-medium text-sky-700 hover:text-sky-900"
            onClick={() => setFilters({ brand: '', type: '', sort: 'featured', q: '' })}
          >
            Reset
          </button>
        </div>

        <div className="space-y-5 text-sm text-slate-700">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Brand</label>
            <select
              value={filters.brand}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))}
            >
              <option value="">All brands</option>
              <option value="JACK">JACK</option>
              <option value="JUKI">JUKI</option>
              <option value="BROTHER">BROTHER</option>
              <option value="PEGASUS">PEGASUS</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Type</label>
            <select
              value={filters.type}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}
            >
              <option value="">All types</option>
              <option value="mechanical">Mechanical</option>
              <option value="electronic">Electronic</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Sort</label>
            <select
              value={filters.sort}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  )
}
