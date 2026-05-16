import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Filter, LocateFixed, Route as RouteIcon } from 'lucide-react'
import L from 'leaflet'
import { categories, places } from '../data/places'
import { tours } from '../data/tours'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const categoryColors = {
  trailhead: '#245447',
  village: '#d47b35',
  nature: '#3f7d4a',
  culture: '#6d5aa8',
  service: '#56616b',
  tour: '#f7c948',
}

function createIcon(color, label = '') {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background:${color};width:30px;height:30px;border-radius:8px;border:3px solid white;box-shadow:0 3px 10px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:#20312a;font-weight:800;font-size:11px;">${label}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -12],
  })
}

const DEFAULT_CENTER = [43.794, 11.82]
const DEFAULT_ZOOM = 10

export default function MapPage() {
  const [selectedCategories, setSelectedCategories] = useState(new Set(['all']))
  const [showTours, setShowTours] = useState(true)
  const [showFilter, setShowFilter] = useState(false)

  const filteredPlaces = useMemo(() => {
    if (selectedCategories.has('all')) return places.filter((place) => place.coordinates)
    return places.filter((place) => place.coordinates && selectedCategories.has(place.category))
  }, [selectedCategories])

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) => {
      if (catId === 'all') return new Set(['all'])
      const next = new Set(prev)
      next.delete('all')
      if (next.has(catId)) next.delete(catId)
      else next.add(catId)
      if (next.size === 0) next.add('all')
      return next
    })
  }

  return (
    <div className="flex h-screen flex-col bg-[#f4f1e8] text-[#20312a]">
      <header className="z-10 border-b border-[#d9d3c3] bg-white px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b7b3e]">Nationalpark & Tal</p>
            <h1 className="text-lg font-bold">Casentino Karte</h1>
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`rounded-lg p-3 ${showFilter ? 'bg-[#245447] text-white' : 'bg-[#f4f1e8] text-[#20312a]'}`}
            aria-label="Filter"
          >
            <Filter size={20} />
          </button>
        </div>

        {showFilter && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => toggleCategory('all')} className={chipClass(selectedCategories.has('all'))}>Alle Orte</button>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => toggleCategory(cat.id)} className={chipClass(selectedCategories.has(cat.id))}>
                {cat.name}
              </button>
            ))}
            <button onClick={() => setShowTours((value) => !value)} className={chipClass(showTours)}>
              Tourstarts
            </button>
          </div>
        )}
      </header>

      <div className="relative flex-1">
        <MapContainer center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} className="h-full w-full" zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredPlaces.map((place) => (
            <Marker key={place.id} position={place.coordinates} icon={createIcon(categoryColors[place.category] || '#56616b')}>
              <Popup>
                <div className="min-w-[210px]">
                  <h3 className="font-bold text-[#20312a]">{place.name}</h3>
                  <p className="mt-1 text-sm text-[#20312a]/70">{place.description}</p>
                  <Link to={`/orte/${place.id}`} className="mt-3 block rounded bg-[#245447] px-3 py-2 text-center text-sm font-bold text-white">
                    Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}

          {showTours && tours.map((tour) => (
            <Marker key={tour.id} position={tour.startCoordinates} icon={createIcon(categoryColors.tour, 'T')}>
              <Popup>
                <div className="min-w-[220px]">
                  <h3 className="font-bold text-[#20312a]">{tour.name}</h3>
                  <p className="mt-1 text-sm text-[#20312a]/70">{tour.distance}, {tour.elevation}, {tour.difficulty}</p>
                  <Link to={`/touren/${tour.id}`} className="mt-3 block rounded bg-[#f7c948] px-3 py-2 text-center text-sm font-bold text-[#20312a]">
                    Tour ansehen
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="absolute bottom-4 left-4 z-[1000] rounded-lg bg-white p-3 shadow-lg">
          <p className="mb-2 text-xs font-bold text-[#20312a]/60">Legende</p>
          <Legend color={categoryColors.tour} label="Tourstart" />
          {categories.slice(0, 4).map((cat) => <Legend key={cat.id} color={categoryColors[cat.id]} label={cat.name} />)}
        </div>

        <div className="absolute right-4 top-4 z-[1000] rounded-lg bg-white px-3 py-2 text-sm font-bold shadow-lg">
          <span className="inline-flex items-center gap-2"><LocateFixed size={15} /> {filteredPlaces.length} Orte</span>
          {showTours && <span className="ml-3 inline-flex items-center gap-1"><RouteIcon size={15} /> {tours.length}</span>}
        </div>
      </div>
    </div>
  )
}

function chipClass(active) {
  return `rounded-lg px-3 py-2 text-sm font-semibold ${active ? 'bg-[#245447] text-white' : 'bg-[#f4f1e8] text-[#20312a]/70'}`
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#20312a]/70">
      <span className="h-3 w-3 rounded" style={{ backgroundColor: color }} />
      <span>{label}</span>
    </div>
  )
}
