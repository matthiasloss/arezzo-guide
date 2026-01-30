// Praktische Informationen

export const emergencyNumbers = [
  { name: 'Notruf (Polizei)', number: '112', description: 'Europäischer Notruf' },
  { name: 'Notruf (Rettung)', number: '118', description: 'Krankenwagen' },
  { name: 'Feuerwehr', number: '115', description: 'Vigili del Fuoco' },
  { name: 'Carabinieri', number: '112', description: 'Militärpolizei' },
  { name: 'Polizia', number: '113', description: 'Staatspolizei' },
  { name: 'Deutsche Botschaft Rom', number: '+39 06 49 21 31', description: '24h Notruf' },
  { name: 'Österreichische Botschaft', number: '+39 06 844 01 41', description: 'Wien/Rom' },
  { name: 'Schweizer Botschaft', number: '+39 06 80 95 71', description: 'Bern/Rom' },
];

export const hospitals = [
  {
    name: 'Ospedale San Donato',
    address: 'Via Pietro Nenni 20, Arezzo',
    phone: '+39 0575 2551',
    coordinates: [43.4517, 11.8731],
    emergency: true,
    description: 'Hauptkrankenhaus mit 24h Notaufnahme',
  },
  {
    name: 'Guardia Medica Arezzo',
    address: 'Verschiedene Standorte',
    phone: '+39 0575 379300',
    description: 'Ärztlicher Bereitschaftsdienst (nachts & Wochenende)',
    hours: 'Mo-Fr 20-8, Sa-So 24h',
  },
];

export const pharmacies = [
  {
    name: 'Farmacia Comunale 1',
    address: 'Via Roma 6, Arezzo',
    phone: '+39 0575 24108',
    hours: 'Mo-Sa 8:30-13, 16-20',
    coordinates: [43.4620, 11.8835],
  },
  {
    name: 'Farmacia Nottuma (24h)',
    address: 'Piazza Monaco 2, Arezzo',
    phone: '+39 0575 902466',
    hours: '24 Stunden',
    coordinates: [43.4601, 11.8812],
    note: 'Nachtapotheke',
  },
];

export const transport = {
  train: {
    station: 'Stazione Arezzo',
    address: 'Piazza della Repubblica',
    coordinates: [43.4589, 11.8758],
    connections: [
      { destination: 'Firenze SMN', duration: '60 Min', frequency: 'Alle 30 Min' },
      { destination: 'Roma Termini', duration: '2 Std', frequency: 'Stündlich' },
      { destination: 'Perugia', duration: '70 Min', frequency: 'Stündlich' },
      { destination: 'Cortona', duration: '25 Min', frequency: 'Alle 2 Std' },
    ],
    tips: [
      'Tickets vor Einsteigen am Automaten entwerten!',
      'Regionale Züge brauchen keine Reservierung',
      'App "Trenitalia" für Tickets',
    ],
  },
  bus: {
    company: 'Autolinee Toscane',
    station: 'Autostazione Arezzo',
    address: 'Piazza della Repubblica (beim Bahnhof)',
    website: 'https://www.at-bus.it',
    tips: [
      'Tickets in Tabacchi kaufen',
      'Linie LFI nach Cortona',
      'Sonntags eingeschränkter Fahrplan',
    ],
  },
  car: {
    rentals: [
      { name: 'Hertz', location: 'Bahnhof', phone: '+39 0575 354232' },
      { name: 'Avis', location: 'Via Fiorentina', phone: '+39 0575 354064' },
      { name: 'Europcar', location: 'Bahnhof', phone: '+39 0575 901959' },
    ],
    parking: [
      { name: 'Parcheggio Eden', type: 'Tiefgarage', price: '€1.50/Std', coordinates: [43.4598, 11.8847] },
      { name: 'Parcheggio Pietri', type: 'Tiefgarage', price: '€1/Std', coordinates: [43.4645, 11.8789] },
      { name: 'Parcheggio Mecenate', type: 'Außen', price: 'Gratis', coordinates: [43.4567, 11.8901], note: 'Etwas außerhalb' },
    ],
    tips: [
      'ZTL: Altstadt für Autos gesperrt!',
      'Weiße Linien = Kostenlos parken',
      'Blaue Linien = Kostenpflichtig',
      'Gelbe Linien = Anwohner only',
    ],
  },
};

export const usefulPhrases = [
  { german: 'Guten Tag', italian: 'Buongiorno', pronunciation: 'Buon-DSHOR-no' },
  { german: 'Guten Abend', italian: 'Buonasera', pronunciation: 'Buona-SE-ra' },
  { german: 'Danke', italian: 'Grazie', pronunciation: 'GRA-tsie' },
  { german: 'Bitte', italian: 'Prego', pronunciation: 'PRE-go' },
  { german: 'Entschuldigung', italian: 'Mi scusi', pronunciation: 'Mi SKU-si' },
  { german: 'Sprechen Sie Deutsch?', italian: 'Parla tedesco?', pronunciation: 'PAR-la te-DES-ko' },
  { german: 'Ich verstehe nicht', italian: 'Non capisco', pronunciation: 'Non ka-PIS-ko' },
  { german: 'Wie viel kostet das?', italian: 'Quanto costa?', pronunciation: 'KWAN-to KOS-ta' },
  { german: 'Die Rechnung, bitte', italian: 'Il conto, per favore', pronunciation: 'Il KON-to per fa-VO-re' },
  { german: 'Wo ist...?', italian: 'Dov\'è...?', pronunciation: 'Do-VE' },
  { german: 'Hilfe!', italian: 'Aiuto!', pronunciation: 'a-IU-to' },
  { german: 'Ich brauche einen Arzt', italian: 'Ho bisogno di un medico', pronunciation: 'O bi-SO-njo di un ME-di-ko' },
];

export const foodVocabulary = [
  { german: 'Wasser (still)', italian: 'Acqua naturale', pronunciation: 'AK-wa na-tu-RA-le' },
  { german: 'Wasser (sprudelnd)', italian: 'Acqua frizzante', pronunciation: 'AK-wa frit-TSAN-te' },
  { german: 'Rotwein', italian: 'Vino rosso', pronunciation: 'VI-no ROS-so' },
  { german: 'Weißwein', italian: 'Vino bianco', pronunciation: 'VI-no BIAN-ko' },
  { german: 'Bier', italian: 'Birra', pronunciation: 'BIR-ra' },
  { german: 'Kaffee (Espresso)', italian: 'Caffè', pronunciation: 'kaf-FE' },
  { german: 'Milchkaffee', italian: 'Caffè latte', pronunciation: 'kaf-FE LAT-te' },
  { german: 'Vorspeise', italian: 'Antipasto', pronunciation: 'anti-PAS-to' },
  { german: 'Erster Gang (Pasta)', italian: 'Primo', pronunciation: 'PRI-mo' },
  { german: 'Zweiter Gang (Fleisch)', italian: 'Secondo', pronunciation: 'se-KON-do' },
  { german: 'Beilage', italian: 'Contorno', pronunciation: 'kon-TOR-no' },
  { german: 'Nachtisch', italian: 'Dolce', pronunciation: 'DOL-tsche' },
];

export const localCustoms = [
  {
    title: 'Essen & Trinken',
    tips: [
      'Cappuccino nur zum Frühstück, danach Espresso',
      'Coperto (Gedeck) ist normal und legal',
      'Trinkgeld ist nicht üblich, aber willkommen',
      'Aperitivo: Getränk + Snacks ab 18 Uhr',
      'Abendessen erst ab 19:30-20 Uhr',
    ],
  },
  {
    title: 'Kirchen & Klöster',
    tips: [
      'Schultern und Knie bedecken',
      'Keine Fotos während der Messe',
      'Leise sein',
      'Kein Essen/Trinken in Kirchen',
    ],
  },
  {
    title: 'Geschäfte',
    tips: [
      'Mittagspause (Riposo): ca. 13-16 Uhr',
      'Sonntags meist geschlossen',
      'Montag vormittag oft zu',
      'In Bäckereien: Nummer ziehen',
    ],
  },
  {
    title: 'Allgemein',
    tips: [
      '"Buongiorno" beim Betreten von Läden',
      'Händeschütteln zur Begrüßung üblich',
      'Lautes Sprechen ist normal',
      'Geduld bei Bürokratie',
    ],
  },
];

export const weather = {
  spring: {
    months: 'März - Mai',
    temp: '12-22°C',
    description: 'Mild, manchmal Regen, perfekt für Wanderungen',
    tips: ['Regenjacke einpacken', 'Beste Zeit für Wildblumen'],
  },
  summer: {
    months: 'Juni - August',
    temp: '25-35°C',
    description: 'Heiß und trocken, touristisch',
    tips: ['Früh morgens aktiv sein', 'Siesta halten', 'Viel Wasser trinken'],
  },
  autumn: {
    months: 'September - November',
    temp: '12-22°C',
    description: 'Weinlese, Trüffelsaison, goldene Farben',
    tips: ['Beste Zeit für Weintouren', 'Trüffel probieren'],
  },
  winter: {
    months: 'Dezember - Februar',
    temp: '3-12°C',
    description: 'Ruhig, wenige Touristen, manche Orte geschlossen',
    tips: ['Warme Kleidung', 'Weihnachtsmärkte besuchen'],
  },
};

export const events = [
  { name: 'Fiera Antiquaria', date: '1. Sonntag jeden Monats', location: 'Arezzo', description: 'Größter Antikmarkt Italiens' },
  { name: 'Giostra del Saracino', date: 'Juni & September', location: 'Arezzo', description: 'Mittelalterliches Ritterturnier' },
  { name: 'Palio di Siena', date: '2. Juli & 16. August', location: 'Siena', description: 'Berühmtes Pferderennen' },
  { name: 'Sagra della Bistecca', date: 'August', location: 'Cortona', description: 'Steak-Festival' },
  { name: 'Bravio delle Botti', date: 'Letzter Sonntag August', location: 'Montepulciano', description: 'Fassrollen-Wettbewerb' },
];
