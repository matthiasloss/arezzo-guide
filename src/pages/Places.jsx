import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronRight, Star, MapPin, Home, Landmark, UtensilsCrossed, TreePine, ShoppingBag, Palette } from 'lucide-react'
import { places, categories, searchPlaces, getPlacesByCategory } from '../data/places'

const iconMap = {
  Home,
  Landmark,
  UtensilsCrossed,
  TreePine,
  ShoppingBag,
  Palette,
}

export default function Places() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPlaces = useMemo(() => {
    let result = places

    if (searchQuery) {
      result = searchPlaces(searchQuery)
    } else if (selectedCategory !== 'all') {
      result = getPlacesByCategory(selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Entdecken</h1>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all' && !searchQuery
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Alle ({places.length})
            </button>
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || MapPin
              const count = getPlacesByCategory(cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSearchQuery(''); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                    selectedCategory === cat.id && !searchQuery
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Icon size={16} />
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-4">
        {searchQuery && (
          <p className="text-sm text-gray-500 mb-4">
            {filteredPlaces.length} Ergebnisse für "{searchQuery}"
          </p>
        )}

        <div className="space-y-3">
          {filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="mx-auto text-gray-300" size={48} />
            <p className="text-gray-500 mt-4">Keine Orte gefunden</p>
          </div>
        )}
      </div>
    </div>
  )
}

function PlaceCard({ place }) {
  const category = categories.find(c => c.id === place.category)

  return (
    <Link
      to={`/orte/${place.id}`}
      className="block bg-white rounded-xl p-4 shadow-sm active:scale-98 transition-transform"
    >
      <div className="flex gap-4">
        <div className={`w-12 h-12 rounded-lg bg-${category?.color || 'gray'}-100 flex items-center justify-center flex-shrink-0`}
          style={{ backgroundColor: getCategoryColor(place.category) + '20' }}
        >
          <span className="text-2xl">{getCategoryEmoji(place.category)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-800 truncate pr-2">{place.name}</h3>
            {place.rating && (
              <div className="flex items-center gap-1 flex-shrink-0">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="text-sm text-gray-600">{place.rating}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">{place.description}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            {place.duration && <span>{place.duration}</span>}
            {place.distance && <span>{place.distance}</span>}
            {place.priceRange && <span>{place.priceRange}</span>}
          </div>
        </div>
        <ChevronRight className="text-gray-300 flex-shrink-0 self-center" size={20} />
      </div>
    </Link>
  )
}

function getCategoryEmoji(category) {
  const emojis = {
    fattoria: '🏡',
    sehenswuerdigkeiten: '🏛️',
    restaurants: '🍷',
    natur: '🌳',
    shoppen: '🛍️',
    kultur: '🎨',
    praktisch: '📍',
  }
  return emojis[category] || '📍'
}

function getCategoryColor(category) {
  const colors = {
    fattoria: '#9333ea',
    sehenswuerdigkeiten: '#f59e0b',
    restaurants: '#ef4444',
    natur: '#22c55e',
    shoppen: '#ec4899',
    kultur: '#3b82f6',
    praktisch: '#6b7280',
  }
  return colors[category] || '#6b7280'
}
