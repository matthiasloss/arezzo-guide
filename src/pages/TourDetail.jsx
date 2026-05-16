import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Clock, Compass, Download, Droplets, ExternalLink, Footprints, MapPin, Mountain, Navigation, PawPrint, ShieldAlert, SunMedium, TreePine } from 'lucide-react'
import WeatherHikingCard from '../components/WeatherHikingCard'
import { tours } from '../data/tours'
import { downloadGpx } from '../utils/routes'

export default function TourDetail() {
  const { id } = useParams()
  const tour = tours.find((item) => item.id === id)

  if (!tour) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f1e8] px-4 text-center">
        <div>
          <p className="font-semibold text-[#20312a]">Tour nicht gefunden</p>
          <Link to="/touren" className="mt-3 inline-flex text-[#245447]">Zur Tourenubersicht</Link>
        </div>
      </div>
    )
  }

  const startCoords = tour.startCoordinates || tour.stops.find((stop) => stop.coordinates)?.coordinates

  return (
    <div className="min-h-screen bg-[#f4f1e8] pb-8 text-[#20312a]">
      <header className="bg-[#20312a] px-4 pb-7 pt-5 text-white safe-area-top">
        <Link to="/touren" className="mb-5 inline-flex items-center gap-2 text-white/75">
          <ArrowLeft size={20} />
          Zuruck
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#f7c948]">{tour.start}</p>
        <h1 className="mt-1 text-3xl font-bold leading-tight">{tour.name}</h1>
        <p className="mt-2 text-white/80">{tour.subtitle}</p>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <HeroMeta icon={Clock} label={tour.duration} />
          <HeroMeta icon={Footprints} label={tour.distance} />
          <HeroMeta icon={Mountain} label={tour.elevation} />
          <HeroMeta icon={Compass} label={tour.difficulty} />
        </div>
      </header>

      <main className="px-4">
        <section className="-mt-4 rounded-lg bg-white p-4 shadow-tuscan">
          <h2 className="font-bold">Warum diese Tour?</h2>
          <p className="mt-2 whitespace-pre-line leading-relaxed text-[#20312a]/75">{tour.longDescription}</p>
        </section>

        <section className="mt-4 grid gap-3 sm:grid-cols-2">
          <InfoTile icon={SunMedium} title="Beste Zeit" text={tour.season} />
          <InfoTile icon={Droplets} title="Wasser" text={tour.water} />
          <InfoTile icon={PawPrint} title="Hund" text={tour.dog} />
          <InfoTile icon={TreePine} title="Schatten" text={tour.shade} />
        </section>

        <WeatherHikingCard tour={tour} />

        <section className="mt-5">
          <h2 className="mb-3 text-lg font-bold">Stationen</h2>
          <div className="space-y-3">
            {tour.stops.map((stop, index) => (
              <div key={`${stop.name}-${index}`} className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#245447] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">{stop.name}</h3>
                    {stop.description && <p className="mt-1 text-sm leading-relaxed text-[#20312a]/65">{stop.description}</p>}
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#20312a]/55">
                      {stop.duration && <span className="inline-flex items-center gap-1"><Clock size={13} />{stop.duration}</span>}
                      {stop.coordinates && (
                        <button
                          onClick={() => openNavigation(stop.coordinates)}
                          className="inline-flex items-center gap-1 text-[#245447]"
                        >
                          <Navigation size={13} /> Navigation
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="text-amber-700" />
            <h2 className="font-bold text-amber-950">Vor dem Start prufen</h2>
          </div>
          <ul className="space-y-2">
            {tour.tips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm leading-relaxed text-amber-950/80">
                <CheckCircle className="mt-0.5 shrink-0 text-amber-700" size={16} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {tour.links?.length > 0 && (
          <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
            <h2 className="font-bold">Offizielle Links</h2>
            <div className="mt-3 space-y-2">
              {tour.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg bg-[#f4f1e8] px-3 py-3 font-semibold text-[#245447]">
                  {link.label}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </section>
        )}

        <button
          onClick={() => downloadGpx(tour)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-4 font-bold text-[#245447] shadow-sm"
        >
          <Download size={20} />
          GPX-Route herunterladen
        </button>

        {startCoords && (
          <button
            onClick={() => openNavigation(startCoords)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#245447] px-4 py-4 font-bold text-white shadow-lg"
          >
            <Navigation size={20} />
            Zum Startpunkt navigieren
          </button>
        )}
      </main>
    </div>
  )
}

function HeroMeta({ icon: Icon, label }) {
  return (
    <div className="rounded-lg bg-white/10 p-3 backdrop-blur">
      <Icon className="mb-2 text-[#f7c948]" size={18} />
      <p className="text-sm font-bold">{label}</p>
    </div>
  )
}

function InfoTile({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <Icon className="mb-3 text-[#245447]" />
      <p className="text-sm font-semibold text-[#20312a]/55">{title}</p>
      <p className="mt-1 font-bold">{text}</p>
    </div>
  )
}

function openNavigation([lat, lng]) {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
}
