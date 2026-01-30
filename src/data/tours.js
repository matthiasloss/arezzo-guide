// Vorgeplante Touren und Routen

export const tours = [
  {
    id: 'arezzo-klassisch',
    name: 'Arezzo Klassiker',
    subtitle: 'Die Highlights der Altstadt',
    duration: '4-5 Stunden',
    difficulty: 'Leicht',
    distance: '3 km zu Fuß',
    description: 'Die wichtigsten Sehenswürdigkeiten von Arezzo an einem Vormittag - perfekt für den ersten Tag.',
    longDescription: `Diese Tour führt dich durch die historische Altstadt von Arezzo und zeigt dir die wichtigsten Sehenswürdigkeiten.

**Start:** Parkplatz Piazzale Cadorna oder Parkhaus Eden
**Ende:** Piazza Grande (perfekt für Mittagessen)`,
    image: 'tour-arezzo.jpg',
    stops: [
      {
        placeId: 'san-francesco',
        name: 'Basilica di San Francesco',
        duration: '1-1.5 Std',
        note: 'Unbedingt Fresken vorab reservieren!',
        order: 1,
      },
      {
        name: 'Caffè-Pause',
        description: 'Espresso im Caffè dei Costanti',
        duration: '20 Min',
        coordinates: [43.4618, 11.8830],
        order: 2,
      },
      {
        placeId: 'piazza-grande',
        name: 'Piazza Grande',
        duration: '30-45 Min',
        note: 'Fotos machen, Atmosphäre genießen',
        order: 3,
      },
      {
        name: 'Dom Santa Maria',
        description: 'Gotische Kathedrale mit Glasfenstern von Guillaume de Marcillat',
        duration: '30 Min',
        coordinates: [43.4650, 11.8847],
        order: 4,
      },
      {
        name: 'Passeggiata del Prato',
        description: 'Park mit Aussicht und Festung',
        duration: '30 Min',
        coordinates: [43.4667, 11.8833],
        order: 5,
      },
    ],
    tips: [
      'Früh starten (9 Uhr) für Fresken-Reservierung',
      'Bequeme Schuhe - Altstadt ist hügelig',
      'Mittagessen auf der Piazza Grande',
    ],
    bestTime: 'Vormittags',
    category: 'kultur',
  },
  {
    id: 'chianti-wein',
    name: 'Chianti Weintour',
    subtitle: 'Weingüter & Verkostungen',
    duration: 'Halber Tag',
    difficulty: 'Leicht (Auto)',
    distance: '60 km',
    description: 'Entdecke die Weinberge der Chianti Colli Aretini mit Weinproben und Olivenöl.',
    longDescription: `Eine entspannte Autofahrt durch die Weinberge östlich des Chianti Classico. Weniger Touristen, authentischere Erfahrung.

**Wichtig:**
- Vorher anrufen für Besichtigungen
- Fahrer sollte nur probieren, nicht trinken
- Wein kaufen lohnt sich (günstiger als zuhause)`,
    image: 'tour-chianti.jpg',
    stops: [
      {
        name: 'Fattoria San Fabiano',
        description: 'Historisches Weingut mit Schloss',
        duration: '1.5 Std',
        coordinates: [43.4012, 11.7234],
        note: 'Tel: +39 0575 123456',
        order: 1,
      },
      {
        name: 'Mittagessen in Civitella',
        description: 'Borgo Medievale mit Restaurant',
        duration: '1.5 Std',
        coordinates: [43.4089, 11.7567],
        order: 2,
      },
      {
        name: 'Olivenölmühle',
        description: 'Frantoio mit Verkostung',
        duration: '1 Std',
        coordinates: [43.4156, 11.7789],
        order: 3,
      },
    ],
    tips: [
      'Nicht nüchtern zur Weinprobe',
      'Kofferraum frei lassen für Einkäufe',
      'Im Herbst: Traubenernte erleben',
    ],
    bestTime: 'Nachmittags',
    category: 'wein',
  },
  {
    id: 'val-dorcia',
    name: 'Val d\'Orcia Tagestour',
    subtitle: 'Die Postkarten-Toskana',
    duration: 'Ganzer Tag',
    difficulty: 'Mittel (viel Fahren)',
    distance: '150 km',
    description: 'Die berühmten Hügellandschaften aus den Toskana-Postkarten - UNESCO Welterbe.',
    longDescription: `Das Val d'Orcia ist DAS Toskana-Postkartenmotiv: sanfte Hügel, Zypressen, Weinberge und mittelalterliche Dörfer.

**Route:** Arezzo → Pienza → Montepulciano → (Montalcino optional) → zurück

**Beste Zeit:** Frühling (Mai) für grüne Hügel oder Herbst für goldene Farben`,
    image: 'tour-valdorcia.jpg',
    stops: [
      {
        placeId: 'pienza',
        name: 'Pienza',
        duration: '2 Std',
        note: 'Pecorino kaufen!',
        order: 1,
      },
      {
        name: 'Aussichtspunkt Cipressi',
        description: 'Die berühmte Zypressenallee',
        duration: '15 Min',
        coordinates: [43.0589, 11.6234],
        note: 'Perfekt für Fotos',
        order: 2,
      },
      {
        placeId: 'montepulciano',
        name: 'Montepulciano',
        duration: '3 Std',
        note: 'Mittagessen + Weinkeller',
        order: 3,
      },
      {
        name: 'Bagno Vignoni',
        description: 'Thermalbad im Dorfplatz',
        duration: '30 Min',
        coordinates: [43.0289, 11.6178],
        note: 'Optional, aber einzigartig',
        order: 4,
      },
    ],
    tips: [
      'Früh starten (8 Uhr)',
      'Sonnencreme nicht vergessen',
      'Kamera vollgeladen',
      'In Pienza: Cacio e Pepe essen',
    ],
    bestTime: 'Mai-Juni oder September-Oktober',
    category: 'landschaft',
  },
  {
    id: 'wanderung-casentino',
    name: 'Wasserfälle & Wälder',
    subtitle: 'Wanderung im Casentino',
    duration: 'Ganzer Tag',
    difficulty: 'Mittel-Schwer',
    distance: '12 km Wanderung',
    description: 'Wanderung zum Acquacheta Wasserfall durch uralte Buchenwälder.',
    longDescription: `Der Acquacheta Wasserfall wurde schon von Dante in der Göttlichen Komödie beschrieben. Die Wanderung führt durch einen der ältesten Wälder Europas.

**Anforderungen:**
- Feste Wanderschuhe
- Kondition für 12 km
- Wasser & Proviant

**Route:** San Benedetto in Alpe → Acquacheta → zurück`,
    image: 'tour-casentino.jpg',
    stops: [
      {
        name: 'Parkplatz San Benedetto',
        description: 'Startpunkt der Wanderung',
        coordinates: [43.9234, 11.7123],
        duration: '10 Min',
        order: 1,
      },
      {
        name: 'Aufstieg durch Wald',
        description: 'Buchenwälder, UNESCO Welterbe',
        duration: '2 Std',
        order: 2,
      },
      {
        name: 'Cascata dell\'Acquacheta',
        description: 'Wasserfall (70m) - Picknick hier',
        coordinates: [43.9012, 11.7456],
        duration: '1 Std',
        order: 3,
      },
      {
        name: 'Rückweg',
        description: 'Gleicher Weg zurück',
        duration: '2 Std',
        order: 4,
      },
    ],
    tips: [
      'Früh starten im Sommer (Hitze!)',
      'Badesachen für den Wasserfall',
      'Müll wieder mitnehmen',
      'Im Herbst: Laubfärbung spektakulär',
    ],
    bestTime: 'Mai-Juni oder September-Oktober',
    category: 'natur',
  },
  {
    id: 'cortona-trasimenischer-see',
    name: 'Cortona & Trasimenischer See',
    subtitle: 'Bergstadt & Seeidylle',
    duration: '6-7 Stunden',
    difficulty: 'Leicht-Mittel',
    distance: '80 km',
    description: 'Die berühmte Bergstadt Cortona und Entspannung am viertgrößten See Italiens.',
    longDescription: `Cortona wurde durch "Unter der Sonne der Toskana" weltberühmt. Kombiniert mit dem Trasimenischen See ergibt das einen perfekten Tag.

**Programm:**
- Vormittag: Cortona erkunden
- Mittag: Essen in Cortona
- Nachmittag: Trasimenischer See`,
    image: 'tour-cortona.jpg',
    stops: [
      {
        placeId: 'cortona',
        name: 'Cortona',
        duration: '4 Std',
        note: 'Parken unten, Rolltreppe nach oben',
        order: 1,
      },
      {
        name: 'Mittagessen',
        description: 'Ristorante Tonino (Pici!)',
        duration: '1.5 Std',
        coordinates: [43.2752, 11.9847],
        order: 2,
      },
      {
        name: 'Trasimenischer See',
        description: 'Baden oder Spaziergang',
        duration: '2 Std',
        coordinates: [43.1089, 12.1234],
        note: 'Lido in Tuoro oder Castiglione',
        order: 3,
      },
    ],
    tips: [
      'Bequeme Schuhe für Cortona (steil!)',
      'Badesachen für See',
      'Sonnenuntergang am See genießen',
    ],
    bestTime: 'Ganzjährig, Sommer für Baden',
    category: 'mixed',
  },
  {
    id: 'francigena-pilgern',
    name: 'Via Francigena Etappe',
    subtitle: 'Auf dem Pilgerweg',
    duration: '5-6 Stunden',
    difficulty: 'Mittel',
    distance: '18 km',
    description: 'Eine Etappe auf dem historischen Pilgerweg von Canterbury nach Rom.',
    longDescription: `Die Via Francigena ist einer der wichtigsten Pilgerwege Europas. Diese Etappe führt durch die toskanische Landschaft.

**Strecke:** Arezzo → San Leo → Ponte Buriano → Arezzo (Rundweg)

**Highlight:** Die Ponte Buriano ist die Brücke im Hintergrund der Mona Lisa!`,
    image: 'tour-francigena.jpg',
    stops: [
      {
        name: 'Arezzo Altstadt',
        description: 'Start am Dom',
        coordinates: [43.4650, 11.8847],
        duration: '15 Min',
        order: 1,
      },
      {
        name: 'Ponte Buriano',
        description: 'Romanische Brücke (Mona Lisa!)',
        coordinates: [43.4567, 11.7890],
        duration: '30 Min',
        order: 2,
      },
      {
        name: 'Mittagspause',
        description: 'Picknick am Fluss',
        duration: '1 Std',
        order: 3,
      },
    ],
    tips: [
      'Wanderstöcke empfohlen',
      'Pilgerpass holen für Stempel',
      'Sonnenschutz nicht vergessen',
    ],
    bestTime: 'Frühling oder Herbst',
    category: 'wandern',
  },
];

export const tourCategories = [
  { id: 'all', name: 'Alle Touren', icon: 'MapPin' },
  { id: 'kultur', name: 'Kultur & Stadt', icon: 'Landmark' },
  { id: 'wein', name: 'Wein & Kulinarik', icon: 'Wine' },
  { id: 'landschaft', name: 'Landschaft', icon: 'Mountain' },
  { id: 'natur', name: 'Natur & Wandern', icon: 'TreePine' },
  { id: 'wandern', name: 'Pilgern', icon: 'Footprints' },
];

export function getToursByCategory(categoryId) {
  if (categoryId === 'all') return tours;
  return tours.filter(tour => tour.category === categoryId);
}
