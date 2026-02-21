/**
 * Business Configuration
 * =====================
 * Uwe Kamm - Gärten voller Leben
 */

import logoImage from "./assets/logo.gif";

// ============================================================================
// BUSINESS IDENTITY
// ============================================================================
export const business = {
  name: "Uwe Kamm",
  tagline: "Gärten voller Leben",
  description:
    "Ihr Experte für kreative Gartengestaltung und naturnahe Gärten. Wir schaffen lebendige Außenräume, die Mensch und Natur verbinden.",
  foundedYear: 2010,
  logo: logoImage,
};

// ============================================================================
// CONTACT INFORMATION
// ============================================================================
export const contact = {
  phone: "07231 / 123 45 67",
  phoneLink: "tel:+497231123456",
  phoneShort: "07231 1234567",
  email: "info@kamm-garten.de",
  address: {
    street: "Gartenstraße 12",
    city: "75172 Pforzheim",
    full: "Gartenstraße 12, 75172 Pforzheim",
  },
  social: {
    instagram: "",
    facebook: "",
  },
  hours: {
    weekdays: "08:00 - 17:00",
    saturday: "Nach Vereinbarung",
    sunday: "Geschlossen",
  },
  responseTime: "24h",
};

// ============================================================================
// COLOR SCHEME
// ============================================================================
export const colors = {
  primary: "#5A8F3E", // Natural green
  secondary: "#f5f5f0",
};

// ============================================================================
// SEO & META
// ============================================================================
export const seo = {
  title: "Uwe Kamm | Gärten voller Leben - Gartengestaltung Pforzheim",
  description:
    "Uwe Kamm - Ihr Experte für naturnahe Gartengestaltung in Pforzheim. Kreative Gärten, Bepflanzung und Gartenpflege. Jetzt Beratung anfragen.",
  canonical: "https://kamm-garten.de",
  themeColor: "#5A8F3E",
};

// ============================================================================
// HERO SECTION
// ============================================================================
export const hero = {
  badge: "Gärten voller Leben | Naturnahe Gestaltung",
  headline: "Gärten voller",
  headlineAccent: "Leben.",
  subheadline:
    "Kreative Gartengestaltung, die Mensch und Natur verbindet. Naturnahe Gärten, professionelle Pflege und individuelle Konzepte für Ihren Außenraum.",
  primaryCTA: "Kostenlose Beratung anfragen",
  secondaryCTA: "07231 1234567",
  backgroundImage:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop",
};

// ============================================================================
// TRUST STATISTICS
// ============================================================================
export const stats = [
  { label: "Kundenzufriedenheit", value: "100%" },
  { label: "Projekte realisiert", value: "200+" },
  { label: "Jahre Erfahrung", value: "15+" },
  { label: "Fachkräfte im Team", value: "6" },
];

// ============================================================================
// AWARDS & CERTIFICATIONS
// ============================================================================
export const awards = [
  { name: "Fachbetrieb", year: "seit 2010" },
  { name: "Naturnahe Gärten", year: "Zertifiziert" },
];

// ============================================================================
// PROCESS STEPS (How We Work)
// ============================================================================
export const processSteps = [
  {
    number: "01",
    title: "Persönliche Beratung",
    description:
      "Wir lernen Sie und Ihren Garten kennen. Gemeinsam entwickeln wir erste Ideen für Ihren lebendigen Außenraum.",
    duration: "Innerhalb von 48 Stunden",
  },
  {
    number: "02",
    title: "Kreatives Konzept",
    description:
      "Wir erstellen ein individuelles Gartenkonzept, das Ihre Wünsche mit naturnahen Gestaltungsprinzipien verbindet.",
    duration: "3-5 Werktage",
  },
  {
    number: "03",
    title: "Lebendige Umsetzung",
    description:
      "Unser Team verwandelt Ihr Konzept in einen lebendigen Garten. Sorgfältig, nachhaltig und mit Liebe zum Detail.",
    duration: "Je nach Projektgröße",
  },
];

// ============================================================================
// WHY CHOOSE US (Differentiators)
// ============================================================================
export const whyChooseUs = [
  {
    title: "Naturnahe Konzepte",
    description:
      "Wir gestalten Gärten, die Lebensräume für Mensch, Tier und Pflanze schaffen.",
  },
  {
    title: "Kreative Gestaltung",
    description:
      "Jeder Garten ist einzigartig. Wir entwickeln individuelle Lösungen für Ihre Wünsche.",
  },
  {
    title: "Nachhaltige Materialien",
    description:
      "Wir setzen auf hochwertige, umweltfreundliche Materialien und Pflanzen.",
  },
  {
    title: "Erfahrenes Team",
    description:
      "Über 15 Jahre Erfahrung in der Gestaltung lebendiger Gärten.",
  },
  {
    title: "Persönliche Betreuung",
    description: "Ein Ansprechpartner begleitet Sie von der Idee bis zur Pflege.",
  },
  {
    title: "Regionale Verbundenheit",
    description:
      "Aus der Region, für die Region. Kurze Wege und lokale Kompetenz.",
  },
];

// ============================================================================
// TESTIMONIALS
// ============================================================================
export const testimonials = [
  {
    quote:
      "Herr Kamm hat unseren Garten in eine grüne Oase verwandelt. Die naturnahe Gestaltung ist genau das, was wir uns gewünscht haben!",
    author: "Familie Weber",
    location: "Pforzheim",
    project: "Naturnaher Garten",
    rating: 5,
  },
  {
    quote:
      "Kreativ, zuverlässig und mit viel Liebe zur Natur. Die Bepflanzung ist wunderschön geworden. Absolut empfehlenswert!",
    author: "Andrea & Martin Schneider",
    location: "Enzkreis",
    project: "Bepflanzung",
    rating: 5,
  },
  {
    quote:
      "Unser Garten ist jetzt ein echtes Paradies für Bienen und Schmetterlinge. Die Beratung war hervorragend!",
    author: "Dr. Klaus Fischer",
    location: "Pforzheim-Eutingen",
    project: "Insektenfreundlicher Garten",
    rating: 5,
  },
];

export const reviewsLink = {
  url: "https://www.google.com/maps",
  text: "Alle Bewertungen auf Google ansehen",
};

// ============================================================================
// PROJECTS / PORTFOLIO
// ============================================================================
export const projects = [
  {
    title: "Naturnaher Hausgarten",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843c1965f?q=80&w=800&auto=format&fit=crop",
    category: "Naturnahe Gestaltung",
    location: "Pforzheim",
  },
  {
    title: "Staudenbeet Anlage",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    category: "Bepflanzung",
    location: "Enzkreis",
  },
  {
    title: "Gartenteich",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop",
    category: "Wasseranlagen",
    location: "Ispringen",
  },
  {
    title: "Sitzplatz im Grünen",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    category: "Terrassen",
    location: "Königsbach-Stein",
  },
  {
    title: "Wildblumenwiese",
    image:
      "https://images.unsplash.com/photo-1470773452605-de620e48e526?q=80&w=800&auto=format&fit=crop",
    category: "Naturwiesen",
    location: "Birkenfeld",
  },
  {
    title: "Schattengartengestaltung",
    image:
      "https://images.unsplash.com/photo-1598902596854-0e0d4ce7b61e?q=80&w=800&auto=format&fit=crop",
    category: "Schattengärten",
    location: "Niefern",
  },
];

// ============================================================================
// SERVICES
// ============================================================================
export type ServiceIcon =
  | "PenTool"
  | "Grid3X3"
  | "Flower2"
  | "Droplets"
  | "Fence"
  | "Scissors";

export const services: {
  title: string;
  description: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Gartenplanung",
    description: "Individuelle Konzepte für naturnahe und lebendige Gärten",
    icon: "PenTool",
  },
  {
    title: "Bepflanzung",
    description: "Professionelle Pflanzkonzepte mit heimischen Arten",
    icon: "Flower2",
  },
  {
    title: "Wasseranlagen",
    description: "Naturteiche, Bachläufe und Wasserspiele",
    icon: "Droplets",
  },
  {
    title: "Natursteinarbeiten",
    description: "Mauern, Wege und Terrassen aus Naturstein",
    icon: "Grid3X3",
  },
  {
    title: "Zäune & Sichtschutz",
    description: "Natürliche Abgrenzungen mit Holz und Pflanzen",
    icon: "Fence",
  },
  {
    title: "Gartenpflege",
    description: "Regelmäßige Pflege für Ihren lebendigen Garten",
    icon: "Scissors",
  },
];

// ============================================================================
// SERVICE AREAS
// ============================================================================
export const serviceAreas = [
  "Pforzheim",
  "Enzkreis",
  "Königsbach-Stein",
  "Ispringen",
  "Birkenfeld",
  "Kämpfelbach",
  "Niefern-Öschelbronn",
  "Keltern",
  "Remchingen",
  "Wimsheim",
  "Wurmberg",
  "Neulingen",
];

export const serviceAreasImage =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop";

// ============================================================================
// CTA SECTION
// ============================================================================
export const cta = {
  headline: "Bereit für Ihren lebendigen Garten?",
  subheadline:
    "Vereinbaren Sie jetzt Ihre kostenlose Erstberatung. Gemeinsam gestalten wir Ihren Traumgarten.",
  primaryButton: "Beratung anfragen",
  secondaryButton: "07231 1234567",
};

// ============================================================================
// SECTION LABELS (for customizing section titles)
// ============================================================================
export const sectionLabels = {
  process: {
    eyebrow: "So arbeiten wir",
    title: "Vom Traum zum lebendigen Garten",
    subtitle:
      "Wir begleiten Sie auf dem Weg zu Ihrem persönlichen Gartenparadies. Kreativ, nachhaltig und mit Leidenschaft.",
    cta: "Jetzt Erstberatung vereinbaren",
  },
  whyUs: {
    eyebrow: "Warum Uwe Kamm?",
    title: "6 Gründe für Ihre Entscheidung",
  },
  testimonials: {
    eyebrow: "Kundenstimmen",
    title: "Was unsere Kunden sagen",
  },
  projects: {
    eyebrow: "Unsere Arbeiten",
    title: "Lebendige Gärten",
    subtitle:
      "Jeder Garten erzählt eine Geschichte. Lassen Sie sich von unseren Projekten inspirieren.",
    viewAll: "Alle Projekte ansehen",
  },
  services: {
    eyebrow: "Unsere Leistungen",
    title: "Alles für Ihren Garten",
    subtitle:
      "Von der Planung bis zur Pflege: Wir bieten das komplette Spektrum für lebendige Gärten.",
  },
  areas: {
    eyebrow: "Einsatzgebiet",
    title: "Wir kommen zu Ihnen",
    subtitle:
      "Unser Team ist in Pforzheim und dem Enzkreis für Sie im Einsatz. Kostenlose Anfahrt im gesamten Einzugsgebiet.",
    badge: "100%",
    badgeLabel: "Kostenlose Anfahrt",
  },
};

// ============================================================================
// LEGAL LINKS
// ============================================================================
export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
