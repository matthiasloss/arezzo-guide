import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, ChevronRight, Navigation, Lightbulb } from 'lucide-react'
import { places, categories } from '../data/places'

export default function PlaceDetail() {
  const { id } = useParams()
  const place = places.find(p => p.id === id)

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Ort nicht gefunden</p>
          <Link to="/orte" className="text-purple-600 mt-2 block">
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
    <div className="min-h-screen bg-purple-50 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="px-4 py-4">
          <Link to="/orte" className="inline-flex items-center gap-2 text-purple-200 mb-4">
            <ArrowLeft size={20} />
            <span>Zurück</span>
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-purple-200 text-sm">{category?.name}</p>
              <h1 className="text-2xl font-bold mt-1">{place.name}</h1>
              {place.rating && (
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < place.rating ? 'text-amber-400 fill-amber-400' : 'text-purple-400'}
                    />
                  ))}
                </div>
              )}
            </div>
            <span className="text-4xl">{getCategoryEmoji(place.category)}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-4 flex gap-3">
          {place.coordinates && (
            <button
              onClick={openInMaps}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Navigation size={18} />
              Route
            </button>
          )}
          {place.phone && (
            <a
              href={`tel:${place.phone}`}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
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
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Globe size={18} />
              Website
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-2">Beschreibung</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {place.longDescription || place.description}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
          {place.address && (
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="text-gray-800">{place.address}</p>
              </div>
            </div>
          )}

          {place.openingHours && (
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Öffnungszeiten</p>
                <p className="text-gray-800">{place.openingHours}</p>
              </div>
            </div>
          )}

          {place.price && (
            <div className="flex items-start gap-3">
              <span className="text-gray-400 flex-shrink-0">€</span>
              <div>
                <p className="text-sm text-gray-500">Eintritt</p>
                <p className="text-gray-800">{place.price}</p>
              </div>
            </div>
          )}

          {place.duration && (
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Empfohlene Dauer</p>
                <p className="text-gray-800">{place.duration}</p>
              </div>
            </div>
          )}

          {place.distance && (
            <div className="flex items-start gap-3">
              <Navigation size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Entfernung</p>
                <p className="text-gray-800">{place.distance}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      {place.tips && place.tips.length > 0 && (
        <div className="px-4 mt-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={20} className="text-amber-600" />
              <h3 className="font-semibold text-amber-800">Tipps</h3>
            </div>
            <ul className="space-y-2">
              {place.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-amber-900">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Show on Map Link */}
      {place.coordinates && (
        <div className="px-4 mt-4">
          <Link
            to="/karte"
            className="block bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <span className="font-medium text-gray-800">Auf Karte anzeigen</span>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
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
