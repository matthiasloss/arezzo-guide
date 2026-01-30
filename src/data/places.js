// POIs und Sehenswürdigkeiten rund um Arezzo und Fattoria Lavialla

export const categories = [
  { id: 'fattoria', name: 'Fattoria Lavialla', icon: 'Home', color: 'purple' },
  { id: 'sehenswuerdigkeiten', name: 'Sehenswürdigkeiten', icon: 'Landmark', color: 'amber' },
  { id: 'restaurants', name: 'Restaurants & Wein', icon: 'UtensilsCrossed', color: 'red' },
  { id: 'natur', name: 'Natur & Wandern', icon: 'TreePine', color: 'green' },
  { id: 'shoppen', name: 'Märkte & Shoppen', icon: 'ShoppingBag', color: 'pink' },
  { id: 'kultur', name: 'Museen & Kunst', icon: 'Palette', color: 'blue' },
];

export const places = [
  // === FATTORIA LAVIALLA ===
  {
    id: 'fattoria-lavialla',
    name: 'Fattoria Lavialla',
    category: 'fattoria',
    description: 'Deine Unterkunft im Herzen der Toskana. Ein Bio-Bauernhof mit Restaurant, Weingut und wunderschönen Apartments.',
    longDescription: `Die Fattoria Lavialla ist ein historisches Landgut in den Hügeln zwischen Arezzo und dem Chianti-Gebiet. Der Bio-Bauernhof produziert eigenen Wein, Olivenöl und Gemüse.

**Ausstattung:**
- Apartments mit Küche
- Pool mit Panoramablick
- Restaurant mit toskanischer Küche
- Weinkeller mit Verkostungen
- Bio-Garten

**Kontakt:**
- Tel: +39 055 123 4567
- Email: info@fattorialavialla.it`,
    coordinates: [43.4567, 11.7890], // Beispiel-Koordinaten
    address: 'Località Lavialla, 52020 Castiglion Fibocchi AR',
    website: 'https://www.lavialla.com',
    webcam: 'https://www.lavialla.com/en-US/at-the-fattoria/webcam/',
    phone: '+39 055 9177 1',
    tips: [
      'Frühstück auf der Terrasse mit Blick auf die Hügel',
      'Weinverkostung am Abend buchen',
      'Frisches Gemüse aus dem Garten probieren'
    ],
    images: ['fattoria-1.jpg', 'fattoria-2.jpg'],
    rating: 5,
    priceRange: '€€€',
  },

  // === AREZZO ===
  {
    id: 'arezzo-centro',
    name: 'Arezzo Altstadt',
    category: 'sehenswuerdigkeiten',
    description: 'Mittelalterliche Stadt mit Piazza Grande, Dom und der berühmten Piero della Francesca Fresken.',
    longDescription: `Arezzo ist eine der ältesten Städte der Toskana mit etruskischen Wurzeln. Die Altstadt bietet mittelalterliche Architektur, Renaissance-Kunst und lebendige Plätze.

**Highlights:**
- Piazza Grande - einer der schönsten Plätze Italiens
- Basilica di San Francesco mit Fresken von Piero della Francesca
- Dom (Cattedrale dei Santi Pietro e Donato)
- Chiesa di San Domenico mit Cimabue-Kruzifix

**Antikmarkt:**
Jeden ersten Sonntag des Monats findet der größte Antikmarkt Italiens statt!`,
    coordinates: [43.4633, 11.8817],
    address: 'Centro Storico, Arezzo',
    openingHours: 'Immer zugänglich',
    tips: [
      'Früh morgens kommen für weniger Touristen',
      'Antikmarkt am 1. Sonntag des Monats',
      'Caffè dei Costanti auf der Piazza Grande'
    ],
    rating: 5,
    duration: '3-4 Stunden',
  },
  {
    id: 'piazza-grande',
    name: 'Piazza Grande',
    category: 'sehenswuerdigkeiten',
    description: 'Der zentrale Platz von Arezzo - bekannt aus "Das Leben ist schön" von Roberto Benigni.',
    longDescription: `Die Piazza Grande ist das Herz von Arezzo und einer der schönsten Plätze der Toskana. Der abfallende, trapezförmige Platz ist von mittelalterlichen Gebäuden umgeben.

**Gebäude am Platz:**
- Palazzo delle Logge (Giorgio Vasari)
- Palazzo della Fraternita dei Laici
- Romanische Apsis der Pieve di Santa Maria

**Events:**
- Giostra del Saracino (Juni & September)
- Fiera Antiquaria (1. Sonntag des Monats)`,
    coordinates: [43.4621, 11.8833],
    address: 'Piazza Grande, Arezzo',
    tips: [
      'Abends zum Aperitivo kommen',
      'Filme "Das Leben ist schön" hier gedreht',
      'Café Vasari für Aussicht'
    ],
    rating: 5,
    duration: '1 Stunde',
  },
  {
    id: 'san-francesco',
    name: 'Basilica di San Francesco',
    category: 'kultur',
    description: 'Beherbergt die legendären Fresken "Legende des Wahren Kreuzes" von Piero della Francesca.',
    longDescription: `Die gotische Kirche aus dem 13. Jahrhundert ist vor allem für den Freskenzyklus von Piero della Francesca bekannt - eines der wichtigsten Kunstwerke der Renaissance.

**Die Fresken:**
Der Zyklus "Die Legende des Wahren Kreuzes" (1452-1466) erzählt die Geschichte des Holzes, aus dem das Kreuz Christi gefertigt wurde.

**Wichtig:**
Für die Fresken ist eine Reservierung erforderlich! Max. 25 Personen alle 30 Minuten.`,
    coordinates: [43.4642, 11.8808],
    address: 'Piazza San Francesco, 52100 Arezzo',
    openingHours: 'Mo-Fr 9-18, Sa 9-17:30, So 13-17:30',
    price: '€8 (Fresken), Kirche gratis',
    website: 'https://www.pierodellafrancesca.it',
    tips: [
      'Online reservieren - sehr beliebt!',
      'Fernglas mitnehmen für Details',
      'Audio Guide lohnt sich'
    ],
    rating: 5,
    duration: '1-2 Stunden',
  },

  // === RESTAURANTS ===
  {
    id: 'buca-san-francesco',
    name: 'Buca di San Francesco',
    category: 'restaurants',
    description: 'Traditionelles Restaurant in einem mittelalterlichen Keller - authentische toskanische Küche.',
    longDescription: `Eines der ältesten Restaurants in Arezzo, untergebracht in einem Gewölbekeller aus dem 14. Jahrhundert. Seit 1929 serviert die Familie hier traditionelle Gerichte.

**Spezialitäten:**
- Ribollita (Toskanische Brotsuppe)
- Bistecca alla Fiorentina
- Pici al ragù di cinghiale
- Hausweine aus der Region`,
    coordinates: [43.4638, 11.8812],
    address: 'Via San Francesco, 1, 52100 Arezzo',
    phone: '+39 0575 23271',
    openingHours: 'Mi-Mo 12-15, 19-22:30',
    priceRange: '€€€',
    tips: [
      'Reservierung empfohlen',
      'Ribollita probieren!',
      'Hauswein bestellen'
    ],
    rating: 4,
  },
  {
    id: 'antica-osteria-agania',
    name: 'Antica Osteria l\'Agania',
    category: 'restaurants',
    description: 'Rustikale Osteria mit hervorragender traditioneller Küche und lokalen Weinen.',
    longDescription: `Eine authentische Osteria im Herzen von Arezzo. Kleine Karte mit saisonalen Gerichten, alle aus lokalen Zutaten.

**Empfehlungen:**
- Antipasto Toscano
- Tagliatelle al tartufo
- Arista di maiale
- Cantucci con Vin Santo`,
    coordinates: [43.4625, 11.8845],
    address: 'Via Mazzini, 10, 52100 Arezzo',
    phone: '+39 0575 295381',
    openingHours: 'Di-So 12:30-14:30, 19:30-22',
    priceRange: '€€',
    tips: [
      'Klein aber fein',
      'Kommt früh - schnell voll',
      'Trüffel in Saison!'
    ],
    rating: 5,
  },

  // === CORTONA ===
  {
    id: 'cortona',
    name: 'Cortona',
    category: 'sehenswuerdigkeiten',
    description: 'Malerische Bergstadt bekannt aus "Unter der Sonne der Toskana" - atemberaubende Aussichten.',
    longDescription: `Cortona thront auf einem Hügel mit spektakulärem Blick über das Val di Chiana bis zum Trasimenischen See. Die etruskische Stadt wurde durch Frances Mayes\' Buch weltberühmt.

**Sehenswert:**
- Piazza della Repubblica
- MAEC (Etruskisches Museum)
- Basilica di Santa Margherita
- Eremo Le Celle (Franziskanerkloster)

**Tipp:** Sonnenuntergang von der Fortezza del Girifalco`,
    coordinates: [43.2755, 11.9857],
    address: 'Cortona, AR',
    tips: [
      'Parkplatz unten, zu Fuß hoch',
      'Sonnenuntergang von oben',
      'Pici im Ristorante Tonino'
    ],
    rating: 5,
    duration: '3-4 Stunden',
    distance: '30 km von Arezzo',
  },

  // === WEINTOUREN ===
  {
    id: 'chianti-colli-aretini',
    name: 'Chianti Colli Aretini',
    category: 'restaurants',
    description: 'Weinregion östlich des klassischen Chianti - weniger Touristen, exzellente Weine.',
    longDescription: `Die Chianti Colli Aretini ist eine Unterzone des Chianti DOCG. Die Weine sind oft günstiger als im Chianti Classico, aber von hervorragender Qualität.

**Weingüter zum Besuchen:**
- Fattoria San Fabiano
- Tenuta di Frasinelle
- Villa Cilnia

**Typische Rebsorten:**
- Sangiovese (Hauptrebsorte)
- Canaiolo
- Colorino`,
    coordinates: [43.4200, 11.7500],
    tips: [
      'Vorher anrufen für Besichtigung',
      'Weinkauf direkt beim Erzeuger',
      'Olivenöl nicht vergessen!'
    ],
    rating: 4,
    duration: 'Halber Tag',
  },

  // === NATUR ===
  {
    id: 'casentino-forests',
    name: 'Nationalpark Casentinische Wälder',
    category: 'natur',
    description: 'Einer der ältesten Wälder Europas mit Wanderwegen, Wasserfällen und Klöstern.',
    longDescription: `Der Nationalpark ist Teil eines UNESCO-Welterbes und beherbergt uralte Buchenwälder, Wölfe, Hirsche und über 1.000 Pflanzenarten.

**Wanderungen:**
- Acquacheta Wasserfall (von Dante beschrieben)
- Eremo di Camaldoli
- Kloster La Verna (Franziskus)

**Beste Zeit:** Frühling (Blüte) oder Herbst (Laubfärbung)`,
    coordinates: [43.7833, 11.8167],
    address: 'Parco Nazionale Foreste Casentinesi',
    website: 'https://www.parcoforestecasentinesi.it',
    tips: [
      'Wanderschuhe unbedingt nötig',
      'Picknick mitnehmen',
      'Früh starten im Sommer'
    ],
    rating: 5,
    duration: 'Ganzer Tag',
    distance: '50 km von Arezzo',
  },
  {
    id: 'la-verna',
    name: 'Santuario della Verna',
    category: 'sehenswuerdigkeiten',
    description: 'Franziskanerkloster auf einem Felsplateau - hier empfing der Hl. Franziskus die Stigmata.',
    longDescription: `La Verna ist einer der wichtigsten Wallfahrtsorte Italiens. Das Kloster liegt spektakulär auf einem Felsen im Casentino-Tal.

**Geschichte:**
1224 empfing der Heilige Franziskus hier die Stigmata. Das Kloster wurde im 13. Jahrhundert gegründet.

**Sehenswert:**
- Cappella delle Stimmate
- Sasso Spicco (riesiger Felsüberhang)
- Kreuzgang mit Terrakotta von della Robbia`,
    coordinates: [43.7069, 11.9286],
    address: 'Località Santuario della Verna, Chiusi della Verna',
    openingHours: 'Täglich 6:30-19:30 (Winter kürzer)',
    tips: [
      'Modest kleiden (Schultern bedeckt)',
      'Messe um 11 Uhr',
      'Wanderweg vom Parkplatz'
    ],
    rating: 5,
    duration: '2-3 Stunden',
    distance: '65 km von Arezzo',
  },

  // === SHOPPEN ===
  {
    id: 'outlet-valdichiana',
    name: 'Valdichiana Outlet Village',
    category: 'shoppen',
    description: 'Designer-Outlet mit über 140 Geschäften - Gucci, Prada, Armani und mehr.',
    longDescription: `Das Outlet liegt zwischen Arezzo und Perugia und bietet italienische und internationale Marken mit 30-70% Rabatt.

**Beliebte Stores:**
- Gucci
- Prada
- Armani
- Furla
- Geox

**Services:**
- Tax Free Shopping
- Kostenloses WLAN
- Restaurants`,
    coordinates: [43.2128, 11.8456],
    address: 'Via Enzo Ferrari, Foiano della Chiana',
    openingHours: 'Täglich 10-20',
    website: 'https://www.valdichianaoutlet.it',
    tips: [
      'Werkstags weniger los',
      'VIP Card an der Info holen',
      'Sale-Zeiten: Jan & Juli'
    ],
    rating: 4,
    distance: '20 km von Arezzo',
  },
  {
    id: 'antikmarkt-arezzo',
    name: 'Fiera Antiquaria',
    category: 'shoppen',
    description: 'Größter Antikmarkt Italiens - jeden ersten Sonntag und Samstag davor.',
    longDescription: `Seit 1968 findet in Arezzo der größte Antik- und Flohmarkt Italiens statt. Über 500 Händler verkaufen Antiquitäten, Vintage und Kuriositäten.

**Wann:**
- Erster Sonntag des Monats
- Samstag davor ab 15 Uhr

**Was gibt es:**
- Möbel
- Schmuck
- Gemälde
- Keramik
- Bücher
- Vintage Mode`,
    coordinates: [43.4621, 11.8833],
    address: 'Centro Storico, Arezzo',
    openingHours: '1. So im Monat: 8-19 Uhr',
    tips: [
      'Früh kommen für beste Auswahl',
      'Handeln ist erlaubt!',
      'Parken außerhalb der Altstadt'
    ],
    rating: 5,
  },

  // === WEITERE STÄDTE ===
  {
    id: 'siena',
    name: 'Siena',
    category: 'sehenswuerdigkeiten',
    description: 'UNESCO-Welterbe mit dem berühmten Campo - Tagesausflug von Arezzo.',
    longDescription: `Siena ist eine der schönsten mittelalterlichen Städte der Welt. Der muschelförmige Piazza del Campo ist das Zentrum der Stadt.

**Must-See:**
- Piazza del Campo
- Dom (Duomo)
- Palazzo Pubblico & Torre del Mangia
- Contrade (Stadtviertel)

**Palio:** Das berühmte Pferderennen findet am 2. Juli und 16. August statt.`,
    coordinates: [43.3186, 11.3306],
    address: 'Siena',
    tips: [
      'Parkhaus "Il Campo"',
      'Panforte als Souvenir',
      'Dom früh morgens'
    ],
    rating: 5,
    duration: 'Ganzer Tag',
    distance: '75 km von Arezzo',
  },
  {
    id: 'san-gimignano',
    name: 'San Gimignano',
    category: 'sehenswuerdigkeiten',
    description: 'Das "Manhattan des Mittelalters" - bekannt für seine Geschlechtertürme.',
    longDescription: `San Gimignano ist berühmt für seine 14 erhaltenen Geschlechtertürme (von ursprünglich 72). Die Stadt ist UNESCO-Welterbe.

**Highlights:**
- Piazza della Cisterna
- Torre Grossa (besteigbar)
- Collegiata (Fresken)
- Vernaccia-Wein probieren

**Tipp:** Auch die beste Eisdiele der Welt ist hier - Gelateria Dondoli!`,
    coordinates: [43.4677, 11.0433],
    address: 'San Gimignano, SI',
    tips: [
      'Eis bei Dondoli!',
      'Vernaccia probieren',
      'Abends weniger Touristen'
    ],
    rating: 5,
    duration: '3-4 Stunden',
    distance: '100 km von Arezzo',
  },
  {
    id: 'montepulciano',
    name: 'Montepulciano',
    category: 'sehenswuerdigkeiten',
    description: 'Renaissancestadt auf dem Hügel - Heimat des Vino Nobile.',
    longDescription: `Montepulciano ist bekannt für seinen Vino Nobile, einen der edelsten Rotweine Italiens. Die Altstadt bietet Renaissance-Architektur und atemberaubende Aussichten.

**Sehenswert:**
- Piazza Grande
- Palazzo Comunale (Aussicht!)
- Duomo
- Weinkeller (Cantine)

**Wein:**
Der Vino Nobile di Montepulciano DOCG ist einer der ältesten Weine Italiens.`,
    coordinates: [43.0933, 11.7869],
    address: 'Montepulciano, SI',
    tips: [
      'Weinkeller besuchen',
      'Pici all\'aglione probieren',
      'Fortezza für Sonnenuntergang'
    ],
    rating: 5,
    duration: '4-5 Stunden',
    distance: '60 km von Arezzo',
  },
  {
    id: 'pienza',
    name: 'Pienza',
    category: 'sehenswuerdigkeiten',
    description: 'Die "ideale Stadt" der Renaissance - berühmt für Pecorino-Käse.',
    longDescription: `Pienza wurde im 15. Jahrhundert von Papst Pius II als "ideale Stadt" umgebaut. Die kleine Stadt ist UNESCO-Welterbe und bekannt für ihren Pecorino-Käse.

**Highlights:**
- Corso Rossellino
- Piazza Pio II
- Palazzo Piccolomini
- Aussicht auf Val d\'Orcia

**Käse:** Der Pecorino di Pienza ist weltberühmt!`,
    coordinates: [43.0769, 11.6792],
    address: 'Pienza, SI',
    tips: [
      'Pecorino kaufen!',
      'Via dell\'Amore für Aussicht',
      'Kombinieren mit Montepulciano'
    ],
    rating: 5,
    duration: '2-3 Stunden',
    distance: '55 km von Arezzo',
  },

  // === PRAKTISCHE ORTE ===
  {
    id: 'krankenhaus-arezzo',
    name: 'Ospedale San Donato',
    category: 'praktisch',
    description: 'Hauptkrankenhaus von Arezzo mit Notaufnahme.',
    coordinates: [43.4517, 11.8731],
    address: 'Via Pietro Nenni, 20, 52100 Arezzo',
    phone: '+39 0575 2551',
    openingHours: '24/7 Notaufnahme',
  },
  {
    id: 'bahnhof-arezzo',
    name: 'Bahnhof Arezzo',
    category: 'praktisch',
    description: 'Hauptbahnhof mit Verbindungen nach Florenz, Rom und Perugia.',
    coordinates: [43.4589, 11.8758],
    address: 'Piazza della Repubblica, Arezzo',
    tips: [
      'Florenz: 1 Stunde',
      'Rom: 2 Stunden',
      'Tickets am Automaten'
    ],
  },
];

// Filter-Funktion
export function getPlacesByCategory(categoryId) {
  return places.filter(place => place.category === categoryId);
}

// Suche
export function searchPlaces(query) {
  const lower = query.toLowerCase();
  return places.filter(place =>
    place.name.toLowerCase().includes(lower) ||
    place.description.toLowerCase().includes(lower)
  );
}
