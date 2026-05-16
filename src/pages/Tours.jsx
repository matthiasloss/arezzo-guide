import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Clock, Compass, Droplets, Footprints, Landmark, MapPin, Mountain, Route as RouteIcon, SlidersHorizontal, TreePine, Waves } from 'lucide-react'
import { hikingFilters, tourCategories, tours } from '../data/tours'

const iconMap = { MapPin, Landmark, Mountain, TreePine, Footprints, Waves, Compass }

const difficultyStyles = {
  Leicht: 'bg-emerald-100 text-emerald-800',
  'Leicht-Mittel': 'bg-lime-100 text-lime-800',
  Mittel: 'bg-amber-100 text-amber-800',
  'Mittel-Schwer': 'bg-orange-100 text-orange-800',
  Schwer: 'bg-red-100 text-red-800',
}

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredTours = useMemo(() => {
    const categoryTours = selectedCategory === 'all'
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory)
    const activeFilter = hikingFilters.find((filter) => filter.id === selectedFilter)
    return activeFilter ? categoryTours.filter(activeFilter.test) : categoryTours
  }, [selectedCategory, selectedFilter])

  return (
    <div className="min-h-screen bg-[#f4f1e8] text-[#20312a]">
      <header className="sticky top-0 z-20 border-b border-[#d9d3c3] bg-[#f4f1e8]/95 px-4 py-4 backdrop-blur">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7b3e]">Casentino</p>
            <h1 className="text-2xl font-bold">Wanderungen</h1>
          </div>
          <SlidersHorizontal className="text-[#245447]" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {tourCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || RouteIcon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#245447] text-white'
                    : 'bg-white text-[#20312a]/70'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            )
          })}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold ${selectedFilter === 'all' ? 'bg-[#f7c948] text-[#20312a]' : 'bg-white text-[#20312a]/70'}`}
          >
            Alles
          </button>
          {hikingFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold ${selectedFilter === filter.id ? 'bg-[#f7c948] text-[#20312a]' : 'bg-white text-[#20312a]/70'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      <main className="px-4 py-4">
        <p className="mb-4 text-sm text-[#20312a]/65">
          {filteredTours.length} Touren gefunden. Angaben sind Planungswerte; Wegzustand bitte vor Ort und in offiziellen Karten prufen.
        </p>
        <div className="space-y-4">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>
    </div>
  )
}

function TourCard({ tour }) {
  return (
    <Link to={`/touren/${tour.id}`} className="block overflow-hidden rounded-lg bg-white shadow-tuscan card-hover">
      <div className="border-l-4 border-[#245447] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold">{tour.name}</h2>
            <p className="mt-1 text-sm text-[#20312a]/65">{tour.subtitle}</p>
          </div>
          <ChevronRight className="mt-1 shrink-0 text-[#20312a]/30" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Meta icon={Clock} label={tour.duration} />
          <Meta icon={Footprints} label={tour.distance} />
          <Meta icon={Mountain} label={tour.elevation} />
          <Meta icon={Droplets} label={tour.water} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className={`rounded px-2 py-1 text-xs font-bold ${difficultyStyles[tour.difficulty] || 'bg-stone-100 text-stone-800'}`}>
            {tour.difficulty}
          </span>
          <span className="rounded bg-[#edf2df] px-2 py-1 text-xs font-bold text-[#50622f]">{tour.season}</span>
          <span className="rounded bg-[#ece6d7] px-2 py-1 text-xs font-bold text-[#725a35]">{tour.routeType}</span>
        </div>
      </div>
    </Link>
  )
}

function Meta({ icon: Icon, label }) {
  return (
    <div className="flex min-h-10 items-center gap-2 rounded-lg bg-[#f4f1e8] px-3 py-2 text-xs font-semibold text-[#20312a]/70">
      <Icon size={15} className="shrink-0 text-[#245447]" />
      <span className="truncate">{label}</span>
    </div>
  )
}
