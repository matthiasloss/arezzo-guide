import { Link } from 'react-router-dom'
import { MapPin, Route, Landmark, Info, ChevronRight, Sun, Phone, Grape, Video, ExternalLink } from 'lucide-react'
import { places } from '../data/places'
import { tours } from '../data/tours'

const quickLinks = [
  { to: '/orte', icon: MapPin, label: 'Sehenswürdigkeiten', gradient: 'from-amber-500 to-orange-500' },
  { to: '/touren', icon: Route, label: 'Touren planen', gradient: 'from-emerald-500 to-green-600' },
  { to: '/karte', icon: Landmark, label: 'Karte öffnen', gradient: 'from-blue-500 to-indigo-500' },
  { to: '/info', icon: Info, label: 'Praktische Infos', gradient: 'from-violet-500 to-purple-600' },
]

export default function Home() {
  const fattoria = places.find(p => p.id === 'fattoria-lavialla')
  const featuredTours = tours.slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-tuscan text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative px-5 pt-10 pb-16 safe-area-top">
          <div className="flex items-center gap-2 mb-3">
            <Sun className="text-amber-200" size={22} />
            <span className="text-white/80 text-sm font-medium">Willkommen in der Toskana</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            Arezzo Guide
          </h1>
          <p className="text-white/90 text-lg font-light">
            Dein Reisebegleiter für die Region Arezzo & Fattoria Lavialla
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-5 -mt-8 relative z-10">
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ to, icon: Icon, label, gradient }) => (
            <Link
              key={to}
              to={to}
              className="bg-white rounded-2xl p-4 shadow-tuscan card-hover flex items-center gap-3"
            >
              <div className={`bg-gradient-to-br ${gradient} p-2.5 rounded-xl shadow-lg`}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="font-semibold text-[#4a3728] text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Fattoria Lavialla Section */}
      {fattoria && (
        <section className="px-5 mt-8">
          <div className="bg-white rounded-3xl shadow-tuscan-lg overflow-hidden card-hover">
            <div className="gradient-wine p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center justify-between relative">
                <div>
                  <p className="text-white/70 text-sm font-medium">Deine Unterkunft</p>
                  <h2 className="text-2xl font-bold text-white mt-1">{fattoria.name}</h2>
                </div>
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Grape size={28} className="text-white" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[#4a3728]/70 mb-4 leading-relaxed">{fattoria.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="tag tag-terracotta">
                  Bio-Bauernhof
                </span>
                <span className="tag tag-gold">
                  Weingut
                </span>
                <span className="tag tag-olive">
                  Restaurant
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/orte/${fattoria.id}`}
                  className="flex-1 gradient-tuscan text-white py-3 px-5 rounded-xl text-center font-semibold shadow-lg btn-press"
                >
                  Details ansehen
                </Link>
                {fattoria.phone && (
                  <a
                    href={`tel:${fattoria.phone}`}
                    className="bg-[#4a3728]/5 p-3 rounded-xl btn-press"
                  >
                    <Phone size={22} className="text-[#4a3728]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Webcam Section */}
      {fattoria?.webcam && (
        <section className="px-5 mt-6">
          <a
            href={fattoria.webcam}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-tuscan card-hover"
          >
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4a3728] to-[#2d2118] rounded-xl flex items-center justify-center">
                <Video size={24} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[#4a3728]">Live Webcam</h3>
              <p className="text-sm text-[#4a3728]/60">Piazzetta & Hofladen</p>
            </div>
            <ExternalLink size={18} className="text-[#c75b39] flex-shrink-0" />
          </a>
        </section>
      )}

      {/* Featured Tours */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#4a3728]">Beliebte Touren</h2>
          <Link to="/touren" className="text-[#c75b39] text-sm font-semibold flex items-center gap-1">
            Alle <ChevronRight size={16} />
          </Link>
        </div>
        <div className="space-y-3">
          {featuredTours.map((tour, index) => (
            <Link
              key={tour.id}
              to={`/touren/${tour.id}`}
              className="block bg-white rounded-2xl p-4 shadow-tuscan card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="gradient-olive p-3 rounded-xl shadow-md">
                  <Route size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#4a3728]">{tour.name}</h3>
                  <p className="text-sm text-[#4a3728]/60 mt-0.5">{tour.subtitle}</p>
                  <div className="flex gap-3 mt-2 text-xs text-[#4a3728]/40 font-medium">
                    <span>{tour.duration}</span>
                    <span>•</span>
                    <span>{tour.difficulty}</span>
                  </div>
                </div>
                <ChevronRight className="text-[#4a3728]/20 mt-1" size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-5 mt-8 mb-6">
        <h2 className="text-xl font-bold text-[#4a3728] mb-4">Highlights der Region</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '🏛️', label: 'Arezzo Altstadt' },
            { emoji: '🍷', label: 'Chianti Weine' },
            { emoji: '🏔️', label: 'Cortona' },
            { emoji: '🎨', label: 'Piero Fresken' },
            { emoji: '🌳', label: 'Casentino' },
            { emoji: '🧀', label: 'Pecorino' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-tuscan text-center card-hover"
            >
              <span className="text-3xl">{item.emoji}</span>
              <p className="text-xs text-[#4a3728]/70 mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offline Notice */}
      <div className="px-5 mb-8">
        <div className="bg-[#5a7247]/10 border border-[#5a7247]/20 rounded-2xl p-4">
          <p className="text-[#5a7247] text-sm">
            <strong>Offline verfügbar:</strong> Diese App funktioniert auch ohne Internet.
            Karten werden beim ersten Laden gespeichert.
          </p>
        </div>
      </div>
    </div>
  )
}
