import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronRight, Star, MapPin, Home, Landmark, UtensilsCrossed, TreePine, ShoppingBag, Palette, X } from 'lucide-react'
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
    <div className="min-h-screen" style={{ background: 'var(--tuscan-cream)' }}>
      {/* Header */}
      <div className="glass sticky top-0 z-10">
        <div className="px-5 py-5">
          <h1 className="text-2xl font-bold text-[#4a3728] mb-4">Entdecken</h1>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a3728]/40" size={20} />
            <input
              type="text"
              placeholder="Suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-white rounded-2xl text-[#4a3728] placeholder-[#4a3728]/40 shadow-tuscan border-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4a3728]/40 hover:text-[#4a3728]"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 btn-press ${
                selectedCategory === 'all' && !searchQuery
                  ? 'gradient-tuscan text-white shadow-lg'
                  : 'bg-white text-[#4a3728]/70 shadow-tuscan'
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
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 btn-press ${
                    selectedCategory === cat.id && !searchQuery
                      ? 'gradient-tuscan text-white shadow-lg'
                      : 'bg-white text-[#4a3728]/70 shadow-tuscan'
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
      <div className="px-5 py-4">
        {searchQuery && (
          <p className="text-sm text-[#4a3728]/50 mb-4 font-medium">
            {filteredPlaces.length} Ergebnisse für "{searchQuery}"
          </p>
        )}

        <div className="space-y-3">
          {filteredPlaces.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#4a3728]/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#4a3728]/30" size={32} />
            </div>
            <p className="text-[#4a3728]/50 font-medium">Keine Orte gefunden</p>
          </div>
        )}
      </div>
    </div>
  )
}

function PlaceCard({ place, index }) {
  const category = categories.find(c => c.id === place.category)

  return (
    <Link
      to={`/orte/${place.id}`}
      className="block bg-white rounded-2xl p-4 shadow-tuscan card-hover"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: getCategoryColor(place.category) + '15' }}
        >
          <span className="text-2xl">{getCategoryEmoji(place.category)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[#4a3728] truncate">{place.name}</h3>
            {place.rating && (
              <div className="flex items-center gap-1 flex-shrink-0 bg-amber-50 px-2 py-1 rounded-lg">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <span className="text-xs font-semibold text-amber-700">{place.rating}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-[#4a3728]/60 line-clamp-2 mt-1 leading-relaxed">{place.description}</p>
          <div className="flex items-center gap-3 mt-2.5 text-xs text-[#4a3728]/40 font-medium">
            {place.duration && <span>{place.duration}</span>}
            {place.distance && <span>{place.distance}</span>}
            {place.priceRange && <span>{place.priceRange}</span>}
          </div>
        </div>
        <ChevronRight className="text-[#4a3728]/20 flex-shrink-0 self-center" size={20} />
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
    fattoria: '#722f37',
    sehenswuerdigkeiten: '#d4a853',
    restaurants: '#c75b39',
    natur: '#5a7247',
    shoppen: '#9333ea',
    kultur: '#3b82f6',
    praktisch: '#4a3728',
  }
  return colors[category] || '#4a3728'
}
