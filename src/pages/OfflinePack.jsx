import { Link } from 'react-router-dom'
import { AlertTriangle, Download, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { tours } from '../data/tours'
import { places } from '../data/places'

const laViallaTours = tours.filter((tour) => tour.category === 'lavialla')
const laVialla = places.find((place) => place.id === 'fattoria-la-vialla')

export default function OfflinePack() {
  return (
    <div className="min-h-screen bg-[#f4f1e8] px-4 py-5 pb-28 text-[#20312a] safe-area-top">
      <header className="rounded-lg bg-[#20312a] p-5 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f7c948]">Offline-Pack</p>
        <h1 className="mt-1 text-3xl font-bold">La Vialla kompakt</h1>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Diese Seite ist bewusst textlastig und PWA-freundlich: einmal online öffnen, dann hast du die wichtigsten Daten auch bei schwachem Empfang griffbereit.
        </p>
      </header>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <MapPin className="text-[#9b4a2f]" />
          <h2 className="font-bold">Basis</h2>
        </div>
        <p className="font-bold">{laVialla?.name}</p>
        <p className="mt-1 text-sm text-[#20312a]/70">{laVialla?.address}</p>
        <p className="mt-2 text-sm font-semibold">GPS: 43.5281, 11.7794</p>
        <a href="https://www.google.com/maps/search/?api=1&query=43.5281,11.7794" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#9b4a2f] px-3 py-2 text-sm font-bold text-white">
          Navigation öffnen
        </a>
      </section>

      <section className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="mb-3 flex items-center gap-2 text-red-900">
          <AlertTriangle />
          <h2 className="font-bold">Notfall</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a href="tel:112" className="rounded-lg bg-white p-3">
            <p className="text-xs text-red-900/60">Europa</p>
            <p className="text-2xl font-bold text-red-700">112</p>
          </a>
          <a href="tel:118" className="rounded-lg bg-white p-3">
            <p className="text-xs text-red-900/60">Rettung IT</p>
            <p className="text-2xl font-bold text-red-700">118</p>
          </a>
        </div>
        <p className="mt-3 text-sm text-red-950/75">Bei Notruf Standort/GPS nennen, warm halten, nicht allein weitergehen.</p>
      </section>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Download className="text-[#245447]" />
          <h2 className="font-bold">Nahe Touren</h2>
        </div>
        <div className="space-y-3">
          {laViallaTours.map((tour) => (
            <Link key={tour.id} to={`/touren/${tour.id}`} className="block rounded-lg bg-[#f4f1e8] p-3">
              <p className="font-bold">{tour.name}</p>
              <p className="mt-1 text-sm text-[#20312a]/65">{tour.distance}, {tour.elevation}, {tour.duration}</p>
              <p className="mt-1 text-sm text-[#20312a]/65">{tour.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck className="text-[#245447]" />
          <h2 className="font-bold">Mini-Check</h2>
        </div>
        <ul className="space-y-2 text-sm text-[#20312a]/75">
          <li>Wasser auffüllen, besonders im Sommer.</li>
          <li>Privatwege und Hofbereiche respektieren.</li>
          <li>Bei Dämmerung Licht/reflektierende Kleidung.</li>
          <li>Für Bergtouren weiterhin offizielle Karten und Wetter prüfen.</li>
        </ul>
      </section>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Phone className="text-[#245447]" />
          <h2 className="font-bold">Sätze</h2>
        </div>
        <Phrase de="Wir sind bei La Vialla." it="Siamo alla Fattoria La Vialla." />
        <Phrase de="Ich brauche Hilfe." it="Ho bisogno di aiuto." />
        <Phrase de="Wo ist Wasser?" it="Dove posso trovare acqua?" />
      </section>
    </div>
  )
}

function Phrase({ de, it }) {
  return (
    <div className="mb-2 rounded-lg bg-[#f4f1e8] p-3 last:mb-0">
      <p className="text-sm text-[#20312a]/55">{de}</p>
      <p className="font-bold text-[#245447]">{it}</p>
    </div>
  )
}
