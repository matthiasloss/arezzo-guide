import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, MapPin, Navigation, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react'
import { tours } from '../data/tours'
import { places } from '../data/places'

export default function TourDetail() {
  const { id } = useParams()
  const tour = tours.find(t => t.id === id)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Tour nicht gefunden</p>
          <Link to="/touren" className="text-purple-600 mt-2 block">
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-purple-50 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white">
        <div className="px-4 py-4">
          <Link to="/touren" className="inline-flex items-center gap-2 text-green-200 mb-4">
            <ArrowLeft size={20} />
            <span>Zurück</span>
          </Link>

          <h1 className="text-2xl font-bold">{tour.name}</h1>
          <p className="text-green-100 mt-1">{tour.subtitle}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
              <Clock size={14} />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
              <MapPin size={14} />
              {tour.distance}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {tour.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-2">Über diese Tour</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {tour.longDescription || tour.description}
          </p>
        </div>
      </div>

      {/* Best Time */}
      {tour.bestTime && (
        <div className="px-4 mt-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800">
              <strong>Beste Zeit:</strong> {tour.bestTime}
            </p>
          </div>
        </div>
      )}

      {/* Stops */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Stationen ({tour.stops.length})
        </h2>

        <div className="space-y-3">
          {tour.stops.map((stop, index) => {
            const linkedPlace = stop.placeId ? places.find(p => p.id === stop.placeId) : null

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Number indicator */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < tour.stops.length - 1 && (
                        <div className="w-0.5 h-full bg-green-200 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h3 className="font-semibold text-gray-800">
                        {stop.name}
                      </h3>
                      {stop.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {stop.description}
                        </p>
                      )}
                      {stop.note && (
                        <p className="text-sm text-purple-600 mt-1">
                          {stop.note}
                        </p>
                      )}
                      {stop.duration && (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 mt-2">
                          <Clock size={12} />
                          {stop.duration}
                        </span>
                      )}

                      {/* Link to place if exists */}
                      {linkedPlace && (
                        <Link
                          to={`/orte/${linkedPlace.id}`}
                          className="mt-3 flex items-center justify-between p-2 bg-purple-50 rounded-lg"
                        >
                          <span className="text-sm font-medium text-purple-700">
                            Details ansehen
                          </span>
                          <ChevronRight size={16} className="text-purple-400" />
                        </Link>
                      )}

                      {/* Navigation button for coordinates */}
                      {stop.coordinates && (
                        <button
                          onClick={() => {
                            const [lat, lng] = stop.coordinates
                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
                          }}
                          className="mt-3 flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Navigation size={14} />
                          <span>Navigation starten</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tips */}
      {tour.tips && tour.tips.length > 0 && (
        <div className="px-4 mt-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={20} className="text-amber-600" />
              <h3 className="font-semibold text-amber-800">Tipps für diese Tour</h3>
            </div>
            <ul className="space-y-2">
              {tour.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-amber-900">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Start Tour Button */}
      {tour.stops[0]?.coordinates && (
        <div className="px-4 mt-6">
          <button
            onClick={() => {
              const [lat, lng] = tour.stops[0].coordinates
              window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
            }}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Navigation size={20} />
            Tour starten - zum Startpunkt navigieren
          </button>
        </div>
      )}
    </div>
  )
}
