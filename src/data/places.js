// Wichtige Orte fur eine Wander-App im Casentino.

export const categories = [
  { id: 'fattoria', name: 'La Vialla', icon: 'Home', color: 'terracotta' },
  { id: 'trailhead', name: 'Startpunkte', icon: 'MapPin', color: 'green' },
  { id: 'village', name: 'Orte', icon: 'Home', color: 'amber' },
  { id: 'nature', name: 'Natur', icon: 'TreePine', color: 'emerald' },
  { id: 'culture', name: 'Kloster & Kultur', icon: 'Landmark', color: 'violet' },
  { id: 'service', name: 'Praktisch', icon: 'CircleHelp', color: 'slate' },
]

export const places = [
  {
    id: 'fattoria-la-vialla',
    name: 'Fattoria La Vialla',
    category: 'fattoria',
    description: 'Deine Basis: biodynamische Fattoria, Bottega, Merende und Startpunkt fur nahe Spaziergaenge.',
    longDescription: `Fattoria La Vialla liegt in Via di Meliciano 26 bei Castiglion Fibocchi. Die offizielle Kontaktseite nennt GPS 43°31'41.00"N, 11°46'45.68"E. Von hier aus sind kurze Hausrunden, Castiglion Fibocchi, Ponte Buriano und Arezzo gut erreichbar.

Die Bottega und Merende-Zeiten koennen saisonal sein und Reservierung erfordern. Fuer Besuche, Essen und Camper-/Wohnmobilthemen immer direkt bei La Vialla pruefen.`,
    coordinates: [43.5281, 11.7794],
    address: 'Via di Meliciano 26, 52029 Castiglion Fibocchi AR',
    website: 'https://www.lavialla.com/en-GB/at-the-fattoria/contacts/',
    webcam: 'https://www.lavialla.com/en-US/at-the-fattoria/webcam',
    phone: '+39 0575 430020',
    tips: [
      'Guter Startpunkt fuer kurze Morgen- und Abendrunden.',
      'Bei Hof- und Wirtschaftswegen immer Privatbereiche respektieren.',
      'Merende/Bottega vorab reservieren oder Oeffnungszeiten pruefen.',
    ],
    rating: 5,
    duration: 'Basis',
  },
  {
    id: 'meliciano',
    name: 'Meliciano',
    category: 'village',
    description: 'Kleiner Weiler direkt bei La Vialla, gut als Orientierungspunkt fuer kurze Hausrunden.',
    longDescription: 'Meliciano ist kein grosser Ausflugsort, aber fur die App wichtig: Hier beginnt die unmittelbare La-Vialla-Umgebung mit kleinen Strassen, Olivenhainen und Feldwegen.',
    coordinates: [43.5262, 11.7749],
    address: 'Meliciano, Castiglion Fibocchi AR',
    tips: ['Langsam gehen, kleine Strassen sind nicht immer breit.', 'Bei Daemmerung Licht oder reflektierende Kleidung nutzen.'],
    rating: 3,
    duration: '30-60 Min',
  },
  {
    id: 'castiglion-fibocchi',
    name: 'Castiglion Fibocchi',
    category: 'village',
    description: 'Naheliegender Borgo fuer Kaffee, kurze Runde und Blick Richtung Pratomagno.',
    longDescription: 'Castiglion Fibocchi ist der naheliegende Ort zur Fattoria. Gut fuer kleine Besorgungen, eine Pause oder als Ziel einer leichten Runde ab La Vialla.',
    coordinates: [43.5277, 11.7607],
    address: 'Castiglion Fibocchi AR',
    website: 'https://www.comune.castiglionfibocchi.ar.it/',
    tips: ['Gut als kurze Halbtagstour.', 'Im Sommer frueh oder spaet gehen.', 'Oeffentliche Wege gegen Privatwege vor Ort unterscheiden.'],
    rating: 4,
    duration: '1-2 Std',
  },
  {
    id: 'ponte-buriano',
    name: 'Ponte Buriano',
    category: 'nature',
    description: 'Historische Bruecke und Arno-Naturbereich, kurzer Ausflug von La Vialla.',
    longDescription: 'Ponte Buriano ist ein leichter Naturausflug mit Arno-Ufer, Bruecke und flachen Wegen. Sehr gut als Alternative zu Bergtouren bei unsicherem Wetter.',
    coordinates: [43.4929, 11.7915],
    address: 'Ponte Buriano, Arezzo AR',
    tips: ['Fernglas fuer Vogelbeobachtung mitnehmen.', 'Nach Regen koennen Uferwege matschig sein.', 'Mit Ponte a Buriano e Penna als leichte Runde kombinieren.'],
    rating: 4,
    duration: '2-4 Std',
  },
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
