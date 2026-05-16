// Wichtige Orte fur eine Wander-App im Casentino.

export const categories = [
  { id: 'trailhead', name: 'Startpunkte', icon: 'MapPin', color: 'green' },
  { id: 'village', name: 'Orte', icon: 'Home', color: 'amber' },
  { id: 'nature', name: 'Natur', icon: 'TreePine', color: 'emerald' },
  { id: 'culture', name: 'Kloster & Kultur', icon: 'Landmark', color: 'violet' },
  { id: 'service', name: 'Praktisch', icon: 'CircleHelp', color: 'slate' },
]

export const places = [
  {
    id: 'eremo-camaldoli',
    name: 'Eremo di Camaldoli',
    category: 'culture',
    description: 'Einsiedelei im Wald und starker Startpunkt fur die Poggio-Scali-Runde.',
    longDescription: 'Das Eremo di Camaldoli liegt tief in den Foreste Casentinesi und ist einer der besten Orte, um die besondere Mischung aus Wald, Stille und Spiritualitat des Casentino zu erleben.',
    coordinates: [43.7948, 11.8194],
    address: 'Eremo di Camaldoli, Poppi AR',
    website: 'https://www.camaldoli.it',
    tips: ['Ruhig auftreten, es ist ein aktiver spiritueller Ort.', 'Wasser am Start auffullen.', 'Im Herbst fruh kommen, Parken ist begrenzt.'],
    rating: 5,
    duration: '1 Std plus Wanderung',
  },
  {
    id: 'la-verna',
    name: 'Santuario della Verna',
    category: 'culture',
    description: 'Spektakulares Franziskanerheiligtum auf Felsplateau mit kurzer Wanderung zum Monte Penna.',
    longDescription: 'La Verna ist ein Pflichtort im Casentino: Kloster, Felsen, Wald und Aussicht liegen eng zusammen. Sehr gut fur eine kurze, aber eindrucksvolle Wanderrunde.',
    coordinates: [43.7086, 11.9308],
    address: 'Chiusi della Verna AR',
    website: 'https://www.laverna.it/en/',
    tips: ['Schultern und Knie im Santuario bedecken.', 'Monte Penna bei nassen Steinen vorsichtig gehen.', 'Unter der Woche deutlich ruhiger.'],
    rating: 5,
    duration: '2-4 Std',
  },
  {
    id: 'badia-prataglia',
    name: 'Badia Prataglia',
    category: 'trailhead',
    description: 'Wanderort mitten im Nationalpark, ideal fur langere Waldtouren.',
    longDescription: 'Badia Prataglia ist ein praktischer Ausgangspunkt fur ernsthafte Waldwanderungen Richtung Lama, Fangacci und Kammwege.',
    coordinates: [43.7942, 11.8761],
    address: 'Badia Prataglia, Poppi AR',
    tips: ['Vor langen Touren Wasser und Snacks kaufen.', 'Guter Plan-B-Ort bei wechselhaftem Wetter.', 'Parkregeln und Markierungen vor Ort prufen.'],
    rating: 5,
    duration: 'Startpunkt',
  },
  {
    id: 'poppi',
    name: 'Poppi',
    category: 'village',
    description: 'Borgo mit Burg, Bahnanschluss und einfacher Arno-Runde.',
    longDescription: 'Poppi ist der sanfte Einstieg ins Casentino: gut erreichbar, schoner historischer Kern, Castello dei Conti Guidi und leichte Wege am Arno.',
    coordinates: [43.7322, 11.7669],
    address: 'Poppi AR',
    website: 'https://casentino.it/',
    tips: ['Gut fur Anreisetage.', 'Burgbesuch mit Spaziergang kombinieren.', 'Auch bei unsicherem Wetter angenehm.'],
    rating: 4,
    duration: '3-4 Std',
  },
  {
    id: 'monte-falterona',
    name: 'Monte Falterona',
    category: 'nature',
    description: 'Klassischer Gipfelbereich nahe Arno-Quelle und Lago degli Idoli.',
    longDescription: 'Der Monte Falterona ist kein Spaziergang, sondern ein Ziel fur klare, stabile Tage. Landschaftlich stark, aber bei Nebel und Wind ernst nehmen.',
    coordinates: [43.8641, 11.6876],
    address: 'Parco Nazionale Foreste Casentinesi',
    tips: ['Nur mit Offline-Karte/Papierkarte starten.', 'Wetterlage vorher prufen.', 'Genug Wasser mitnehmen.'],
    rating: 5,
    duration: '5-7 Std',
  },
  {
    id: 'foresta-lama',
    name: 'Foresta della Lama',
    category: 'nature',
    description: 'Abgelegener Waldkern des Nationalparks, fur lange Touren.',
    longDescription: 'Die Foresta della Lama ist einer der wildesten Bereiche im Park. Genau richtig, wenn du Einsamkeit und lange Waldwege suchst.',
    coordinates: [43.8497, 11.8222],
    address: 'Parco Nazionale Foreste Casentinesi',
    tips: ['Nicht als kurze Nachmittagsrunde planen.', 'Akku und Navigation sichern.', 'Bei Gewitterrisiko meiden.'],
    rating: 5,
    duration: 'Ganzer Tag',
  },
  {
    id: 'casentino-visitor-info',
    name: 'Park- und Karteninfos',
    category: 'service',
    description: 'Offizielle Infos, Wanderkarte und PNFC Trekking Map fur den Nationalpark.',
    longDescription: 'Fur Sperrungen, Markierungen und Detailnavigation immer die offiziellen Parkquellen und aktuelle Karten nutzen. Diese App ist ein Planungshelfer, kein Ersatz fur Trail-Zustand vor Ort.',
    coordinates: [43.7833, 11.8167],
    address: 'Parco Nazionale Foreste Casentinesi',
    website: 'https://www.parcoforestecasentinesi.it/it/vivi-il-parco/sentieri-ed-escursioni/piedi',
    tips: ['PNFC Trekking Map offline laden.', 'Papierkarte 1:25.000 kaufen.', 'Vor langen Touren Wetter und Wegzustand prufen.'],
    rating: 5,
    duration: 'Vorbereitung',
  },
  {
    id: 'san-benedetto-alpe',
    name: 'San Benedetto in Alpe',
    category: 'trailhead',
    description: 'Startort fur den Acquacheta-Wasserfall auf der romagnolischen Parkseite.',
    longDescription: 'Etwas weiter anzufahren, aber ein starker Klassiker, wenn du Wasserfall und Wald verbinden willst.',
    coordinates: [43.9786, 11.6889],
    address: 'San Benedetto in Alpe FC',
    tips: ['Als ganzer Tag planen.', 'Nach Regenperioden besonders schon.', 'Im Sommer fruh starten.'],
    rating: 4,
    duration: '4.5-5.5 Std',
  },
]

export function getPlacesByCategory(categoryId) {
  if (categoryId === 'all') return places
  return places.filter((place) => place.category === categoryId)
}

export function searchPlaces(query) {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return places

  return places.filter((place) => {
    const haystack = [
      place.name,
      place.description,
      place.longDescription,
      place.address,
      ...(place.tips || []),
    ].join(' ').toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}
