// Kuratierte Wanderungen im Casentino und in den Foreste Casentinesi.

export const tours = [
  {
    id: 'camaldoli-poggio-scali',
    name: 'Camaldoli - Poggio Scali',
    subtitle: 'Tiefe Buchenwalder und Gipfelblick',
    duration: '5-6 Std',
    difficulty: 'Mittel',
    distance: '13 km',
    elevation: '620 hm',
    start: 'Eremo di Camaldoli',
    startCoordinates: [43.7948, 11.8194],
    coordinates: [43.8123, 11.7972],
    season: 'Mai-Oktober',
    water: 'Am Start, unterwegs kaum',
    dog: 'Angeleint moglich',
    shade: 'Sehr viel Schatten',
    routeType: 'Rundtour',
    category: 'wald',
    description: 'Eine der besten Casentino-Runden: stille Klosteratmosphare, alter Wald und ein echter Appennin-Kamm.',
    longDescription: `Start am Eremo di Camaldoli, dann hinein in die alten Buchenwalder Richtung Passo della Calla und Poggio Scali. Die Tour ist ideal, wenn du das Casentino nicht nur sehen, sondern richtig spuren willst: weicher Waldboden, Kuhlung auch im Sommer und oben weite Blicke uber den Nationalpark.

Plane genug Zeit fur das Eremo ein. Bei Nebel oder Gewitter am Kamm lieber umdrehen; im Wald wirkt alles harmlos, oben kann das Wetter schnell kippen.`,
    stops: [
      { name: 'Eremo di Camaldoli', description: 'Ruhiger Startpunkt mit Wasser und Klosteranlage.', coordinates: [43.7948, 11.8194], duration: '20 Min' },
      { name: 'Aia di Dorino', description: 'Waldlichtung und guter Atemholpunkt.', coordinates: [43.8049, 11.8075], duration: '10 Min' },
      { name: 'Poggio Scali', description: 'Aussichtspunkt am Kamm, nur bei stabilem Wetter geniessen.', coordinates: [43.8123, 11.7972], duration: '30 Min' },
      { name: 'Ruckweg durch den Buchenwald', description: 'Langer, schattiger Abstieg zur Einsiedelei.', duration: '2 Std' },
    ],
    tips: [
      'Leichte Jacke mitnehmen, der Kamm ist oft windig.',
      'Nach Regen sind Wurzeln und Laub sehr rutschig.',
      'Vor Ort die offizielle PNFC Trekking Map oder Papierkarte 1:25.000 nutzen.',
    ],
    links: [
      { label: 'Offizielle Park-Itinerare', url: 'https://www.parks.it/parco.nazionale.for.casentinesi/iti.php' },
      { label: 'PNFC Trekking Map', url: 'https://www.parcoforestecasentinesi.it/it/multimedia/app-parco/pnfc-trekking-map' },
    ],
  },
  {
    id: 'la-verna-penna',
    name: 'La Verna - Monte Penna',
    subtitle: 'Fels, Heiligtum und kurze Premium-Runde',
    duration: '2.5-3.5 Std',
    difficulty: 'Leicht-Mittel',
    distance: '6 km',
    elevation: '320 hm',
    start: 'Santuario della Verna',
    startCoordinates: [43.7086, 11.9308],
    coordinates: [43.7117, 11.9241],
    season: 'Ganzjahrig, bei Eis meiden',
    water: 'Am Santuario',
    dog: 'Ruhig und angeleint',
    shade: 'Halbschatten',
    routeType: 'Rundtour',
    category: 'kultur',
    description: 'Perfekt fur einen halben Tag: spiritueller Ort, kurze Waldpfade und der Aussichtsfelsen Monte Penna.',
    longDescription: `La Verna ist einer der starksten Orte im Casentino. Die kleine Runde zum Monte Penna verbindet Klosterbesuch, Kalkfelsen, Wald und einen Aussichtspunkt, der sich auch lohnt, wenn du nicht den ganzen Tag wandern willst.

Die Strecke ist kurz, aber nicht ganz belanglos: einzelne steinige Passagen brauchen feste Schuhe. Kombiniere die Runde mit einer ruhigen Stunde im Santuario.`,
    stops: [
      { name: 'Santuario della Verna', description: 'Start, Klosterhof und Basilika.', coordinates: [43.7086, 11.9308], duration: '45 Min' },
      { name: 'Sasso Spicco', description: 'Beeindruckende Felsformation direkt beim Heiligtum.', coordinates: [43.7089, 11.9293], duration: '15 Min' },
      { name: 'Monte Penna', description: 'Aussicht auf das Casentino und die Alpe di Catenaia.', coordinates: [43.7117, 11.9241], duration: '25 Min' },
      { name: 'Waldruckweg', description: 'Ruhige Runde zuruck zum Parkplatz.', duration: '1 Std' },
    ],
    tips: [
      'Schultern/Knie im Kloster bedecken.',
      'Sonnenuntergang ist schon, aber danach wird der Wald schnell dunkel.',
      'Bei nassen Steinen langsam gehen.',
    ],
    links: [
      { label: 'Santuario La Verna', url: 'https://www.laverna.it/en/' },
      { label: 'Casentino Tourismus', url: 'https://casentino.it/' },
    ],
  },
  {
    id: 'monte-falterona-lago-idoli',
    name: 'Monte Falterona & Lago degli Idoli',
    subtitle: 'Quelle des Arno und etruskische Geschichte',
    duration: '5-7 Std',
    difficulty: 'Mittel-Schwer',
    distance: '15 km',
    elevation: '720 hm',
    start: 'Capo d Arno / Montalto',
    startCoordinates: [43.8657, 11.7071],
    coordinates: [43.8644, 11.6978],
    season: 'Juni-Oktober',
    water: 'Nicht sicher unterwegs',
    dog: 'Nur trittsicher und angeleint',
    shade: 'Wechselnd',
    routeType: 'Rundtour oder Hin/Ruck',
    category: 'gipfel',
    description: 'Eine grosse Bergwanderung zu Arno-Quelle, Lago degli Idoli und einem der klassischen Gipfel des Parks.',
    longDescription: `Diese Tour ist fur Tage mit klarer Sicht. Du wanderst in den oberen Bereich des Nationalparks, wo sich Natur, Geschichte und Appennin-Gefuhl treffen: die Arno-Quelle, der Lago degli Idoli und der Monte Falterona.

Nicht unterschätzen: Orientierung und Wetter sind hier wichtiger als bei den kurzen Klosterrunden. Offline-Karte speichern, Papierkarte einstecken und bei Nebel defensiv bleiben.`,
    stops: [
      { name: 'Capo d Arno', description: 'Bereich der Arno-Quelle.', coordinates: [43.8657, 11.7071], duration: '20 Min' },
      { name: 'Lago degli Idoli', description: 'Kleiner See mit etruskischer Fundgeschichte.', coordinates: [43.8644, 11.6978], duration: '20 Min' },
      { name: 'Monte Falterona', description: 'Gipfelbereich mit weiter Aussicht bei klarer Luft.', coordinates: [43.8641, 11.6876], duration: '30 Min' },
      { name: 'Abstieg', description: 'Auf Markierung und Wetter achten.', duration: '2-3 Std' },
    ],
    tips: [
      'Nur bei stabiler Wetterlage starten.',
      'Mindestens 2 Liter Wasser pro Person einplanen.',
      'Powerbank und Offline-Karte sind hier keine Luxusidee.',
    ],
    links: [
      { label: 'Trekking im Park', url: 'https://trekking.parcoforestecasentinesi.it/en/trekking-in-the-park/' },
      { label: 'Offizielle Wanderkarte', url: 'https://www.parks.it/parco.nazionale.for.casentinesi/gui_dettaglio.php?id_pubb=7217' },
    ],
  },
  {
    id: 'badia-prataglia-lama',
    name: 'Badia Prataglia - Foresta della Lama',
    subtitle: 'Wilder Wald, lange Beine',
    duration: '6-8 Std',
    difficulty: 'Schwer',
    distance: '18 km',
    elevation: '850 hm',
    start: 'Badia Prataglia',
    startCoordinates: [43.7942, 11.8761],
    coordinates: [43.8497, 11.8222],
    season: 'Juni-Oktober',
    water: 'Vorher auffullen',
    dog: 'Nur fur sehr fitte Hunde',
    shade: 'Viel Schatten',
    routeType: 'Lange Rundtour',
    category: 'wildnis',
    description: 'Die Tour fur einen echten Wandertag: tief in die Foresta della Lama, ruhig, grun und konditionell fordernd.',
    longDescription: `Badia Prataglia ist ein starker Ausgangspunkt, wenn du in den wilderen Teil der Foreste Casentinesi willst. Die Runde zur Foresta della Lama ist lang, einsamer und deutlich anspruchsvoller als die Klassiker.

Nimm diese Tour nicht als Spaziergang. Sie belohnt dich mit dichtem Wald, langen stillen Abschnitten und dem Gefuhl, wirklich im Nationalpark unterwegs zu sein.`,
    stops: [
      { name: 'Badia Prataglia', description: 'Start mit Bars, Wasser und Parkmoglichkeiten.', coordinates: [43.7942, 11.8761], duration: '15 Min' },
      { name: 'Ridge Trail', description: 'Langer Waldanstieg Richtung Parkinneres.', duration: '2 Std' },
      { name: 'Foresta della Lama', description: 'Herzstuck der Tour, abgelegen und eindrucksvoll.', coordinates: [43.8497, 11.8222], duration: '45 Min' },
      { name: 'Ruckweg nach Badia', description: 'Krafte einteilen, der Ruckweg zieht sich.', duration: '3 Std' },
    ],
    tips: [
      'Früh starten und nicht nachmittags erst los.',
      'Navigation doppelt absichern: Smartphone plus Papierkarte.',
      'Bei Gewitterrisiko auf eine kurze Badia-Runde wechseln.',
    ],
    links: [
      { label: 'Offizielle Parkseite zu Fuss', url: 'https://www.parcoforestecasentinesi.it/it/vivi-il-parco/sentieri-ed-escursioni/piedi' },
      { label: 'PNFC Trekking Map', url: 'https://www.parcoforestecasentinesi.it/it/multimedia/app-parco/pnfc-trekking-map' },
    ],
  },
  {
    id: 'poppi-castello-arnorunde',
    name: 'Poppi & Arno-Runde',
    subtitle: 'Borgo, Burg und entspannter Wandertag',
    duration: '3-4 Std',
    difficulty: 'Leicht',
    distance: '8 km',
    elevation: '180 hm',
    start: 'Poppi Bahnhof oder Altstadt',
    startCoordinates: [43.7218, 11.7665],
    coordinates: [43.7322, 11.7669],
    season: 'Ganzjahrig',
    water: 'Im Ort',
    dog: 'Gut geeignet',
    shade: 'Teilweise',
    routeType: 'Rundtour',
    category: 'leicht',
    description: 'Eine sanfte Einstiegsrunde fur Anreise- oder Pausentage mit Burgblick und Arno-Nähe.',
    longDescription: `Poppi ist ideal, wenn du wandern willst, aber keinen schweren Bergtag brauchst. Die Runde verbindet Altstadt, Castello dei Conti Guidi und Wege am Arno. Perfekt zum Einlaufen, fur Familien oder als Plan B bei unsicherem Wetter.

Der kulturelle Bonus ist gross: Poppi gehort zu den schonsten Orten im Casentino und hat genug Cafes fur einen angenehmen Abschluss.`,
    stops: [
      { name: 'Poppi Altstadt', description: 'Kompakter Borgo mit Blick ins Tal.', coordinates: [43.7322, 11.7669], duration: '30 Min' },
      { name: 'Castello dei Conti Guidi', description: 'Das Wahrzeichen von Poppi.', coordinates: [43.7328, 11.7658], duration: '45 Min' },
      { name: 'Arno-Ufer', description: 'Flacherer Teil der Runde.', coordinates: [43.7218, 11.7665], duration: '1 Std' },
      { name: 'Ruckkehr in den Borgo', description: 'Kurzer Anstieg zur Altstadt.', duration: '35 Min' },
    ],
    tips: [
      'Guter Einstieg nach der Anreise.',
      'Auch bei wechselhaftem Wetter gut machbar.',
      'Mit Kindern lieber mehr Zeit fur Burg und Eis einplanen.',
    ],
    links: [
      { label: 'Casentino Tourismus', url: 'https://casentino.it/' },
      { label: 'Navigation nach Poppi', url: 'https://www.google.com/maps/search/?api=1&query=Poppi%20Casentino' },
    ],
  },
  {
    id: 'acquacheta-wasserfall',
    name: 'Acquacheta Wasserfall',
    subtitle: 'Dantes Wasserfall im Nordteil des Parks',
    duration: '4.5-5.5 Std',
    difficulty: 'Mittel',
    distance: '11 km',
    elevation: '520 hm',
    start: 'San Benedetto in Alpe',
    startCoordinates: [43.9786, 11.6889],
    coordinates: [43.9551, 11.7093],
    season: 'April-Juni, September-Oktober',
    water: 'Am Start',
    dog: 'Angeleint, Wasserstellen beachten',
    shade: 'Viel Schatten',
    routeType: 'Hin/Ruck',
    category: 'wasser',
    description: 'Nicht direkt im Casentino-Tal, aber ein starker Klassiker des Nationalparks mit Wasserfall und Wald.',
    longDescription: `Der Acquacheta-Wasserfall liegt auf der romagnolischen Seite des Nationalparks und ist eine der bekanntesten Wanderungen der Foreste Casentinesi. Besonders nach regenreichen Perioden ist der Wasserfall eindrucksvoll.

Von vielen Casentino-Orten ist die Anfahrt langer, deshalb eher als ganzer Wandertag planen. Bei Trockenheit kann der Wasserfall deutlich weniger spektakulär sein.`,
    stops: [
      { name: 'San Benedetto in Alpe', description: 'Start im Ort.', coordinates: [43.9786, 11.6889], duration: '15 Min' },
      { name: 'Waldpfad im Tal', description: 'Angenehmer Anstieg entlang des Wassers.', duration: '1.5 Std' },
      { name: 'Cascata dell Acquacheta', description: 'Picknickplatz mit Wasserfallblick.', coordinates: [43.9551, 11.7093], duration: '45 Min' },
      { name: 'Ruckweg', description: 'Gleicher Weg zuruck.', duration: '2 Std' },
    ],
    tips: [
      'Nach Regenperioden am schonsten.',
      'Nicht zu nah an Kanten oder nasse Felsen gehen.',
      'Im Sommer fruh starten, Parkplatze konnen voll werden.',
    ],
    links: [
      { label: 'Trekking im Park', url: 'https://trekking.parcoforestecasentinesi.it/en/trekking-in-the-park/' },
      { label: 'Offizielle Park-Itinerare', url: 'https://www.parks.it/parco.nazionale.for.casentinesi/iti.php' },
    ],
  },
]

export const tourCategories = [
  { id: 'all', name: 'Alle', icon: 'MapPin' },
  { id: 'leicht', name: 'Leicht', icon: 'Footprints' },
  { id: 'wald', name: 'Wald', icon: 'TreePine' },
  { id: 'gipfel', name: 'Gipfel', icon: 'Mountain' },
  { id: 'kultur', name: 'Kloster', icon: 'Landmark' },
  { id: 'wasser', name: 'Wasser', icon: 'Waves' },
  { id: 'wildnis', name: 'Wildnis', icon: 'Compass' },
]

export const hikingFilters = [
  { id: 'short', label: 'Kurz', test: (tour) => Number.parseFloat(tour.distance) <= 8 },
  { id: 'medium', label: 'Halber Tag', test: (tour) => Number.parseFloat(tour.distance) > 8 && Number.parseFloat(tour.distance) <= 13 },
  { id: 'big', label: 'Grosser Tag', test: (tour) => Number.parseFloat(tour.distance) > 13 },
  { id: 'easy', label: 'Entspannt', test: (tour) => tour.difficulty.includes('Leicht') },
  { id: 'shade', label: 'Viel Schatten', test: (tour) => tour.shade.toLowerCase().includes('viel') || tour.shade.toLowerCase().includes('sehr') },
]

export function getToursByCategory(categoryId) {
  if (categoryId === 'all') return tours
  return tours.filter((tour) => tour.category === categoryId)
}
