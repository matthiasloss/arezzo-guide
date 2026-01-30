import { Link } from 'react-router-dom'
import { MapPin, Route, Wine, TreePine, Landmark, Info, ChevronRight, Sun, Phone } from 'lucide-react'
import { places } from '../data/places'
import { tours } from '../data/tours'

const quickLinks = [
  { to: '/orte', icon: MapPin, label: 'Sehenswürdigkeiten', color: 'bg-amber-500' },
  { to: '/touren', icon: Route, label: 'Touren planen', color: 'bg-green-500' },
  { to: '/karte', icon: Landmark, label: 'Karte öffnen', color: 'bg-blue-500' },
  { to: '/info', icon: Info, label: 'Praktische Infos', color: 'bg-purple-500' },
]

export default function Home() {
  const fattoria = places.find(p => p.id === 'fattoria-lavialla')
  const featuredTours = tours.slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-amber-500 text-white">
        <div className="px-4 pt-8 pb-12">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="text-amber-300" size={24} />
            <span className="text-purple-200 text-sm">Willkommen in der Toskana</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Arezzo Guide
          </h1>
          <p className="text-purple-100 text-lg">
            Dein Reisebegleiter für die Region Arezzo & Fattoria Lavialla
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 -mt-6">
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ to, icon: Icon, label, color }) => (
            <Link
              key={to}
              to={to}
              className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 active:scale-95 transition-transform"
            >
              <div className={`${color} p-2 rounded-lg`}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="font-medium text-gray-800">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Fattoria Lavialla Section */}
      {fattoria && (
        <section className="px-4 mt-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Deine Unterkunft</p>
                  <h2 className="text-xl font-bold text-white">{fattoria.name}</h2>
                </div>
                <span className="text-3xl">🏡</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{fattoria.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  Bio-Bauernhof
                </span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                  Weingut
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Restaurant
                </span>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/orte/${fattoria.id}`}
                  className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium"
                >
                  Details ansehen
                </Link>
                {fattoria.phone && (
                  <a
                    href={`tel:${fattoria.phone}`}
                    className="bg-gray-100 p-2 rounded-lg"
                  >
                    <Phone size={20} className="text-gray-600" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Tours */}
      <section className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Beliebte Touren</h2>
          <Link to="/touren" className="text-purple-600 text-sm font-medium flex items-center">
            Alle <ChevronRight size={16} />
          </Link>
        </div>
        <div className="space-y-3">
          {featuredTours.map((tour) => (
            <Link
              key={tour.id}
              to={`/touren/${tour.id}`}
              className="block bg-white rounded-xl p-4 shadow-md active:scale-98 transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Route size={24} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{tour.name}</h3>
                  <p className="text-sm text-gray-500">{tour.subtitle}</p>
                  <div className="flex gap-3 mt-2 text-xs text-gray-400">
                    <span>{tour.duration}</span>
                    <span>•</span>
                    <span>{tour.difficulty}</span>
                  </div>
                </div>
                <ChevronRight className="text-gray-300 mt-2" size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 mt-8 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Highlights der Region</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🏛️</span>
            <p className="text-xs text-gray-600 mt-1">Arezzo Altstadt</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🍷</span>
            <p className="text-xs text-gray-600 mt-1">Chianti Weine</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🏔️</span>
            <p className="text-xs text-gray-600 mt-1">Cortona</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🎨</span>
            <p className="text-xs text-gray-600 mt-1">Piero Fresken</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🌳</span>
            <p className="text-xs text-gray-600 mt-1">Casentino</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-center">
            <span className="text-2xl">🧀</span>
            <p className="text-xs text-gray-600 mt-1">Pecorino</p>
          </div>
        </div>
      </section>

      {/* Offline Notice */}
      <div className="px-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-green-800 text-sm">
            <strong>Offline verfügbar:</strong> Diese App funktioniert auch ohne Internet.
            Karten werden beim ersten Laden gespeichert.
          </p>
        </div>
      </div>
    </div>
  )
}
