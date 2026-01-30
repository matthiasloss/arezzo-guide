import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, ChevronRight, Navigation, Lightbulb, Video, ExternalLink } from 'lucide-react'
import { places, categories } from '../data/places'

export default function PlaceDetail() {
  const { id } = useParams()
  const place = places.find(p => p.id === id)

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--tuscan-cream)' }}>
        <div className="text-center">
          <p className="text-[#4a3728]/60">Ort nicht gefunden</p>
          <Link to="/orte" className="text-[#c75b39] mt-2 block font-medium">
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find(c => c.id === place.category)

  const openInMaps = () => {
    if (place.coordinates) {
      const [lat, lng] = place.coordinates
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
    }
  }

  return (
    <div className="min-h-screen pb-8" style={{ background: 'var(--tuscan-cream)' }}>
      {/* Header */}
      <div className="gradient-tuscan text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="px-5 py-5 relative">
          <Link to="/orte" className="inline-flex items-center gap-2 text-white/70 mb-4 btn-press">
            <ArrowLeft size={20} />
            <span>Zurück</span>
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">{category?.name}</p>
              <h1 className="text-2xl font-bold mt-1">{place.name}</h1>
              {place.rating && (
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < place.rating ? 'text-amber-300 fill-amber-300' : 'text-white/30'}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="bg-white/20 p-3 rounded-2xl">
              <span className="text-3xl">{getCategoryEmoji(place.category)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 -mt-5 relative z-10">
        <div className="bg-white rounded-2xl shadow-tuscan-lg p-4 flex gap-3">
          {place.coordinates && (
            <button
              onClick={openInMaps}
              className="flex-1 gradient-tuscan text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 btn-press shadow-lg"
            >
              <Navigation size={18} />
              Route
            </button>
          )}
          {place.phone && (
            <a
              href={`tel:${place.phone}`}
              className="flex-1 bg-[#4a3728]/5 text-[#4a3728] py-3 rounded-xl font-semibold flex items-center justify-center gap-2 btn-press"
            >
              <Phone size={18} />
              Anrufen
            </a>
          )}
          {place.website && (
            <a
              href={place.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#4a3728]/5 text-[#4a3728] py-3 rounded-xl font-semibold flex items-center justify-center gap-2 btn-press"
            >
              <Globe size={18} />
              Website
            </a>
          )}
        </div>
      </div>

      {/* Webcam Link (for Fattoria) */}
      {place.webcam && (
        <div className="px-5 mt-5">
          <a
            href={place.webcam}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-tuscan overflow-hidden card-hover"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-[#4a3728] to-[#2d2118] aspect-[21/9] flex items-center justify-center">
                <div className="text-center">
                  <Video size={28} className="text-white mx-auto mb-2" />
                  <p className="text-white/90 font-medium">Live Webcam ansehen</p>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>
              <div className="absolute top-3 right-3">
                <ExternalLink size={18} className="text-white/70" />
              </div>
            </div>
          </a>
        </div>
      )}

      {/* Description */}
      <div className="px-5 mt-5">
        <div className="bg-white rounded-2xl p-5 shadow-tuscan">
          <h2 className="font-semibold text-[#4a3728] mb-3">Beschreibung</h2>
          <p className="text-[#4a3728]/70 whitespace-pre-line leading-relaxed">
            {place.longDescription || place.description}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-tuscan space-y-4">
          {place.address && (
            <div className="flex items-start gap-4">
              <div className="bg-[#c75b39]/10 p-2 rounded-xl">
                <MapPin size={18} className="text-[#c75b39]" />
              </div>
              <div>
                <p className="text-sm text-[#4a3728]/50 font-medium">Adresse</p>
                <p className="text-[#4a3728]">{place.address}</p>
              </div>
            </div>
          )}

          {place.openingHours && (
            <div className="flex items-start gap-4">
              <div className="bg-[#5a7247]/10 p-2 rounded-xl">
                <Clock size={18} className="text-[#5a7247]" />
              </div>
              <div>
                <p className="text-sm text-[#4a3728]/50 font-medium">Öffnungszeiten</p>
                <p className="text-[#4a3728]">{place.openingHours}</p>
              </div>
            </div>
          )}

          {place.price && (
            <div className="flex items-start gap-4">
              <div className="bg-[#d4a853]/20 p-2 rounded-xl">
                <span className="text-[#9a7a2e] font-bold text-sm">€</span>
              </div>
              <div>
                <p className="text-sm text-[#4a3728]/50 font-medium">Eintritt</p>
                <p className="text-[#4a3728]">{place.price}</p>
              </div>
            </div>
          )}

          {place.duration && (
            <div className="flex items-start gap-4">
              <div className="bg-[#5a7247]/10 p-2 rounded-xl">
                <Clock size={18} className="text-[#5a7247]" />
              </div>
              <div>
                <p className="text-sm text-[#4a3728]/50 font-medium">Empfohlene Dauer</p>
                <p className="text-[#4a3728]">{place.duration}</p>
              </div>
            </div>
          )}

          {place.distance && (
            <div className="flex items-start gap-4">
              <div className="bg-[#c75b39]/10 p-2 rounded-xl">
                <Navigation size={18} className="text-[#c75b39]" />
              </div>
              <div>
                <p className="text-sm text-[#4a3728]/50 font-medium">Entfernung</p>
                <p className="text-[#4a3728]">{place.distance}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      {place.tips && place.tips.length > 0 && (
        <div className="px-5 mt-4">
          <div className="bg-[#d4a853]/15 border border-[#d4a853]/30 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={20} className="text-[#9a7a2e]" />
              <h3 className="font-semibold text-[#4a3728]">Tipps</h3>
            </div>
            <ul className="space-y-2">
              {place.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-[#4a3728]/80">
                  <span className="text-[#d4a853] mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Show on Map Link */}
      {place.coordinates && (
        <div className="px-5 mt-4">
          <Link
            to="/karte"
            className="block bg-white rounded-2xl p-4 shadow-tuscan card-hover"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="gradient-olive p-2.5 rounded-xl">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="font-semibold text-[#4a3728]">Auf Karte anzeigen</span>
              </div>
              <ChevronRight className="text-[#4a3728]/30" size={20} />
            </div>
          </Link>
        </div>
      )}
    </div>
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
