import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, CloudSun, Compass, Download, Map, Mountain, Route, ShieldCheck, TreePine } from 'lucide-react'
import { tours } from '../data/tours'

const heroImage = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82'

const quickLinks = [
  { to: '/touren', icon: Route, label: 'Tour finden', sub: 'nach Kondition und Wetter' },
  { to: '/karte', icon: Map, label: 'Karte', sub: 'Startpunkte und Orte' },
  { to: '/info', icon: ShieldCheck, label: 'Sicher gehen', sub: 'Checklisten und Notfall' },
]

const dayPlans = [
  { title: 'Erster Tag', route: 'Poppi & Arno-Runde', text: 'Einlaufen, Burg anschauen, Fusse testen.' },
  { title: 'Bester Waldtag', route: 'Camaldoli - Poggio Scali', text: 'Der Casentino-Klassiker fur Schatten und Stille.' },
  { title: 'Grosser Tag', route: 'Monte Falterona & Lago degli Idoli', text: 'Nur bei stabilem Wetter und guter Sicht.' },
]

export default function Home() {
  const featuredTours = tours.slice(0, 3)

  return (
    <div className="min-h-screen bg-[#f4f1e8] text-[#20312a]">
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <img
          src={heroImage}
          alt="Waldweg in den Bergen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-[#20312a]/90" />
        <div className="relative flex min-h-[78vh] flex-col justify-end px-5 pb-24 pt-14 safe-area-top">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-medium backdrop-blur">
            <TreePine size={16} />
            Foreste Casentinesi, La Verna, Camaldoli
          </div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-normal sm:text-6xl">
            Casentino Wander-App
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Kuratierte Touren, Startpunkte, Sicherheitschecks und schnelle Links zu offiziellen Karten, damit du im Casentino gut vorbereitet losgehst.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/touren" className="inline-flex items-center gap-2 rounded-lg bg-[#f7c948] px-5 py-3 font-bold text-[#20312a] shadow-lg">
              Tour auswahlen <ArrowRight size={18} />
            </Link>
            <Link to="/karte" className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 font-semibold text-white backdrop-blur">
              Karte ansehen <Map size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="-mt-16 px-5 relative z-10">
        <div className="grid gap-3 sm:grid-cols-3">
          {quickLinks.map(({ to, icon: Icon, label, sub }) => (
            <Link key={to} to={to} className="rounded-lg bg-white p-4 shadow-tuscan card-hover">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-[#245447] text-white">
                <Icon size={22} />
              </div>
              <h2 className="font-bold">{label}</h2>
              <p className="mt-1 text-sm text-[#20312a]/65">{sub}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7b3e]">Schnellstart</p>
            <h2 className="text-2xl font-bold">Heute gut losgehen</h2>
          </div>
          <CloudSun className="text-[#d47b35]" size={28} />
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {dayPlans.map((plan) => (
            <div key={plan.title} className="rounded-lg border border-[#d9d3c3] bg-white/80 p-4">
              <p className="text-sm font-semibold text-[#6b7b3e]">{plan.title}</p>
              <h3 className="mt-1 font-bold">{plan.route}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#20312a]/70">{plan.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Empfohlene Touren</h2>
          <Link to="/touren" className="inline-flex items-center gap-1 font-semibold text-[#245447]">
            Alle <ArrowRight size={16} />
          </Link>
        </div>
        <div className="space-y-3">
          {featuredTours.map((tour) => (
            <Link key={tour.id} to={`/touren/${tour.id}`} className="block rounded-lg bg-white p-4 shadow-tuscan card-hover">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#245447] text-white">
                  <Mountain size={23} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold">{tour.name}</h3>
                    <span className="rounded bg-[#edf2df] px-2 py-1 text-xs font-semibold text-[#50622f]">{tour.difficulty}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#20312a]/65">{tour.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-[#20312a]/60">
                    <span>{tour.distance}</span>
                    <span>{tour.elevation}</span>
                    <span>{tour.duration}</span>
                    <span>{tour.routeType}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="rounded-lg bg-[#20312a] p-5 text-white">
          <div className="flex gap-3">
            <AlertTriangle className="mt-1 shrink-0 text-[#f7c948]" />
            <div>
              <h2 className="font-bold">Wichtig vor jeder Tour</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Diese App plant und sortiert. Fur Wegzustand, Sperrungen und Detailnavigation immer die offiziellen Parkquellen, Wetterbericht und eine Offline-Karte prufen.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://www.parcoforestecasentinesi.it/it/multimedia/app-parco/pnfc-trekking-map" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#20312a]">
                  <Download size={16} /> PNFC Map
                </a>
                <Link to="/info" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white">
                  <Compass size={16} /> Checkliste
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
