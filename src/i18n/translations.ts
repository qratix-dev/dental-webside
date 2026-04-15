export type Language = 'en' | 'de' | 'fr' | 'tr'

export interface Translations {
  nav: {
    services: string
    about: string
    prices: string
    doctors: string
    reviews: string
    beforeAfter: string
    getQuote: string
  }
  hero: {
    eyebrow: string
    line1: string
    line2: string
    subtitle: string
    ctaQuote: string
    ctaWhatsapp: string
    statPatients: string
    statPatientsLabel: string
    statExperience: string
    statExperienceLabel: string
    statSatisfaction: string
    statSatisfactionLabel: string
  }
  services: {
    eyebrow: string
    titleEm: string
    titleRest: string
    subtitle: string
    mostPopular: string
    learnMore: string
    items: Record<string, { name: string; description: string }>
  }
  about: {
    label: string
    title: string
    titleGold: string
    body: string
    checkItems: string[]
    partnersLabel: string
  }
  doctors: {
    label: string
    titleEm: string
    titleRest: string
    subtitle: string
    clinicLabel: string
    titles: Record<string, string>
  }
  beforeAfter: {
    label: string
    title: string
    titleGold: string
    subtitle: string
    durationPrefix: string
    treatments: { id: number; name: string; duration: string }[]
  }
  pricing: {
    label: string
    titleEm: string
    titleRest: string
    subtitle: string
    footerNote: string
    categories: Record<string, string>
  }
  testimonials: {
    label: string
    title: string
    titleGold: string
    subtitle: string
    stats: { value: string; label: string }[]
    bottomText: string
    ctaBtn: string
  }
  contact: {
    block1Label: string
    block1Title: string
    block1TitleGold: string
    block1Subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    datePlaceholder: string
    timePlaceholder: string
    messagePlaceholder: string
    attachTitle: string
    attachSub: string
    privacyText: string
    privacyLink: string
    submitBtn: string
    successMsg: string
    block2Label: string
    block2Title: string
    block2TitleGold: string
    block2Subtitle: string
    addressLabel: string
    phoneLabel: string
    emailLabel: string
    block3Title: string
    emergencyNote: string
    todayLabel: string
    closedLabel: string
    daysOfWeek: string[]
    block4Title: string
    block4Subtitle: string
    block5Label: string
    block5Title: string
    block5TitleGold: string
    block5Subtitle: string
  }
  footer: {
    tagline: string
    navigationTitle: string
    servicesTitle: string
    contactTitle: string
    hours: string
    copyright: string
    privacy: string
    terms: string
    links: {
      services: string
      about: string
      prices: string
      doctors: string
      reviews: string
      beforeAfter: string
      contact: string
    }
  }
  blog: {
    label: string
    title: string
    titleGold: string
    subtitle: string
    readMore: string
    loadMore: string
    backBtn: string
    publishedOn: string
    relatedTitle: string
    categories: {
      all: string
      implants: string
      cosmetic: string
      whitening: string
      oral: string
    }
  }
}

const en: Translations = {
  nav: {
    services: 'Services',
    about: 'About Us',
    prices: 'Prices',
    doctors: 'Our Doctors',
    reviews: 'Patient Reviews',
    beforeAfter: 'Before & After',
    getQuote: 'Contact Us',
  },
  hero: {
    eyebrow: 'ANTALYA · TURKEY',
    line1: 'Your Smile',
    line2: 'Our Passion.',
    subtitle: 'Perfection embodied in your smile. Experience world-class dental care with a gentle, luxury touch.',
    ctaQuote: 'Free Consultation',
    ctaWhatsapp: 'WhatsApp Us →',
    statPatients: '2,400+',
    statPatientsLabel: 'Patients',
    statExperience: '12 Years',
    statExperienceLabel: 'Experience',
    statSatisfaction: '98%',
    statSatisfactionLabel: 'Satisfaction',
  },
  services: {
    eyebrow: 'WHAT WE OFFER',
    titleEm: 'Our',
    titleRest: 'Services',
    subtitle: 'Seven specialist treatments, one clinic — all in the heart of Antalya.',
    mostPopular: 'Most Popular',
    learnMore: 'Learn More',
    items: {
      implants: {
        name: 'Dental Implants',
        description: 'Permanent, natural-looking tooth replacements using titanium implants — restore your smile and confidence in days.',
      },
      veneers: {
        name: 'Dental Veneers',
        description: 'Ultra-thin porcelain shells crafted to perfection for a flawless, celebrity smile.',
      },
      whitening: {
        name: 'Teeth Whitening',
        description: 'Professional-grade laser and bleaching treatments for a noticeably brighter, whiter smile.',
      },
      crowns: {
        name: 'Dental Crowns',
        description: 'Custom-crafted ceramic crowns that restore damaged teeth to their full beauty and function.',
      },
      sinus: {
        name: 'Sinus Lifting',
        description: 'Advanced surgical procedure creating adequate bone volume for safe implant placement.',
      },
      bone: {
        name: 'Bone Grafting',
        description: 'Regenerative bone procedures ensuring optimal support for long-lasting dental implants.',
      },
      zygomatic: {
        name: 'Zygomatic Implants',
        description: 'Specialist implants anchored in the cheekbone for patients with severe bone loss.',
      },
    },
  },
  about: {
    label: 'ABOUT US',
    title: 'We Care About Your',
    titleGold: 'Dental Health',
    body: 'At Paris Smiles Clinic in Antalya, Turkey, we combine cutting-edge dental technology with a warm, welcoming environment. Our team of experienced dental specialists delivers personalised care that exceeds expectations.',
    checkItems: ['Modern Equipment', 'Expert Specialists', 'Gentle Care', 'Comfortable Clinic'],
    partnersLabel: 'Our Partners',
  },
  doctors: {
    label: 'MEET OUR TEAM',
    titleEm: 'Our',
    titleRest: 'Doctors',
    subtitle: 'Meet our experienced dental specialists in Antalya, Turkey — experts in cosmetic dentistry, implant surgery, and smile design.',
    clinicLabel: 'Paris Smiles Clinic · Antalya',
    titles: {
      'Dt. Abdullah Fida': 'Cosmetic Dentist',
      'Dt. Hatice Gül Dal': 'Cosmetic Dentist',
      'Dt. Murat Demiral': 'Cosmetic Dentist',
      'Dt. Nevzat Çakmak': 'Oral and Maxillofacial Surgeon',
    },
  },
  beforeAfter: {
    label: 'REAL RESULTS',
    title: 'Before &',
    titleGold: 'After',
    subtitle: 'See real dental transformation results from our clinic in Turkey.',
    durationPrefix: 'Treatment duration:',
    treatments: [
      { id: 1, name: 'Dental Veneers', duration: '5 Days' },
      { id: 2, name: 'Dental Implants', duration: '7 Days' },
      { id: 3, name: 'Teeth Whitening', duration: '1 Day' },
    ],
  },
  pricing: {
    label: 'PRICING IN TURKEY',
    titleEm: 'Dental Treatment',
    titleRest: 'Prices',
    subtitle: 'Affordable dental treatment prices in Turkey with no hidden fees. Compare costs for implants, veneers, crowns, and whitening in GBP, USD, and EUR.',
    footerNote: 'All prices include free consultation. Payment plans available.',
    categories: {
      'implants-surgical': 'Implants & Surgical',
      'veneers-crowns': 'Veneers & Crowns',
      'whitening-cleaning': 'Whitening & Cleaning',
      'general': 'General Dentistry',
    },
  },
  testimonials: {
    label: 'TESTIMONIALS',
    title: 'What Our Patients',
    titleGold: 'Say',
    subtitle: 'Real experiences from real patients. Every smile tells a story — here are some of ours.',
    stats: [
      { value: '2,400+', label: 'Happy Patients' },
      { value: '4.9 / 5', label: 'Average Rating' },
      { value: '98%', label: 'Would Recommend' },
      { value: '12 Yrs', label: 'Of Excellence' },
    ],
    bottomText: 'Join thousands of patients who transformed their smile in Antalya.',
    ctaBtn: 'Start Your Smile Journey',
  },
  contact: {
    block1Label: 'SEND A MESSAGE',
    block1Title: 'Leave a',
    block1TitleGold: 'Message',
    block1Subtitle: "Whether you're looking for a consultation, a second opinion, or ready to start your treatment, we're here to help. Fill in the form and our team will get back to you within 24 hours.",
    namePlaceholder: 'Full name',
    emailPlaceholder: 'Your mail address',
    phonePlaceholder: 'Phone number',
    datePlaceholder: 'Pick a date',
    timePlaceholder: 'Pick a time',
    messagePlaceholder: "Tell us why you'd like to get in touch...",
    attachTitle: 'Attach Files',
    attachSub: 'or drag and drop – PDF, JPG, PNG, WEBP, DOC up to 10MB each',
    privacyText: 'I agree to the processing of my personal data in accordance with the',
    privacyLink: 'Privacy Policy',
    submitBtn: 'Send Message',
    successMsg: "Message sent! We'll get back to you within 24 hours.",
    block2Label: 'CONTACT',
    block2Title: 'Get in',
    block2TitleGold: 'Touch',
    block2Subtitle: "We'd love to hear from you. Reach out to us for appointments, enquiries, or any questions about our dental services.",
    addressLabel: 'ADDRESS',
    phoneLabel: 'PHONE',
    emailLabel: 'EMAIL',
    block3Title: 'Working Hours',
    emergencyNote: 'For emergencies, please do not hesitate to contact us',
    todayLabel: 'Today',
    closedLabel: 'Closed',
    daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    block4Title: 'Follow Us',
    block4Subtitle: 'Stay updated with our latest cases and patient stories.',
    block5Label: 'OUR LOCATION',
    block5Title: 'Visit Our',
    block5TitleGold: 'Clinic',
    block5Subtitle: 'Located in the heart of Antalya, our clinic is easily accessible from all major hotels and landmarks.',
  },
  footer: {
    tagline: 'Professional dental care with a luxury touch. Your smile is our priority.',
    navigationTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    hours: 'Mon–Sat 09:00–19:00 · Sun Closed',
    copyright: '© 2026 Paris Smiles Clinic. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    links: {
      services: 'Services',
      about: 'About Us',
      prices: 'Prices',
      doctors: 'Our Doctors',
      reviews: 'Patient Reviews',
      beforeAfter: 'Before & After',
      contact: 'Contact Us',
    },
  },
  blog: {
    label: 'OUR BLOG',
    title: 'Dental',
    titleGold: 'Insights',
    subtitle: 'Expert advice, patient stories, and the latest in dental innovation from our specialists in Antalya.',
    readMore: 'Read More →',
    loadMore: 'Load More Articles',
    backBtn: '← Back to Blog',
    publishedOn: 'Published on',
    relatedTitle: 'Related Articles',
    categories: {
      all: 'All',
      implants: 'Dental Implants',
      cosmetic: 'Cosmetic Dentistry',
      whitening: 'Teeth Whitening',
      oral: 'Oral Health',
    },
  },
}

const de: Translations = {
  nav: {
    services: 'Leistungen',
    about: 'Über uns',
    prices: 'Preise',
    doctors: 'Unsere Ärzte',
    reviews: 'Patientenbewertungen',
    beforeAfter: 'Vorher & Nachher',
    getQuote: 'Kontakt',
  },
  hero: {
    eyebrow: 'ANTALYA · TÜRKEI',
    line1: 'Ihr Lächeln',
    line2: 'Unsere Leidenschaft.',
    subtitle: 'Perfektion in Ihrem Lächeln. Erleben Sie erstklassige Zahnpflege mit einem sanften, luxuriösen Touch.',
    ctaQuote: 'Angebot einholen',
    ctaWhatsapp: 'WhatsApp →',
    statPatients: '2.400+',
    statPatientsLabel: 'Patienten',
    statExperience: '12 Jahre',
    statExperienceLabel: 'Erfahrung',
    statSatisfaction: '98%',
    statSatisfactionLabel: 'Zufriedenheit',
  },
  services: {
    eyebrow: 'UNSER ANGEBOT',
    titleEm: 'Unsere',
    titleRest: 'Leistungen',
    subtitle: 'Sieben Fachbehandlungen, eine Klinik — im Herzen von Antalya.',
    mostPopular: 'Beliebteste',
    learnMore: 'Mehr erfahren',
    items: {
      implants: {
        name: 'Zahnimplantate',
        description: 'Dauerhafte, natürlich aussehende Zahnersatzlösungen mit Titanium-Implantaten — Ihr Lächeln in wenigen Tagen wiederhergestellt.',
      },
      veneers: {
        name: 'Zahnveneers',
        description: 'Hauchdünne Porzellanschalen für ein makelloses, strahlendes Lächeln nach Maß.',
      },
      whitening: {
        name: 'Zahnaufhellung',
        description: 'Professionelle Laser- und Bleaching-Behandlungen für ein deutlich weißeres, strahlendes Lächeln.',
      },
      crowns: {
        name: 'Zahnkronen',
        description: 'Maßgefertigte Keramikkronen, die beschädigte Zähne in ihrer vollen Schönheit und Funktion wiederherstellen.',
      },
      sinus: {
        name: 'Sinuslift',
        description: 'Fortschrittlicher chirurgischer Eingriff zur Schaffung ausreichenden Knochenvolumens für sichere Implantatplatzierung.',
      },
      bone: {
        name: 'Knochenaufbau',
        description: 'Regenerative Knocheneingriffe für optimale Unterstützung dauerhafter Zahnimplantate.',
      },
      zygomatic: {
        name: 'Zygomatische Implantate',
        description: 'Spezialimplantate, die im Jochbein verankert werden — für Patienten mit schwerem Knochenverlust.',
      },
    },
  },
  about: {
    label: 'ÜBER UNS',
    title: 'Wir kümmern uns um Ihre',
    titleGold: 'Zahngesundheit',
    body: 'Bei Paris Smiles Clinic in Antalya, Türkei, verbinden wir modernste Zahntechnologie mit einer warmen, einladenden Atmosphäre. Unser Team erfahrener Zahnspezialisten bietet personalisierte Behandlungen, die Erwartungen übertreffen.',
    checkItems: ['Moderne Ausstattung', 'Experten-Spezialisten', 'Sanfte Behandlung', 'Komfortable Klinik'],
    partnersLabel: 'Unsere Partner',
  },
  doctors: {
    label: 'UNSER TEAM',
    titleEm: 'Unsere',
    titleRest: 'Ärzte',
    subtitle: 'Lernen Sie unsere erfahrenen Zahnspezialisten in Antalya, Türkei kennen — Experten für kosmetische Zahnheilkunde, Implantologie und Smile Design.',
    clinicLabel: 'Paris Smiles Clinic · Antalya',
    titles: {
      'Dt. Abdullah Fida': 'Kosmetischer Zahnarzt',
      'Dt. Hatice Gül Dal': 'Kosmetische Zahnärztin',
      'Dt. Murat Demiral': 'Kosmetischer Zahnarzt',
      'Dt. Nevzat Çakmak': 'Mund-, Kiefer- und Gesichtschirurg',
    },
  },
  beforeAfter: {
    label: 'ECHTE ERGEBNISSE',
    title: 'Vorher &',
    titleGold: 'Nachher',
    subtitle: 'Sehen Sie echte Zahntransformationsergebnisse aus unserer Klinik in der Türkei.',
    durationPrefix: 'Behandlungsdauer:',
    treatments: [
      { id: 1, name: 'Zahnveneers', duration: '5 Tage' },
      { id: 2, name: 'Zahnimplantate', duration: '7 Tage' },
      { id: 3, name: 'Zahnaufhellung', duration: '1 Tag' },
    ],
  },
  pricing: {
    label: 'PREISE IN DER TÜRKEI',
    titleEm: 'Zahnbehandlung',
    titleRest: 'Preise',
    subtitle: 'Günstige Zahnbehandlungspreise in der Türkei ohne versteckte Kosten. Vergleichen Sie Kosten für Implantate, Veneers, Kronen und Bleaching in GBP, USD und EUR.',
    footerNote: 'Alle Preise beinhalten eine kostenlose Beratung. Ratenzahlung möglich.',
    categories: {
      'implants-surgical': 'Implantate & Chirurgie',
      'veneers-crowns': 'Veneers & Kronen',
      'whitening-cleaning': 'Aufhellung & Reinigung',
      'general': 'Allgemeine Zahnheilkunde',
    },
  },
  testimonials: {
    label: 'BEWERTUNGEN',
    title: 'Was unsere Patienten',
    titleGold: 'sagen',
    subtitle: 'Echte Erfahrungen von echten Patienten. Jedes Lächeln erzählt eine Geschichte — hier sind einige davon.',
    stats: [
      { value: '2.400+', label: 'Glückliche Patienten' },
      { value: '4,9 / 5', label: 'Durchschnittsbewertung' },
      { value: '98%', label: 'Würden empfehlen' },
      { value: '12 J.', label: 'Exzellenz' },
    ],
    bottomText: 'Schließen Sie sich Tausenden von Patienten an, die ihr Lächeln in Antalya verwandelt haben.',
    ctaBtn: 'Starten Sie Ihre Lächelreise',
  },
  contact: {
    block1Label: 'NACHRICHT SENDEN',
    block1Title: 'Eine',
    block1TitleGold: 'Nachricht hinterlassen',
    block1Subtitle: 'Ob Sie eine Beratung, eine zweite Meinung suchen oder bereit sind, Ihre Behandlung zu beginnen — wir sind für Sie da. Füllen Sie das Formular aus und unser Team meldet sich innerhalb von 24 Stunden.',
    namePlaceholder: 'Vollständiger Name',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    phonePlaceholder: 'Telefonnummer',
    datePlaceholder: 'Datum wählen',
    timePlaceholder: 'Uhrzeit wählen',
    messagePlaceholder: 'Wie können wir Ihnen helfen?',
    attachTitle: 'Dateien anhängen',
    attachSub: 'oder per Drag & Drop – PDF, JPG, PNG, WEBP, DOC bis zu 10 MB',
    privacyText: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der',
    privacyLink: 'Datenschutzerklärung',
    submitBtn: 'Nachricht senden',
    successMsg: 'Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.',
    block2Label: 'KONTAKT',
    block2Title: 'Nehmen Sie',
    block2TitleGold: 'Kontakt auf',
    block2Subtitle: 'Wir freuen uns von Ihnen zu hören. Kontaktieren Sie uns für Termine, Anfragen oder Fragen zu unseren Zahnleistungen.',
    addressLabel: 'ADRESSE',
    phoneLabel: 'TELEFON',
    emailLabel: 'E-MAIL',
    block3Title: 'Öffnungszeiten',
    emergencyNote: 'Für Notfälle zögern Sie bitte nicht, uns zu kontaktieren',
    todayLabel: 'Heute',
    closedLabel: 'Geschlossen',
    daysOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    block4Title: 'Folgen Sie uns',
    block4Subtitle: 'Bleiben Sie über unsere neuesten Fälle und Patientengeschichten informiert.',
    block5Label: 'UNSER STANDORT',
    block5Title: 'Besuchen Sie',
    block5TitleGold: 'unsere Klinik',
    block5Subtitle: 'Im Herzen von Antalya gelegen, ist unsere Klinik von allen großen Hotels und Sehenswürdigkeiten leicht erreichbar.',
  },
  footer: {
    tagline: 'Professionelle Zahnpflege mit luxuriösem Touch. Ihr Lächeln ist unsere Priorität.',
    navigationTitle: 'Navigation',
    servicesTitle: 'Leistungen',
    contactTitle: 'Kontakt',
    hours: 'Mo–Sa 09:00–19:00 · So geschlossen',
    copyright: '© 2026 Paris Smiles Clinic. Alle Rechte vorbehalten.',
    privacy: 'Datenschutz',
    terms: 'AGB',
    links: {
      services: 'Leistungen',
      about: 'Über uns',
      prices: 'Preise',
      doctors: 'Unsere Ärzte',
      reviews: 'Patientenbewertungen',
      beforeAfter: 'Vorher & Nachher',
      contact: 'Kontakt',
    },
  },
  blog: {
    label: 'UNSER BLOG',
    title: 'Zahn',
    titleGold: 'Einblicke',
    subtitle: 'Expertenrat, Patientengeschichten und die neuesten Entwicklungen in der Zahnmedizin von unseren Spezialisten in Antalya.',
    readMore: 'Mehr lesen →',
    loadMore: 'Mehr Artikel laden',
    backBtn: '← Zurück zum Blog',
    publishedOn: 'Veröffentlicht am',
    relatedTitle: 'Ähnliche Artikel',
    categories: {
      all: 'Alle',
      implants: 'Zahnimplantate',
      cosmetic: 'Ästhetische Zahnheilkunde',
      whitening: 'Zahnaufhellung',
      oral: 'Mundgesundheit',
    },
  },
}

const fr: Translations = {
  nav: {
    services: 'Services',
    about: 'À propos',
    prices: 'Tarifs',
    doctors: 'Nos Médecins',
    reviews: 'Avis Patients',
    beforeAfter: 'Avant & Après',
    getQuote: 'Contact',
  },
  hero: {
    eyebrow: 'ANTALYA · TURQUIE',
    line1: 'Votre Sourire',
    line2: 'Notre Passion.',
    subtitle: 'La perfection incarnée dans votre sourire. Vivez des soins dentaires de classe mondiale avec une touche douce et luxueuse.',
    ctaQuote: 'Obtenir un devis',
    ctaWhatsapp: 'WhatsApp →',
    statPatients: '2 400+',
    statPatientsLabel: 'Patients',
    statExperience: '12 Ans',
    statExperienceLabel: "d'expérience",
    statSatisfaction: '98%',
    statSatisfactionLabel: 'Satisfaction',
  },
  services: {
    eyebrow: 'CE QUE NOUS OFFRONS',
    titleEm: 'Nos',
    titleRest: 'Services',
    subtitle: 'Sept traitements spécialisés, une clinique — au cœur d\'Antalya.',
    mostPopular: 'Le plus populaire',
    learnMore: 'En savoir plus',
    items: {
      implants: {
        name: 'Implants Dentaires',
        description: 'Des remplacements dentaires permanents et naturels avec des implants en titane — retrouvez votre sourire en quelques jours.',
      },
      veneers: {
        name: 'Facettes Dentaires',
        description: 'Des coques en porcelaine ultra-fines façonnées à la perfection pour un sourire impeccable.',
      },
      whitening: {
        name: 'Blanchiment Dentaire',
        description: 'Traitements professionnels au laser et blanchiment pour un sourire visiblement plus blanc et éclatant.',
      },
      crowns: {
        name: 'Couronnes Dentaires',
        description: 'Couronnes céramiques sur mesure qui restaurent les dents endommagées dans toute leur beauté et fonction.',
      },
      sinus: {
        name: 'Sinus Lift',
        description: "Procédure chirurgicale avancée créant un volume osseux adéquat pour une pose d'implant sécurisée.",
      },
      bone: {
        name: 'Greffe Osseuse',
        description: 'Procédures osseuses régénératives assurant un soutien optimal pour des implants dentaires durables.',
      },
      zygomatic: {
        name: 'Implants Zygomatiques',
        description: 'Implants spéciaux ancrés dans la pommette pour les patients avec une perte osseuse sévère.',
      },
    },
  },
  about: {
    label: 'À PROPOS',
    title: 'Nous prenons soin de votre',
    titleGold: 'Santé Dentaire',
    body: 'Chez Paris Smiles Clinic à Antalya, Turquie, nous combinons une technologie dentaire de pointe avec un environnement chaleureux et accueillant. Notre équipe de spécialistes dentaires expérimentés offre des soins personnalisés qui dépassent les attentes.',
    checkItems: ['Équipement Moderne', 'Spécialistes Experts', 'Soins Doux', 'Clinique Confortable'],
    partnersLabel: 'Nos Partenaires',
  },
  doctors: {
    label: 'NOTRE ÉQUIPE',
    titleEm: 'Nos',
    titleRest: 'Médecins',
    subtitle: 'Rencontrez nos spécialistes dentaires expérimentés à Antalya, Turquie — experts en dentisterie esthétique, chirurgie implantaire et smile design.',
    clinicLabel: 'Paris Smiles Clinic · Antalya',
    titles: {
      'Dt. Abdullah Fida': 'Dentiste Esthétique',
      'Dt. Hatice Gül Dal': 'Dentiste Esthétique',
      'Dt. Murat Demiral': 'Dentiste Esthétique',
      'Dt. Nevzat Çakmak': 'Chirurgien Maxillo-Facial',
    },
  },
  beforeAfter: {
    label: 'VRAIS RÉSULTATS',
    title: 'Avant &',
    titleGold: 'Après',
    subtitle: 'Découvrez de vrais résultats de transformation dentaire de notre clinique en Turquie.',
    durationPrefix: 'Durée du traitement :',
    treatments: [
      { id: 1, name: 'Facettes Dentaires', duration: '5 Jours' },
      { id: 2, name: 'Implants Dentaires', duration: '7 Jours' },
      { id: 3, name: 'Blanchiment Dentaire', duration: '1 Jour' },
    ],
  },
  pricing: {
    label: 'TARIFS EN TURQUIE',
    titleEm: 'Traitement Dentaire',
    titleRest: 'Tarifs',
    subtitle: 'Prix de traitement dentaire abordables en Turquie sans frais cachés. Comparez les coûts pour les implants, facettes, couronnes et blanchiment en GBP, USD et EUR.',
    footerNote: 'Tous les prix incluent une consultation gratuite. Plans de paiement disponibles.',
    categories: {
      'implants-surgical': 'Implants & Chirurgie',
      'veneers-crowns': 'Facettes & Couronnes',
      'whitening-cleaning': 'Blanchiment & Nettoyage',
      'general': 'Dentisterie Générale',
    },
  },
  testimonials: {
    label: 'TÉMOIGNAGES',
    title: 'Ce que disent nos',
    titleGold: 'Patients',
    subtitle: 'Des expériences réelles de vrais patients. Chaque sourire raconte une histoire — voici quelques-unes des nôtres.',
    stats: [
      { value: '2 400+', label: 'Patients Satisfaits' },
      { value: '4,9 / 5', label: 'Note Moyenne' },
      { value: '98%', label: 'Recommanderaient' },
      { value: '12 Ans', label: "d'Excellence" },
    ],
    bottomText: 'Rejoignez des milliers de patients qui ont transformé leur sourire à Antalya.',
    ctaBtn: 'Commencez Votre Parcours Sourire',
  },
  contact: {
    block1Label: 'ENVOYER UN MESSAGE',
    block1Title: 'Laisser un',
    block1TitleGold: 'Message',
    block1Subtitle: "Que vous cherchiez une consultation, un deuxième avis, ou que vous soyez prêt à commencer votre traitement, nous sommes là pour vous aider. Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.",
    namePlaceholder: 'Nom complet',
    emailPlaceholder: 'Votre adresse email',
    phonePlaceholder: 'Numéro de téléphone',
    datePlaceholder: 'Choisir une date',
    timePlaceholder: 'Choisir une heure',
    messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
    attachTitle: 'Joindre des fichiers',
    attachSub: 'ou glisser-déposer – PDF, JPG, PNG, WEBP, DOC jusqu\'à 10 Mo chacun',
    privacyText: "J'accepte le traitement de mes données personnelles conformément à la",
    privacyLink: 'Politique de Confidentialité',
    submitBtn: 'Envoyer le Message',
    successMsg: "Message envoyé ! Nous vous répondrons dans les 24 heures.",
    block2Label: 'CONTACT',
    block2Title: 'Nous',
    block2TitleGold: 'Contacter',
    block2Subtitle: "Nous serions ravis d'avoir de vos nouvelles. Contactez-nous pour des rendez-vous, des demandes ou toute question sur nos services dentaires.",
    addressLabel: 'ADRESSE',
    phoneLabel: 'TÉLÉPHONE',
    emailLabel: 'EMAIL',
    block3Title: 'Heures d\'ouverture',
    emergencyNote: "Pour les urgences, n'hésitez pas à nous contacter",
    todayLabel: "Aujourd'hui",
    closedLabel: 'Fermé',
    daysOfWeek: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    block4Title: 'Suivez-nous',
    block4Subtitle: 'Restez informé de nos derniers cas et témoignages de patients.',
    block5Label: 'NOTRE EMPLACEMENT',
    block5Title: 'Visitez notre',
    block5TitleGold: 'Clinique',
    block5Subtitle: "Situé au cœur d'Antalya, notre clinique est facilement accessible depuis tous les grands hôtels et sites.",
  },
  footer: {
    tagline: 'Des soins dentaires professionnels avec une touche luxueuse. Votre sourire est notre priorité.',
    navigationTitle: 'Navigation',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    hours: 'Lun–Sam 09:00–19:00 · Dim Fermé',
    copyright: '© 2026 Paris Smiles Clinic. Tous droits réservés.',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions Générales',
    links: {
      services: 'Services',
      about: 'À propos',
      prices: 'Tarifs',
      doctors: 'Nos Médecins',
      reviews: 'Avis Patients',
      beforeAfter: 'Avant & Après',
      contact: 'Contactez-nous',
    },
  },
  blog: {
    label: 'NOTRE BLOG',
    title: 'Conseils',
    titleGold: 'Dentaires',
    subtitle: "Conseils d'experts, témoignages de patients et dernières innovations dentaires de nos spécialistes à Antalya.",
    readMore: 'Lire la suite →',
    loadMore: 'Charger plus d\'articles',
    backBtn: '← Retour au Blog',
    publishedOn: 'Publié le',
    relatedTitle: 'Articles connexes',
    categories: {
      all: 'Tous',
      implants: 'Implants Dentaires',
      cosmetic: 'Dentisterie Esthétique',
      whitening: 'Blanchiment Dentaire',
      oral: 'Santé Bucco-Dentaire',
    },
  },
}

const tr: Translations = {
  nav: {
    services: 'Hizmetler',
    about: 'Hakkımızda',
    prices: 'Fiyatlar',
    doctors: 'Doktorlarımız',
    reviews: 'Hasta Yorumları',
    beforeAfter: 'Önce & Sonra',
    getQuote: 'İletişim',
  },
  hero: {
    eyebrow: 'ANTALYA · TÜRKİYE',
    line1: 'Gülüşünüz',
    line2: 'Tutkumuz.',
    subtitle: 'Gülüşünüzde mükemmellik. Nazik, lüks bir dokunuşla dünya standartlarında diş bakımı deneyimi yaşayın.',
    ctaQuote: 'Fiyat Al',
    ctaWhatsapp: 'WhatsApp →',
    statPatients: '2.400+',
    statPatientsLabel: 'Hasta',
    statExperience: '12 Yıl',
    statExperienceLabel: 'Deneyim',
    statSatisfaction: '%98',
    statSatisfactionLabel: 'Memnuniyet',
  },
  services: {
    eyebrow: 'NE SUNUYORUZ',
    titleEm: 'Hizmetlerimiz',
    titleRest: '',
    subtitle: 'Yedi uzman tedavi, tek klinik — Antalya\'nın kalbinde.',
    mostPopular: 'En Popüler',
    learnMore: 'Daha Fazla',
    items: {
      implants: {
        name: 'Diş İmplantları',
        description: 'Titanyum implantlarla kalıcı, doğal görünümlü diş yenileme — gülüşünüzü ve güveninizi günler içinde geri kazanın.',
      },
      veneers: {
        name: 'Diş Kaplamaları',
        description: 'Kusursuz, yıldız gülüşü için mükemmel işçilikle hazırlanmış ultra ince porselen kabuklar.',
      },
      whitening: {
        name: 'Diş Beyazlatma',
        description: 'Profesyonel lazer ve beyazlatma işlemleriyle belirgin şekilde daha beyaz, parlak bir gülüş.',
      },
      crowns: {
        name: 'Diş Taçları',
        description: 'Hasar görmüş dişleri tam güzelliği ve işleviyle geri kazandıran özel seramik taçlar.',
      },
      sinus: {
        name: 'Sinüs Lifting',
        description: 'Güvenli implant yerleştirme için yeterli kemik hacmi oluşturan gelişmiş cerrahi işlem.',
      },
      bone: {
        name: 'Kemik Grefti',
        description: 'Uzun ömürlü diş implantları için optimal destek sağlayan rejeneratif kemik prosedürleri.',
      },
      zygomatic: {
        name: 'Zigomatik İmplantlar',
        description: 'Ağır kemik kaybı olan hastalar için elmacık kemiğine sabitlenen uzman implantlar.',
      },
    },
  },
  about: {
    label: 'HAKKIMIZDA',
    title: 'Diş Sağlığınıza',
    titleGold: 'Önem Veriyoruz',
    body: "Antalya, Türkiye'deki Paris Smiles Clinic'de, son teknoloji diş tedavisini sıcak ve davetkar bir ortamla birleştiriyoruz. Deneyimli diş uzmanlarından oluşan ekibimiz, beklentilerin ötesinde kişiselleştirilmiş bakım sunuyor.",
    checkItems: ['Modern Ekipman', 'Uzman Kadro', 'Nazik Bakım', 'Konforlu Klinik'],
    partnersLabel: 'Ortaklarımız',
  },
  doctors: {
    label: 'EKİBİMİZLE TANIŞ',
    titleEm: 'Doktorlarımız',
    titleRest: '',
    subtitle: "Antalya, Türkiye'deki deneyimli diş uzmanlarımızla tanışın — kozmetik diş hekimliği, implant cerrahisi ve gülüş tasarımı konusunda uzmanlar.",
    clinicLabel: 'Paris Smiles Clinic · Antalya',
    titles: {
      'Dt. Abdullah Fida': 'Estetik Diş Hekimi',
      'Dt. Hatice Gül Dal': 'Estetik Diş Hekimi',
      'Dt. Murat Demiral': 'Estetik Diş Hekimi',
      'Dt. Nevzat Çakmak': 'Ağız, Çene ve Yüz Cerrahı',
    },
  },
  beforeAfter: {
    label: 'GERÇEK SONUÇLAR',
    title: 'Önce &',
    titleGold: 'Sonra',
    subtitle: "Türkiye'deki kliniğimizden gerçek diş dönüşüm sonuçlarını görün.",
    durationPrefix: 'Tedavi süresi:',
    treatments: [
      { id: 1, name: 'Diş Kaplamaları', duration: '5 Gün' },
      { id: 2, name: 'Diş İmplantları', duration: '7 Gün' },
      { id: 3, name: 'Diş Beyazlatma', duration: '1 Gün' },
    ],
  },
  pricing: {
    label: "TÜRKİYE'DE FİYATLAR",
    titleEm: 'Diş Tedavisi',
    titleRest: 'Fiyatları',
    subtitle: "Türkiye'de gizli ücret olmaksızın uygun diş tedavisi fiyatları. GBP, USD ve EUR cinsinden implant, kaplama, taç ve beyazlatma maliyetlerini karşılaştırın.",
    footerNote: 'Tüm fiyatlar ücretsiz danışmayı içerir. Ödeme planları mevcuttur.',
    categories: {
      'implants-surgical': 'İmplant ve Cerrahi',
      'veneers-crowns': 'Kaplama ve Taçlar',
      'whitening-cleaning': 'Beyazlatma ve Temizleme',
      'general': 'Genel Diş Hekimliği',
    },
  },
  testimonials: {
    label: 'REFERANSLAR',
    title: 'Hastalarımız Ne',
    titleGold: 'Diyor',
    subtitle: 'Gerçek hastalardan gerçek deneyimler. Her gülüş bir hikaye anlatır — işte bazıları.',
    stats: [
      { value: '2.400+', label: 'Mutlu Hasta' },
      { value: '4,9 / 5', label: 'Ortalama Puan' },
      { value: '%98', label: 'Tavsiye Eder' },
      { value: '12 Yıl', label: 'Mükemmellik' },
    ],
    bottomText: "Antalya'da gülüşünü dönüştüren binlerce hastaya katılın.",
    ctaBtn: 'Gülüş Yolculuğunuzu Başlatın',
  },
  contact: {
    block1Label: 'MESAJ GÖNDЕР',
    block1Title: 'Mesaj',
    block1TitleGold: 'Bırakın',
    block1Subtitle: 'Danışmanlık, ikinci görüş veya tedavinize başlamaya hazırsanız, size yardımcı olmaya hazırız. Formu doldurun ve ekibimiz 24 saat içinde size geri dönsün.',
    namePlaceholder: 'Ad Soyad',
    emailPlaceholder: 'E-posta adresiniz',
    phonePlaceholder: 'Telefon numarası',
    datePlaceholder: 'Tarih seçin',
    timePlaceholder: 'Saat seçin',
    messagePlaceholder: 'Bize neden ulaşmak istediğinizi yazın...',
    attachTitle: 'Dosya Ekle',
    attachSub: 'veya sürükle bırak – PDF, JPG, PNG, WEBP, DOC her biri 10 MB\'a kadar',
    privacyText: 'Kişisel verilerimin işlenmesini',
    privacyLink: 'Gizlilik Politikası',
    submitBtn: 'Mesaj Gönder',
    successMsg: 'Mesajınız gönderildi! 24 saat içinde size geri döneceğiz.',
    block2Label: 'İLETİŞİM',
    block2Title: 'Bize',
    block2TitleGold: 'Ulaşın',
    block2Subtitle: 'Sizden haber almaktan mutluluk duyarız. Randevu, sorular veya diş hizmetlerimiz hakkında her konuda bize ulaşın.',
    addressLabel: 'ADRES',
    phoneLabel: 'TELEFON',
    emailLabel: 'E-POSTA',
    block3Title: 'Çalışma Saatleri',
    emergencyNote: 'Acil durumlar için lütfen bizimle iletişime geçmekten çekinmeyin',
    todayLabel: 'Bugün',
    closedLabel: 'Kapalı',
    daysOfWeek: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    block4Title: 'Bizi Takip Edin',
    block4Subtitle: 'En son vakalarımız ve hasta hikayelerimizden haberdar olun.',
    block5Label: 'KONUMUMUZ',
    block5Title: 'Kliniğimizi',
    block5TitleGold: 'Ziyaret Edin',
    block5Subtitle: "Antalya'nın kalbinde yer alan kliniğimiz, tüm büyük oteller ve simge yapılardan kolayca ulaşılabilir.",
  },
  footer: {
    tagline: 'Lüks bir dokunuşla profesyonel diş bakımı. Gülüşünüz önceliğimizdir.',
    navigationTitle: 'Navigasyon',
    servicesTitle: 'Hizmetler',
    contactTitle: 'İletişim',
    hours: 'Pzt–Cmt 09:00–19:00 · Paz Kapalı',
    copyright: '© 2026 Paris Smiles Clinic. Tüm hakları saklıdır.',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    links: {
      services: 'Hizmetler',
      about: 'Hakkımızda',
      prices: 'Fiyatlar',
      doctors: 'Doktorlarımız',
      reviews: 'Hasta Yorumları',
      beforeAfter: 'Önce & Sonra',
      contact: 'Bize Ulaşın',
    },
  },
  blog: {
    label: 'BLOGUMUZ',
    title: 'Diş',
    titleGold: 'Bilgileri',
    subtitle: "Antalya'daki uzmanlarımızdan uzman tavsiyeleri, hasta hikayeleri ve diş yeniliğindeki son gelişmeler.",
    readMore: 'Devamını Oku →',
    loadMore: 'Daha Fazla Makale',
    backBtn: '← Bloga Dön',
    publishedOn: 'Yayınlanma tarihi:',
    relatedTitle: 'İlgili Makaleler',
    categories: {
      all: 'Tümü',
      implants: 'Diş İmplantları',
      cosmetic: 'Estetik Diş Hekimliği',
      whitening: 'Diş Beyazlatma',
      oral: 'Ağız Sağlığı',
    },
  },
}

export const translations: Record<Language, Translations> = { en, de, fr, tr }
