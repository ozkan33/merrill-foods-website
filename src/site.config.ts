/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth
 * ───────────────────────────────────────────────────────────────────────────
 *  Edit company name, contact details, navigation, and page copy HERE.
 *  Nothing in the components is hard-coded — change it once and it updates
 *  everywhere across the site.
 *
 *  Look for `TODO:` markers for the few values you must supply before launch.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
  /** Inline SVG path data (24x24 viewBox) for the card icon. */
  icon: string;
}

export interface SupplyCategory {
  name: string;
  blurb: string;
}

export interface Value {
  title: string;
  body: string;
}

// ── Company / brand ────────────────────────────────────────────────────────
export const company = {
  name: 'Merrill Foods LLC',
  shortName: 'Merrill Foods',
  tagline: 'Specialty food distribution for restaurants & retail',
  // Used for <title>, meta description, OG.
  description:
    'Merrill Foods LLC is a Minneapolis-based specialty food supplier serving restaurants and specialty retailers with curated, traceable ingredients and dependable delivery.',
  // Founding/credibility line used on the About page.
  founded: 2005,
};

// ── Contact details ────────────────────────────────────────────────────────
export const contact = {
  email: 'contact@merrillfoods.com',
  phone: '(612) 521-0450',
  phoneHref: 'tel:+16125210450',
  address: {
    line1: '1201 Dupont Avenue North',
    line2: '',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55411',
  },
  hours: [
    { days: 'Monday – Friday', time: '6:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '7:00 AM – 12:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  // Google Maps embed (keyless). For a richer styled embed, swap this for a
  // Maps → Share → Embed a map URL (copy the src="" value).
  mapEmbedSrc:
    'https://www.google.com/maps?q=1201+Dupont+Avenue+North,+Minneapolis,+MN+55411&output=embed',
};

export const social = {
  instagram: 'https://instagram.com/', // TODO
  linkedin: 'https://linkedin.com/', // TODO
};

// ── Contact form ───────────────────────────────────────────────────────────
export const form = {
  // Using Web3Forms (https://web3forms.com) — free, no backend required.
  // TODO: Create a free access key and paste it here.
  // Alternatively swap `endpoint` for a Formspree URL (https://formspree.io).
  provider: 'web3forms' as 'web3forms' | 'formspree',
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO
  businessTypes: ['Restaurant', 'Specialty retail', 'Other'],
};

// ── Navigation ─────────────────────────────────────────────────────────────
export const nav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ── Home: hero ─────────────────────────────────────────────────────────────
export const hero = {
  headline: 'Exceptional ingredients,\ndelivered with intention.',
  subhead:
    'We connect discerning restaurants and specialty retailers with carefully sourced provisions — and the dependable delivery to match.',
  ctaLabel: 'Become a Partner',
  ctaHref: '/contact',
};

// ── Home: value props ──────────────────────────────────────────────────────
export const features: Feature[] = [
  {
    title: 'Curated sourcing',
    body: 'We hand-select producers for flavor, craft, and consistency — so every order reflects standards you would set yourself.',
    // map-pin / compass
    icon: 'M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
  {
    title: 'Reliable delivery',
    body: 'Temperature-controlled logistics and tight delivery windows mean your kitchen and shelves are stocked when you need them.',
    // truck
    icon: 'M3 6.75A1.75 1.75 0 0 1 4.75 5H15a1 1 0 0 1 1 1v3h2.382a1 1 0 0 1 .894.553l1.618 3.236a1 1 0 0 1 .106.447V17a1 1 0 0 1-1 1h-1.05a2.5 2.5 0 0 1-4.9 0H9.95a2.5 2.5 0 0 1-4.9 0H4a1 1 0 0 1-1-1V6.75Z',
  },
  {
    title: 'Restaurant + retail expertise',
    body: 'From line cooks to merchandisers, we understand both worlds — and tailor pack sizes, pricing, and cadence to each.',
    // utensils
    icon: 'M7 2v8a2 2 0 0 0 2 2v10M7 6m4-4v6a2 2 0 0 1-2 2M17 2c-1.66 0-3 2.91-3 6.5 0 2.5 1 3.5 1.5 3.5V22',
  },
  {
    title: 'Quality you can trace',
    body: 'Clear provenance on every product — origin, producer, and handling — so you can tell the story behind what you serve and sell.',
    // shield-check
    icon: 'M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Zm-1.2 11.2 4-4-1.4-1.4-2.6 2.6-1.2-1.2-1.4 1.4 2.6 2.6Z',
  },
];

// ── Home: what we supply ───────────────────────────────────────────────────
export const supply = {
  heading: 'What we supply',
  intro:
    'A focused, chef-driven catalog spanning the pantry, the cold case, and everything in between.',
  categories: [
    { name: 'Artisan cheese & dairy', blurb: 'Farmstead and creamery selections' },
    { name: 'Charcuterie & cured meats', blurb: 'Whole-muscle and small-batch' },
    { name: 'Olive oils & vinegars', blurb: 'Single-estate and aged' },
    { name: 'Pantry & dry goods', blurb: 'Grains, pulses, preserves' },
    { name: 'Coffee & tea', blurb: 'Roaster-direct and loose-leaf' },
    { name: 'Sweets & confections', blurb: 'Chocolate, honey, conserves' },
  ] as SupplyCategory[],
};

// ── Home: closing CTA band ─────────────────────────────────────────────────
export const closingCta = {
  heading: 'Let’s build your shelf, together.',
  body: 'Tell us about your business and we’ll put together a tailored sourcing plan.',
  ctaLabel: 'Become a Partner',
  ctaHref: '/contact',
};

// ── About page ─────────────────────────────────────────────────────────────
export const about = {
  eyebrow: 'Our story',
  heading: 'Built by people who care where food comes from.',
  lead: `Merrill Foods began with a simple frustration: the best small producers were hard to reach, and the easiest distributors rarely carried the things worth serving. We set out to close that gap.`,
  body: [
    `Today we partner with farmstead creameries, family mills, and regional artisans to bring their work to the restaurants and shops that will do it justice. We keep our catalog deliberately tight — every item earns its place.`,
    `We are large enough to deliver reliably and small enough to know our producers by name. That balance is the whole point.`,
  ],
  mission: {
    heading: 'Our mission',
    body: 'To make exceptional, traceable ingredients accessible to the businesses that build their reputation on them — with service good enough to disappear into the background.',
  },
  values: [
    {
      title: 'Provenance over volume',
      body: 'We would rather carry one outstanding producer than ten forgettable ones.',
    },
    {
      title: 'Show up, every time',
      body: 'Consistency is a feature. Our partners plan their week around our deliveries.',
    },
    {
      title: 'Fair to the maker',
      body: 'Sustainable sourcing starts with paying producers what their craft is worth.',
    },
    {
      title: 'Tell the truth',
      body: 'Honest labeling, honest pricing, and honest answers when something is out of stock.',
    },
  ] as Value[],
  // Honest, non-inflated credibility points (no fabricated metrics).
  stats: [
    { value: 'Est. 2005', label: 'In business since' },
    { value: 'Minneapolis', label: 'Where we’re based' },
    { value: 'Independent', label: 'Family-run business' },
    { value: 'Minnesota LLC', label: 'Locally incorporated' },
  ],
};

// ── Contact page ───────────────────────────────────────────────────────────
export const contactPage = {
  eyebrow: 'Become a partner',
  heading: 'Let’s talk about what you serve.',
  lead: 'Send us a note about your business and the kinds of products you’re looking for. We’ll follow up within one business day.',
};
