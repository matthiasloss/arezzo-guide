import { useState } from 'react'
import { Phone, AlertTriangle, Train, Car, MessageCircle, Sun, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { emergencyNumbers, hospitals, pharmacies, transport, usefulPhrases, foodVocabulary, localCustoms, weather, events } from '../data/info'

const sections = [
  { id: 'emergency', label: 'Notfälle', icon: AlertTriangle, color: 'red' },
  { id: 'transport', label: 'Transport', icon: Train, color: 'blue' },
  { id: 'phrases', label: 'Italienisch', icon: MessageCircle, color: 'green' },
  { id: 'customs', label: 'Tipps & Bräuche', icon: Sun, color: 'amber' },
  { id: 'events', label: 'Events', icon: Calendar, color: 'purple' },
]

export default function Info() {
  const [activeSection, setActiveSection] = useState('emergency')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpand = (id) => {
    setExpandedItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Praktische Infos</h1>

          {/* Section Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {sections.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeSection === id
                    ? `bg-${color}-600 text-white`
                    : 'bg-gray-100 text-gray-600'
                }`}
                style={{
                  backgroundColor: activeSection === id ? getColor(color) : undefined,
                  color: activeSection === id ? 'white' : undefined,
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Emergency Section */}
        {activeSection === 'emergency' && (
          <div className="space-y-4">
            {/* Emergency Numbers */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <AlertTriangle size={20} />
                Notrufnummern
              </h3>
              <div className="space-y-3">
                {emergencyNumbers.map((item, i) => (
                  <a
                    key={i}
                    href={`tel:${item.number}`}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-red-600">{item.number}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hospitals */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Krankenhäuser</h3>
              {hospitals.map((h, i) => (
                <div key={i} className="mb-3 pb-3 border-b last:border-0 last:mb-0 last:pb-0">
                  <p className="font-medium text-gray-800">{h.name}</p>
                  <p className="text-sm text-gray-500">{h.address}</p>
                  {h.hours && <p className="text-sm text-gray-500">{h.hours}</p>}
                  <a href={`tel:${h.phone}`} className="text-purple-600 text-sm font-medium">
                    {h.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Pharmacies */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Apotheken</h3>
              {pharmacies.map((p, i) => (
                <div key={i} className="mb-3 pb-3 border-b last:border-0 last:mb-0 last:pb-0">
                  <p className="font-medium text-gray-800">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.address}</p>
                  <p className="text-sm text-gray-500">{p.hours}</p>
                  {p.note && <p className="text-sm text-green-600">{p.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transport Section */}
        {activeSection === 'transport' && (
          <div className="space-y-4">
            {/* Train */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Train size={20} className="text-blue-600" />
                Zug
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {transport.train.station} - {transport.train.address}
              </p>
              <div className="space-y-2 mb-4">
                {transport.train.connections.map((c, i) => (
                  <div key={i} className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                    <span>{c.destination}</span>
                    <span className="text-gray-500">{c.duration}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Tipps:</p>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  {transport.train.tips.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Bus</h3>
              <p className="text-sm text-gray-600">{transport.bus.company}</p>
              <p className="text-sm text-gray-600">{transport.bus.station}</p>
              <a href={transport.bus.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm flex items-center gap-1 mt-2">
                Website <ExternalLink size={12} />
              </a>
            </div>

            {/* Car */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Car size={20} className="text-gray-600" />
                Auto
              </h3>

              <h4 className="font-medium text-gray-700 mt-4 mb-2">Parken</h4>
              <div className="space-y-2">
                {transport.car.parking.map((p, i) => (
                  <div key={i} className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">{p.name}</span>
                      <span className="text-gray-500 ml-2">{p.type}</span>
                    </div>
                    <span className="text-green-600">{p.price}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 p-3 rounded-lg mt-4">
                <p className="text-sm text-amber-800 font-medium">Wichtige Hinweise:</p>
                <ul className="text-sm text-amber-700 mt-1 space-y-1">
                  {transport.car.tips.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Phrases Section */}
        {activeSection === 'phrases' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Wichtige Ausdrücke</h3>
              <div className="space-y-2">
                {usefulPhrases.map((p, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{p.german}</span>
                      <span className="text-purple-600 font-medium">{p.italian}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 italic">{p.pronunciation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Im Restaurant</h3>
              <div className="space-y-2">
                {foodVocabulary.map((p, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">{p.german}</span>
                      <span className="text-purple-600 font-medium">{p.italian}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 italic">{p.pronunciation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Customs Section */}
        {activeSection === 'customs' && (
          <div className="space-y-4">
            {/* Weather */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Sun size={20} className="text-amber-500" />
                Wetter & beste Reisezeit
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(weather).map(([season, info]) => (
                  <div key={season} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-800 capitalize">
                      {season === 'spring' ? 'Frühling' :
                       season === 'summer' ? 'Sommer' :
                       season === 'autumn' ? 'Herbst' : 'Winter'}
                    </p>
                    <p className="text-sm text-gray-500">{info.months}</p>
                    <p className="text-lg font-bold text-purple-600">{info.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Customs */}
            {localCustoms.map((section, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleExpand(`custom-${i}`)}
                  className="w-full p-4 flex items-center justify-between"
                >
                  <h3 className="font-bold text-gray-800">{section.title}</h3>
                  {expandedItems.has(`custom-${i}`) ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                {expandedItems.has(`custom-${i}`) && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {section.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Events Section */}
        {activeSection === 'events' && (
          <div className="space-y-3">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Calendar size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{event.name}</h3>
                    <p className="text-sm text-purple-600">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function getColor(colorName) {
  const colors = {
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    amber: '#d97706',
    purple: '#9333ea',
  }
  return colors[colorName] || '#6b7280'
}
