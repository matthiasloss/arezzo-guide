import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Clock, MapPin, Route as RouteIcon, Landmark, Wine, Mountain, TreePine, Footprints } from 'lucide-react'
import { tours, tourCategories, getToursByCategory } from '../data/tours'

const iconMap = {
  MapPin,
  Landmark,
  Wine,
  Mountain,
  TreePine,
  Footprints,
}

const difficultyColors = {
  'Leicht': 'bg-green-100 text-green-700',
  'Leicht-Mittel': 'bg-lime-100 text-lime-700',
  'Mittel': 'bg-amber-100 text-amber-700',
  'Mittel-Schwer': 'bg-orange-100 text-orange-700',
  'Leicht (Auto)': 'bg-blue-100 text-blue-700',
  'Mittel (viel Fahren)': 'bg-blue-100 text-blue-700',
}

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTours = useMemo(() => {
    return getToursByCategory(selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Touren & Routen</h1>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {tourCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || RouteIcon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Icon size={16} />
                  {cat.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tour List */}
      <div className="px-4 py-4 space-y-4">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <RouteIcon className="mx-auto text-gray-300" size={48} />
            <p className="text-gray-500 mt-4">Keine Touren in dieser Kategorie</p>
          </div>
        )}
      </div>
    </div>
  )
}

function TourCard({ tour }) {
  return (
    <Link
      to={`/touren/${tour.id}`}
      className="block bg-white rounded-2xl shadow-sm overflow-hidden active:scale-98 transition-transform"
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-4 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold">{tour.name}</h3>
            <p className="text-green-100 text-sm">{tour.subtitle}</p>
          </div>
          <RouteIcon size={24} className="text-green-200" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {tour.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={14} />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin size={14} />
            {tour.distance}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[tour.difficulty] || 'bg-gray-100 text-gray-600'}`}>
            {tour.difficulty}
          </span>
        </div>

        {/* Stops preview */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{tour.stops.length} Stationen</span>
              <div className="flex -space-x-2">
                {tour.stops.slice(0, 3).map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-600"
                  >
                    {i + 1}
                  </div>
                ))}
                {tour.stops.length > 3 && (
                  <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">
                    +{tour.stops.length - 3}
                  </div>
                )}
              </div>
            </div>
            <ChevronRight className="text-gray-300" size={20} />
          </div>
        </div>
      </div>
    </Link>
  )
}
