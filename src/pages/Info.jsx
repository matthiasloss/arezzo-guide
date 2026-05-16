import { AlertTriangle, Backpack, CloudSun, Download, ExternalLink, Hospital, Map, Phone, ShieldCheck } from 'lucide-react'

const officialLinks = [
  { label: 'PNFC Trekking Map offline', url: 'https://www.parcoforestecasentinesi.it/it/multimedia/app-parco/pnfc-trekking-map' },
  { label: 'Offizielle Park-Wanderungen', url: 'https://www.parks.it/parco.nazionale.for.casentinesi/iti.php' },
  { label: 'Wandern im Park', url: 'https://www.parcoforestecasentinesi.it/it/vivi-il-parco/sentieri-ed-escursioni/piedi' },
  { label: 'Offizielle Wanderkarte 1:25.000', url: 'https://www.parks.it/parco.nazionale.for.casentinesi/gui_dettaglio.php?id_pubb=7217' },
]

const checklist = [
  'Offline-Karte geladen und Akku/Powerbank dabei',
  'Papierkarte oder zweites Navigationsmittel fur lange Touren',
  '2 Liter Wasser pro Person bei warmem Wetter',
  'Regenjacke, warme Schicht und Sonnenschutz',
  'Startzeit so planen, dass du vor Dunkelheit sicher zuruck bist',
  'Jemandem Route und geplante Ruckkehrzeit sagen',
]

const seasons = [
  { title: 'Fruhling', text: 'Wasserfalle und frisches Grun, aber matschige Wege moglich.' },
  { title: 'Sommer', text: 'Früh starten, Waldtouren bevorzugen, Gewitter am Nachmittag beachten.' },
  { title: 'Herbst', text: 'Vielleicht die schonste Zeit: Laubfarben, kuhlere Luft, kurze Tage.' },
  { title: 'Winter', text: 'Nur einfache Runden ohne Eisrisiko, Schneelage und Tageslicht beachten.' },
]

export default function Info() {
  return (
    <div className="min-h-screen bg-[#f4f1e8] px-4 py-5 pb-28 text-[#20312a] safe-area-top">
      <header className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#6b7b3e]">Sicherheit & Planung</p>
        <h1 className="mt-1 text-3xl font-bold">Gut vorbereitet wandern</h1>
        <p className="mt-2 leading-relaxed text-[#20312a]/70">
          Die Foreste Casentinesi sind gut erschlossen, aber im oberen Parkbereich schnell einsam. Diese Seite ist deine kurze Vor-dem-Losgehen-Kontrolle.
        </p>
      </header>

      <section className="rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-center gap-2 text-red-900">
          <Hospital />
          <h2 className="font-bold">Notfall</h2>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <a href="tel:112" className="rounded-lg bg-white p-4">
            <p className="text-sm text-red-900/65">Europaischer Notruf</p>
            <p className="text-3xl font-bold text-red-700">112</p>
          </a>
          <a href="tel:118" className="rounded-lg bg-white p-4">
            <p className="text-sm text-red-900/65">Rettungsdienst Italien</p>
            <p className="text-3xl font-bold text-red-700">118</p>
          </a>
        </div>
        <p className="mt-3 flex gap-2 text-sm leading-relaxed text-red-950/75">
          <AlertTriangle className="mt-0.5 shrink-0" size={16} />
          In abgelegenen Bereichen GPS-Position nennen, warm halten und nicht weiterlaufen, wenn Orientierung oder Verletzung kritisch ist.
        </p>
      </section>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Backpack className="text-[#245447]" />
          <h2 className="font-bold">Pack- und Startcheck</h2>
        </div>
        <ul className="space-y-2">
          {checklist.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#20312a]/75">
              <ShieldCheck className="mt-0.5 shrink-0 text-[#245447]" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 grid gap-3 sm:grid-cols-2">
        {seasons.map((season) => (
          <div key={season.title} className="rounded-lg bg-white p-4 shadow-sm">
            <CloudSun className="mb-3 text-[#d47b35]" />
            <h3 className="font-bold">{season.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#20312a]/70">{season.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-5 rounded-lg bg-[#20312a] p-4 text-white">
        <div className="mb-3 flex items-center gap-2">
          <Map className="text-[#f7c948]" />
          <h2 className="font-bold">Offizielle Quellen</h2>
        </div>
        <div className="space-y-2">
          {officialLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-3 font-semibold">
              <span className="inline-flex items-center gap-2">
                {link.label.includes('offline') && <Download size={16} />}
                {link.label}
              </span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Phone className="text-[#245447]" />
          <h2 className="font-bold">Italienisch fur unterwegs</h2>
        </div>
        <div className="mt-3 grid gap-2">
          <Phrase de="Ich brauche Hilfe." it="Ho bisogno di aiuto." />
          <Phrase de="Wir sind auf dem Wanderweg." it="Siamo sul sentiero." />
          <Phrase de="Ich habe mich verlaufen." it="Mi sono perso." />
          <Phrase de="Wo ist Wasser?" it="Dove posso trovare acqua?" />
        </div>
      </section>
    </div>
  )
}

function Phrase({ de, it }) {
  return (
    <div className="rounded-lg bg-[#f4f1e8] p-3">
      <p className="text-sm text-[#20312a]/55">{de}</p>
      <p className="font-bold text-[#245447]">{it}</p>
    </div>
  )
}
