import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import L from 'leaflet'
import { places, categories } from '../data/places'

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom marker icons by category
const categoryColors = {
  fattoria: '#9333ea', // purple
  sehenswuerdigkeiten: '#f59e0b', // amber
  restaurants: '#ef4444', // red
  natur: '#22c55e', // green
  shoppen: '#ec4899', // pink
  kultur: '#3b82f6', // blue
  praktisch: '#6b7280', // gray
}

function createIcon(color) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  })
}

// Default center: Arezzo area
const DEFAULT_CENTER = [43.4633, 11.8817]
const DEFAULT_ZOOM = 11

export default function MapPage() {
  const [selectedCategories, setSelectedCategories] = useState(new Set(['all']))
  const [showFilter, setShowFilter] = useState(false)

  const filteredPlaces = useMemo(() => {
    if (selectedCategories.has('all')) {
      return places.filter(p => p.coordinates)
    }
    return places.filter(p => p.coordinates && selectedCategories.has(p.category))
  }, [selectedCategories])

  const toggleCategory = (catId) => {
    setSelectedCategories(prev => {
      const next = new Set(prev)
      if (catId === 'all') {
        return new Set(['all'])
      }
      next.delete('all')
      if (next.has(catId)) {
        next.delete(catId)
        if (next.size === 0) next.add('all')
      } else {
        next.add(catId)
      }
      return next
    })
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between z-10">
        <h1 className="text-lg font-bold text-gray-800">Karte</h1>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`p-2 rounded-lg ${showFilter ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}
        >
          <Filter size={20} />
        </button>
      </div>

      {/* Filter Panel */}
      {showFilter && (
        <div className="bg-white border-b px-4 py-3 z-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategories.has('all')
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Alle
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategories.has(cat.id)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          className="h-full w-full"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredPlaces.map((place) => (
            <Marker
              key={place.id}
              position={place.coordinates}
              icon={createIcon(categoryColors[place.category] || '#6b7280')}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-gray-800">{place.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{place.description}</p>
                  <Link
                    to={`/orte/${place.id}`}
                    className="block mt-2 text-center bg-purple-600 text-white py-1.5 px-3 rounded text-sm font-medium"
                  >
                    Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-[1000]">
          <p className="text-xs font-medium text-gray-500 mb-2">Legende</p>
          <div className="space-y-1">
            {categories.slice(0, 4).map((cat) => (
              <div key={cat.id} className="flex items-center gap-2 text-xs">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: categoryColors[cat.id] }}
                />
                <span className="text-gray-600">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* POI Count */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 z-[1000]">
          <p className="text-sm text-gray-600">
            <strong>{filteredPlaces.length}</strong> Orte
          </p>
        </div>
      </div>
    </div>
  )
}
