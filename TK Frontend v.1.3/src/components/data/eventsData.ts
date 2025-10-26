export interface EventData {
  id: string;
  title: Record<'sr' | 'en', string>;
  description: Record<'sr' | 'en', string>;
  category: string;
  date: string;
  time: string;
  location: Record<'sr' | 'en', string>;
  venue: Record<'sr' | 'en', string>;
  price: number;
  image: string;
  featured: boolean;
  isFree?: boolean;
  ticketTypes: {
    name: Record<'sr' | 'en', string>;
    price: number;
    available: number;
  }[];
}

export const categories = ['Koncerti', 'Festivali', 'Predstave', 'Konferencije', 'Sajmovi', 'Nova godina', 'Ostalo'];

export const locations = ['Banja Luka', 'Prijedor'];

export const allEvents: EventData[] = [
  {
    id: '1',
    title: {
      sr: 'Noćni koncer jazz muzike (primjer)',
      en: 'Night Jazz Concert (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Koncerti',
    date: '2025-02-15',
    time: '20:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Dom kulture Banja Luka',
      en: 'Cultural Center Banja Luka'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Regularna karta', en: 'Regular Ticket' },
        price: 25,
        available: 100
      },
      {
        name: { sr: 'VIP karta', en: 'VIP Ticket' },
        price: 45,
        available: 25
      }
    ]
  },
  {
    id: '2',
    title: {
      sr: 'Festival elektronske muzike (primjer)',
      en: 'Electronic Music Festival (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Festivali',
    date: '2025-03-10',
    time: '18:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Gradski park Prijedor',
      en: 'City Park Prijedor'
    },
    price: 65,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Jednodnevna karta', en: 'Single Day Pass' },
        price: 30,
        available: 200
      },
      {
        name: { sr: 'Trodnevna karta', en: 'Three Day Pass' },
        price: 65,
        available: 150
      },
      {
        name: { sr: 'VIP trodnevna', en: 'VIP Three Day' },
        price: 120,
        available: 50
      }
    ]
  },
  {
    id: '3',
    title: {
      sr: 'Pozorišna predstava "Hamlet" (primjer)',
      en: 'Theater Play "Hamlet" (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Predstave',
    date: '2025-02-28',
    time: '19:30',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Narodno pozorište RS',
      en: 'National Theater RS'
    },
    price: 20,
    image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Parter', en: 'Orchestra' },
        price: 20,
        available: 80
      },
      {
        name: { sr: 'Balkon', en: 'Balcony' },
        price: 15,
        available: 60
      },
      {
        name: { sr: 'Loža', en: 'Box Seat' },
        price: 35,
        available: 20
      }
    ]
  },
  {
    id: '4',
    title: {
      sr: 'Konferencija o digitalnoj transformaciji (primjer)',
      en: 'Digital Transformation Conference (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Konferencije',
    date: '2025-03-05',
    time: '09:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Hotel Bosna',
      en: 'Hotel Bosna'
    },
    price: 75,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Standardna karta', en: 'Standard Ticket' },
        price: 75,
        available: 120
      },
      {
        name: { sr: 'Premium karta', en: 'Premium Ticket' },
        price: 150,
        available: 30
      }
    ]
  },
  {
    id: '5',
    title: {
      sr: 'Rok koncert - Tribute to Queen (primjer)',
      en: 'Rock Concert - Tribute to Queen (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Koncerti',
    date: '2025-04-12',
    time: '21:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Dvorana kulture Prijedor',
      en: 'Cultural Hall Prijedor'
    },
    price: 35,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Parter', en: 'Floor Ticket' },
        price: 35,
        available: 150
      },
      {
        name: { sr: 'Galerija', en: 'Gallery' },
        price: 25,
        available: 100
      }
    ]
  },
  {
    id: '6',
    title: {
      sr: 'Sajam domaćih proizvoda (primjer)',
      en: 'Local Products Fair (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Sajmovi',
    date: '2025-03-20',
    time: '10:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Sajmični prostor Banja Luka',
      en: 'Fair Grounds Banja Luka'
    },
    price: 5,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Ulaznica', en: 'Entry Ticket' },
        price: 5,
        available: 500
      },
      {
        name: { sr: 'Porodična karta', en: 'Family Ticket' },
        price: 15,
        available: 100
      }
    ]
  },
  {
    id: '7',
    title: {
      sr: 'Stand-up komedija večer (primjer)',
      en: 'Stand-up Comedy Night (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Ostalo',
    date: '2025-02-22',
    time: '20:30',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Klub Tramvaj',
      en: 'Club Tramvaj'
    },
    price: 15,
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Standardna karta', en: 'Standard Ticket' },
        price: 15,
        available: 80
      }
    ]
  },
  {
    id: '8',
    title: {
      sr: 'Gastronomski festival (primjer)',
      en: 'Gastronomic Festival (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Festivali',
    date: '2025-04-05',
    time: '12:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Trg Krajine',
      en: 'Krajina Square'
    },
    price: 20,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Dnevna karta', en: 'Day Pass' },
        price: 20,
        available: 200
      },
      {
        name: { sr: 'VIP degustacija', en: 'VIP Tasting' },
        price: 50,
        available: 40
      }
    ]
  },
  // NEW EVENTS START HERE
  {
    id: '9',
    title: {
      sr: 'Koncert klasične muzike - Filharmonija (primjer)',
      en: 'Classical Music Concert - Philharmonic (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Koncerti',
    date: '2025-03-18',
    time: '19:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Banjalučka filharmonija',
      en: 'Banja Luka Philharmonic'
    },
    price: 30,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Parter', en: 'Orchestra' },
        price: 30,
        available: 120
      },
      {
        name: { sr: 'Balkon', en: 'Balcony' },
        price: 25,
        available: 80
      }
    ]
  },
  {
    id: '10',
    title: {
      sr: 'Folk koncert - Narodna muzika (primjer)',
      en: 'Folk Concert - Traditional Music (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Koncerti',
    date: '2025-04-20',
    time: '20:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'KUD Prijedor',
      en: 'Cultural Center Prijedor'
    },
    price: 20,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Regularna karta', en: 'Regular Ticket' },
        price: 20,
        available: 200
      }
    ]
  },
  {
    id: '11',
    title: {
      sr: 'Pop koncert - Regionalne zvijezde (primjer)',
      en: 'Pop Concert - Regional Stars (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Koncerti',
    date: '2025-05-15',
    time: '20:30',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Gradski stadion',
      en: 'City Stadium'
    },
    price: 50,
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Tribine', en: 'Stands' },
        price: 50,
        available: 300
      },
      {
        name: { sr: 'Parter', en: 'Floor' },
        price: 80,
        available: 150
      },
      {
        name: { sr: 'VIP', en: 'VIP' },
        price: 120,
        available: 50
      }
    ]
  },
  {
    id: '12',
    title: {
      sr: 'Festival uličnih izvođača (primjer)',
      en: 'Street Performers Festival (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Festivali',
    date: '2025-06-01',
    time: '16:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Centar grada',
      en: 'City Center'
    },
    price: 10,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Dnevna karta', en: 'Day Pass' },
        price: 10,
        available: 400
      },
      {
        name: { sr: 'Porodična karta', en: 'Family Pass' },
        price: 30,
        available: 100
      }
    ]
  },
  {
    id: '13',
    title: {
      sr: 'Festival kratkog filma (primjer)',
      en: 'Short Film Festival (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Festivali',
    date: '2025-04-25',
    time: '18:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Bioskop Kozara',
      en: 'Kozara Cinema'
    },
    price: 12,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Pojedinačna projekcija', en: 'Single Screening' },
        price: 8,
        available: 120
      },
      {
        name: { sr: 'Festival pass', en: 'Festival Pass' },
        price: 12,
        available: 50
      }
    ]
  },
  {
    id: '14',
    title: {
      sr: 'Mjuzikl "Mamma Mia" (primjer)',
      en: 'Musical "Mamma Mia" (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Predstave',
    date: '2025-03-12',
    time: '19:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Dom kulture Banja Luka',
      en: 'Cultural Center Banja Luka'
    },
    price: 28,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    ticketTypes: [
      {
        name: { sr: 'Parter', en: 'Orchestra' },
        price: 28,
        available: 100
      },
      {
        name: { sr: 'Balkon', en: 'Balcony' },
        price: 22,
        available: 80
      }
    ]
  },
  {
    id: '15',
    title: {
      sr: 'Dječja predstava "Mali princ" (primjer)',
      en: 'Children\'s Play "The Little Prince" (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Predstave',
    date: '2025-03-30',
    time: '17:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Dječji kulturni centar',
      en: 'Children\'s Cultural Center'
    },
    price: 8,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Dječja karta', en: 'Children\'s Ticket' },
        price: 8,
        available: 150
      },
      {
        name: { sr: 'Odrasla karta', en: 'Adult Ticket' },
        price: 12,
        available: 100
      }
    ]
  },
  {
    id: '16',
    title: {
      sr: 'Konferencija o održivom razvoju (primjer)',
      en: 'Sustainable Development Conference (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Konferencije',
    date: '2025-04-08',
    time: '09:00',
    location: {
      sr: 'Prijedor',
      en: 'Prijedor'
    },
    venue: {
      sr: 'Hotel Una',
      en: 'Hotel Una'
    },
    price: 60,
    image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Standardna karta', en: 'Standard Ticket' },
        price: 60,
        available: 100
      },
      {
        name: { sr: 'Studentska karta', en: 'Student Ticket' },
        price: 30,
        available: 50
      }
    ]
  },
  {
    id: '17',
    title: {
      sr: 'Sajam knjiga i izdavaštva (primjer)',
      en: 'Book and Publishing Fair (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Sajmovi',
    date: '2025-05-10',
    time: '10:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Biblioteka "Petar Kočić"',
      en: 'Library "Petar Kočić"'
    },
    price: 3,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Ulaznica', en: 'Entry Ticket' },
        price: 3,
        available: 300
      }
    ]
  },
  {
    id: '18',
    title: {
      sr: 'Radionica fotografije (primjer)',
      en: 'Photography Workshop (primjer)'
    },
    description: {
      sr: 'Ovo je primjer događaja koji smo privremeno ubacili na platformu jer još uvijek čekamo početak pravih događaja. Imajte u vidu da za ove događaje nije povezan sistem za plaćanje i da je trenutno čitav proces pokaznog karaktera.\n\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.\n\nUkoliko znate nekoga kome su potrebne usluge online prodaje karata za događaje, ljubazno Vas molimo da nas kontaktirate putem maila info@tvojakarta.com ili da proslijedite naš kontakt odgovarajućoj osobi.',
      en: 'This is an example event that we have temporarily added to the platform as we are still waiting for real events to begin. Please note that the payment system is not connected for these events and the entire process is currently for demonstration purposes only.\n\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.\n\nIf you know someone who needs online ticket sales services for events, please contact us via email at info@tvojakarta.com or forward our contact to the appropriate person.'
    },
    category: 'Ostalo',
    date: '2025-04-15',
    time: '10:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Foto klub Banja Luka',
      en: 'Photo Club Banja Luka'
    },
    price: 40,
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    ticketTypes: [
      {
        name: { sr: 'Kompletan paket', en: 'Complete Package' },
        price: 40,
        available: 25
      }
    ]
  },
  {
    id: '19',
    title: {
      sr: 'Besplatna IT konferencija - Inovacije i tehnologija (primjer)',
      en: 'Free IT Conference - Innovation and Technology (primjer)'
    },
    description: {
      sr: 'Pridružite se nama na besplatnoj IT konferenciji koju organizujemo za lokalne programere, studente i sve zainteresovane za tehnologiju. Ova konferencija je potpuno besplatna, potrebna je samo rezervacija mjesta.\\n\\nNa konferenciji će govoriti poznati stručnjaci iz oblasti softverskog razvoja, veštačke inteligencije i digitalnih inovacija. Ovo je izvrsna prilika za umrežavanje i učenje o najnovijim tehnološkim trendovima.\\n\\nUkoliko želite da budete obaviješteni o novim događajima u vašoj blizini, prijavite se na naš newsletter putem polja koje možete pronaći u dnu sajta ili na našoj kontakt stranici.',
      en: 'Join us at a free IT conference organized for local developers, students, and anyone interested in technology. This conference is completely free, only seat reservation is required.\\n\\nThe conference will feature renowned experts in software development, artificial intelligence, and digital innovation. This is an excellent opportunity for networking and learning about the latest technology trends.\\n\\nIf you would like to be notified about new events in your area, subscribe to our newsletter through the field you can find at the bottom of the site or on our contact page.'
    },
    category: 'Konferencije',
    date: '2025-03-25',
    time: '09:00',
    location: {
      sr: 'Banja Luka',
      en: 'Banja Luka'
    },
    venue: {
      sr: 'Univerzitet u Banjoj Luci - IT centar',
      en: 'University of Banja Luka - IT Center'
    },
    price: 0,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    isFree: true,
    ticketTypes: [
      {
        name: { sr: 'Rezervacija mjesta', en: 'Seat Reservation' },
        price: 0,
        available: 150
      }
    ]
  },

];

export function searchEvents(query: string, limit?: number): EventData[] {
  const searchTerm = query.toLowerCase();
  const filtered = allEvents.filter(event =>
    event.title.sr.toLowerCase().includes(searchTerm) ||
    event.title.en.toLowerCase().includes(searchTerm) ||
    event.description.sr.toLowerCase().includes(searchTerm) ||
    event.description.en.toLowerCase().includes(searchTerm) ||
    event.category.toLowerCase().includes(searchTerm) ||
    event.location.sr.toLowerCase().includes(searchTerm) ||
    event.location.en.toLowerCase().includes(searchTerm) ||
    event.venue.sr.toLowerCase().includes(searchTerm) ||
    event.venue.en.toLowerCase().includes(searchTerm)
  );
  
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getEventById(id: string): EventData | undefined {
  return allEvents.find(event => event.id === id);
}

export function getEventsByCategory(category: string): EventData[] {
  return allEvents.filter(event => event.category === category);
}

export function getFeaturedEvents(): EventData[] {
  return allEvents.filter(event => event.featured);
}

export function getUpcomingEvents(): EventData[] {
  const now = new Date();
  return allEvents
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// Helper function to get localized values (pure function, no hooks)
export function localizeEvent(event: EventData, language: 'sr' | 'en') {
  return {
    ...event,
    localizedTitle: event.title[language],
    localizedDescription: event.description[language],
    localizedLocation: event.location[language],
    localizedVenue: event.venue[language],
    localizedTicketTypes: event.ticketTypes.map(ticket => ({
      ...ticket,
      localizedName: ticket.name[language]
    }))
  };
}