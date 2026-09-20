export type CoverLayout = 'browser' | 'brand' | 'duo' | 'strip';

export interface CoverConfig {
  layout: CoverLayout;
  /** Flat canvas colour taken from the project's own art direction */
  bg: string;
  /** Accent colour used for chips / bars inside the cover */
  accent: string;
  /** Main visual placed inside the composition */
  main: string;
  /** Secondary visuals (side rail / floating chips) */
  side?: string[];
  /** Optional bottom strip image (palette / wordmark) */
  strip?: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
  /** Render taller / wider than the default grid cell */
  wide?: boolean;
  tall?: boolean;
}

export interface Decision {
  title: string;
  why: string;
  benefit: string;
  visual?: string;
}

export interface PaletteSwatch {
  hex: string;
  name: string;
}

export interface CaseStudy {
  slug: string;
  order: number;
  title: string;
  tagline: string;
  category: string;
  group: 'product' | 'branding' | 'graphic';
  year: string;
  role: string;
  scope: string;
  disciplines: string[];
  tools: string[];
  deliverables: string[];
  figmaUrl: string;
  accent: string;
  palette: PaletteSwatch[];
  cover: CoverConfig;
  challenge: string;
  challengeBody: string;
  approach: { title: string; text: string }[];
  gallery: GalleryItem[];
  decisions: Decision[];
  outcome: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'xposure',
    order: 1,
    title: 'Xposure',
    tagline: 'A dark, editorial multi-page website built to let imagery do the talking.',
    category: 'Website · UI/UX · Product Design',
    group: 'product',
    year: '2024',
    role: 'UI/UX Designer',
    scope: 'Multi-page marketing website — desktop and mobile',
    disciplines: ['UX Design', 'UI Design', 'Responsive Design', 'Visual Design'],
    tools: ['Figma'],
    deliverables: ['Desktop page designs', 'Mobile screen designs', 'Landing & inner pages'],
    figmaUrl: 'https://www.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?node-id=0-1',
    accent: '#C9A227',
    palette: [
      { hex: '#0D0D0B', name: 'Ink' },
      { hex: '#1B1B15', name: 'Panel' },
      { hex: '#C9A227', name: 'Gold' },
      { hex: '#E6C765', name: 'Highlight' },
      { hex: '#F3EFE4', name: 'Paper' },
    ],
    cover: {
      layout: 'browser',
      bg: '#12120E',
      accent: '#C9A227',
      main: '/project-assets/xposure/frames-grid.jpg',
      side: ['/project-assets/xposure/splash.jpg', '/project-assets/xposure/mobile-screens.jpg'],
    },
    challenge:
      'Design a website that feels premium and cinematic while keeping the content — not the chrome — in charge.',
    challengeBody:
      'Xposure needed a web presence where photography and long-form content could share the same stage. The design had to feel like a dark gallery room: restrained, confident, and easy to move through — on desktop and on mobile.',
    approach: [
      {
        title: 'Content inventory',
        text: 'Mapped the pages the site actually needed — landing, about-style editorial pages, gallery grids and utility screens — before touching visual design.',
      },
      {
        title: 'Visual direction',
        text: 'Chose a near-black canvas with a restrained gold accent so photographs and headings carry the contrast instead of UI chrome.',
      },
      {
        title: 'Page system',
        text: 'Designed repeatable section blocks — full-bleed heroes, split layouts, text columns, image grids — that recombine across pages without losing rhythm.',
      },
      {
        title: 'Responsive pass',
        text: 'Rebuilt the same sections as mobile screens, collapsing editorial grids into single-column reading flows.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/xposure/frames-grid.jpg',
        caption: 'Desktop page set — hero, section and grid screens explored as a system',
        wide: true,
      },
      {
        src: '/project-assets/xposure/splash.jpg',
        caption: 'Intro / splash screens with the winged Xposure emblem',
        tall: true,
      },
      {
        src: '/project-assets/xposure/page-about.jpg',
        caption: 'Editorial text page — gold headline over dense dark copy blocks',
        tall: true,
      },
      {
        src: '/project-assets/xposure/page-split.jpg',
        caption: 'Split-layout page pairing content with a form / feature panel',
      },
      {
        src: '/project-assets/xposure/frames-row3.jpg',
        caption: 'Additional page explorations kept in the same dark visual system',
        wide: true,
      },
      {
        src: '/project-assets/xposure/mobile-screens.jpg',
        caption: 'Mobile set — the same pages adapted to small screens',
        wide: true,
      },
    ],
    decisions: [
      {
        title: 'Dark canvas, gold accent',
        why: 'A near-black background reads as a gallery wall and lets photographs glow; a single metallic accent marks interactive elements without competing with content.',
        benefit: 'The interface feels premium while staying quiet — users look at the work, not the UI.',
      },
      {
        title: 'Emblem-led intro screens',
        why: 'The winged emblem is given its own splash frames instead of being squeezed into a navbar.',
        benefit: 'The brand lands once, memorably, then steps back for the rest of the journey.',
      },
      {
        title: 'Editorial page types',
        why: 'Long-form pages use wide text columns and oversized gold headlines rather than card furniture.',
        benefit: 'Reading-heavy content keeps the same voice as the visual pages — one system, two registers.',
      },
      {
        title: 'Mobile as its own design pass',
        why: 'Mobile screens were drawn separately rather than assumed from the desktop grid.',
        benefit: 'Small-screen layouts keep the mood of the desktop site while respecting touch and reading order.',
      },
    ],
    outcome: [
      'A complete multi-page website design covering desktop and mobile.',
      'A coherent dark visual system — canvas, accent, type and section blocks — that scales across page types.',
      'A site that presents the brand as cinematic and editorial rather than decorative.',
    ],
  },
  {
    slug: 'apertre-2',
    order: 2,
    title: 'Apertre 2.0',
    tagline: 'The second edition of Resourcio Community\'s flagship event, given a space-age identity and a full design system.',
    category: 'Event Website · Community · Product Design',
    group: 'product',
    year: '2024',
    role: 'Product Designer',
    scope: 'Event landing page + supporting design system',
    disciplines: ['UX Design', 'UI Design', 'Design System', 'Illustration Direction'],
    tools: ['Figma'],
    deliverables: ['Landing page design', 'Component library', 'Mascot & illustration set', 'Brand assets'],
    figmaUrl: 'https://www.figma.com/design/xFRRkOO25RpSK8CGsZrwpX/Apertre-2.0-Website?node-id=722-1417',
    accent: '#F5B301',
    palette: [
      { hex: '#0E1620', name: 'Deep Space' },
      { hex: '#1D2A38', name: 'Panel Navy' },
      { hex: '#F5B301', name: 'Solar Gold' },
      { hex: '#2FA36B', name: 'Orbit Green' },
      { hex: '#E8641C', name: 'Rocket Orange' },
      { hex: '#FFFFFF', name: 'Suit White' },
    ],
    cover: {
      layout: 'brand',
      bg: '#101C2A',
      accent: '#F5B301',
      main: '/project-assets/apertre2/mascots.jpg',
      side: ['/project-assets/apertre2/logos.jpg', '/project-assets/apertre2/components.jpg'],
    },
    challenge:
      'Make a community event feel like a mission — one page that explains, excites and converts, backed by a system the whole team can reuse.',
    challengeBody:
      'Apertre 2.0 is Resourcio Community\'s event brand. The design had to work twice: as a landing page that sells the event to participants, and as a design system — colours, components, mascots — that keeps every future asset on-brand.',
    approach: [
      {
        title: 'Brand foundation',
        text: 'Locked the palette, logo variants and the astronaut mascot family first, so every later decision had a visual anchor.',
      },
      {
        title: 'Page narrative',
        text: 'Structured the landing page as a story — hook, what the event is, what you get, how to join — rather than a list of sections.',
      },
      {
        title: 'Component library',
        text: 'Built buttons, nav states, cards and form elements as reusable components so the page and its siblings stay consistent.',
      },
      {
        title: 'Mascot system',
        text: 'Drew the astronaut in repeatable poses — waving, floating, riding the rocket — giving the brand a character that can show up anywhere.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/apertre2/mascots.jpg',
        caption: 'The astronaut mascot family — colour and monochrome poses plus the rocket',
        wide: true,
      },
      {
        src: '/project-assets/apertre2/components.jpg',
        caption: 'Component sheet — nav bars, buttons, cards and modules in the event system',
        wide: true,
      },
      {
        src: '/project-assets/apertre2/logos.jpg',
        caption: 'Resourcio Community logo lockups — the green R mark and its variants',
      },
      {
        src: '/project-assets/apertre2/buttons.jpg',
        caption: 'Button states on the deep-navy system surface',
      },
      {
        src: '/project-assets/apertre2/palette.jpg',
        caption: 'Brand colour ramp used across the site and materials',
      },
    ],
    decisions: [
      {
        title: 'A mascot, not just a logo',
        why: 'Events live or die on personality. A recurring astronaut turns announcements, empty states and stickers into the same character people remember.',
        benefit: 'The brand feels friendly and collectible instead of corporate.',
      },
      {
        title: 'Deep navy + solar gold',
        why: 'The space theme needs darkness to work; gold highlights carry the "mission" energy without resorting to sci-fi clichés.',
        benefit: 'Strong contrast keeps CTAs loud and the theme unmistakable.',
      },
      {
        title: 'System before screens',
        why: 'The file is organised as a real mini design system — colour styles, logo lockups, components — not just a page.',
        benefit: 'Every future poster, badge or page inherits the same decisions for free.',
      },
      {
        title: 'Single-story landing page',
        why: 'One continuous scroll keeps the event pitch tight: visitors never have to hunt for what Apertre is or how to join.',
        benefit: 'Lower friction from first impression to registration intent.',
      },
    ],
    outcome: [
      'A space-themed event identity built around a reusable astronaut mascot family.',
      'A landing page plus a component and colour system the community can keep building on.',
      'A brand kit that carries consistently into the event\'s printed and social materials.',
    ],
  },
  {
    slug: 'apertre-event-materials',
    order: 3,
    title: 'Apertre Event Materials',
    tagline: 'The print-and-pixel collateral kit that took the Apertre brand from screen to the event floor.',
    category: 'Event Branding · Graphic Design · Communication Design',
    group: 'branding',
    year: '2025',
    role: 'Brand / Graphic Designer',
    scope: 'Event collateral system — documents, promo assets, material page',
    disciplines: ['Brand Design', 'Graphic Design', 'Communication Design', 'Layout'],
    tools: ['Figma'],
    deliverables: ['Colour & style system', 'Document / deck layouts', 'Materials showcase page', 'Badges & stickers'],
    figmaUrl: 'https://www.figma.com/design/JaeR9Ln20jrOFWT8GQEG57/Apertre-Event-Materials-page?node-id=0-1',
    accent: '#F5B301',
    palette: [
      { hex: '#0F0F0F', name: 'Stage Black' },
      { hex: '#F5B301', name: 'Apertre Gold' },
      { hex: '#2FA36B', name: 'Green' },
      { hex: '#E8641C', name: 'Orange' },
      { hex: '#E5484D', name: 'Red' },
      { hex: '#F2F2F2', name: 'Paper' },
    ],
    cover: {
      layout: 'strip',
      bg: '#111111',
      accent: '#F5B301',
      main: '/project-assets/apertre-events/doc-pages.jpg',
      side: ['/project-assets/apertre-events/long-page.jpg', '/project-assets/apertre-events/mascots.jpg'],
      strip: '/project-assets/apertre-events/logo.jpg',
    },
    challenge:
      'Turn a website brand into physical and digital event materials — without letting any asset drift off-system.',
    challengeBody:
      'Once the event site existed, everything else — documents, promo graphics, badges, the materials page itself — had to speak the same language. This project is the bridge between the identity and the event floor.',
    approach: [
      {
        title: 'Codify the system',
        text: 'Pulled the colour ramps, logo lockups and mascot rules into one place so every material starts from the same source of truth.',
      },
      {
        title: 'Document layouts',
        text: 'Designed the light document pages — structured, legible, and branded at the edges — for the event\'s informational materials.',
      },
      {
        title: 'Promo assets',
        text: 'Extended the system into badges, stickers and the dark materials showcase page, keeping the astronaut family and gold accent consistent.',
      },
      {
        title: 'Consistency pass',
        text: 'Checked every asset against the palette and mascot rules — the same yellows, the same characters, the same spacing logic.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/apertre-events/color-system.jpg',
        caption: 'The event colour system — labelled ramps from paper white to stage black with gold, green, orange and red accents',
        wide: true,
      },
      {
        src: '/project-assets/apertre-events/doc-pages.jpg',
        caption: 'Branded document pages — light layouts carrying the identity at header and footer',
        tall: true,
      },
      {
        src: '/project-assets/apertre-events/long-page.jpg',
        caption: 'The materials showcase page — a long dark scroll summarising every asset',
        tall: true,
      },
      {
        src: '/project-assets/apertre-events/logo.jpg',
        caption: 'Apertre 2.0 lockup — the gold delta mark and wordmark',
        wide: true,
      },
      {
        src: '/project-assets/apertre-events/mascots.jpg',
        caption: 'Mascot sticker set — visor portraits, moon-sit and the rocket ride',
      },
      {
        src: '/project-assets/apertre-events/style-tile.jpg',
        caption: 'Style tile consolidating colours and graphic elements for the materials',
      },
    ],
    decisions: [
      {
        title: 'A labelled colour system',
        why: 'Event materials are produced by many hands; named ramps (not loose swatches) prevent "almost-right" golds and greys.',
        benefit: 'Every poster, badge and doc picks from the same short list — consistency by construction.',
      },
      {
        title: 'Light docs, dark showcase',
        why: 'Working documents stay light for legibility; the materials showcase page goes dark so assets read like exhibits.',
        benefit: 'Each surface is tuned to its job instead of one-size-fits-all branding.',
      },
      {
        title: 'Mascots as stickers',
        why: 'Re-cutting the astronaut family as badges and stickers gives the community swag that markets the event by itself.',
        benefit: 'Brand personality becomes a physical, shareable object.',
      },
      {
        title: 'One page to rule the assets',
        why: 'A single long materials page documents the whole kit in scroll order.',
        benefit: 'Anyone producing event media can see the full system in context, top to bottom.',
      },
    ],
    outcome: [
      'A complete event collateral system — colour, type, logo, mascot and layout rules in one place.',
      'Branded documents, badges and a showcase page that all read as one family.',
      'The Apertre identity made portable — from web UI to printed and social materials.',
    ],
  },
  {
    slug: 'chaikkhana-cafe',
    order: 4,
    title: 'Chaikkhana Café Identity',
    tagline: 'A Bengali wordmark where the first character is a steaming cup of chai.',
    category: 'Brand Identity · Logo Design',
    group: 'branding',
    year: '2026',
    role: 'Brand Designer',
    scope: 'Logo concept, construction and colourways',
    disciplines: ['Logo Design', 'Typography', 'Brand Identity'],
    tools: ['Figma'],
    deliverables: ['Primary wordmark', 'Reversed / dark colourway', 'Mark detail'],
    figmaUrl: 'https://www.figma.com/design/GC0jt9fuSHiks9gqWs3ifb/Cafe-Logo-design?node-id=0-1',
    accent: '#6B3410',
    palette: [
      { hex: '#F3EAD3', name: 'Cream' },
      { hex: '#6B3410', name: 'Espresso' },
      { hex: '#3A1D08', name: 'Dark Roast' },
      { hex: '#B06A2A', name: 'Caramel' },
    ],
    cover: {
      layout: 'brand',
      bg: '#F3EAD3',
      accent: '#6B3410',
      main: '/project-assets/cafe/logo-main.jpg',
      side: ['/project-assets/cafe/logo-dark.jpg', '/project-assets/cafe/logo-mark.jpg'],
    },
    challenge:
      'Design a café identity that carries the warmth of chai in a single wordmark — no icon needed beside it.',
    challengeBody:
      'Chaikkhana (চৈকখানা — "tea house") needed a logo that is the product: the letterforms themselves had to evoke a hot cup. The design fuses a steaming tea cup into the first Bengali glyph so the name and the idea are the same shape.',
    approach: [
      {
        title: 'Concept',
        text: 'Started from the name itself — chai lives in the first syllable, so the cup should live in the first character.',
      },
      {
        title: 'Letterform fusion',
        text: 'Drew the opening glyph as a cup silhouette — bowl, handle curve and a wisp of steam — keeping it legible as a character first.',
      },
      {
        title: 'Calligraphic continuity',
        text: 'Styled the remaining letters in a bold Bengali calligraphic hand so the constructed glyph sits naturally in the word.',
      },
      {
        title: 'Colourways',
        text: 'Set the mark in espresso brown on cream, then proved it in white on black for signage and print.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/cafe/logo-main.jpg',
        caption: 'Primary wordmark — the cup fused into the first glyph, espresso on cream',
        wide: true,
      },
      {
        src: '/project-assets/cafe/logo-mark.jpg',
        caption: 'Mark detail — bowl, handle curl and steam forming the opening character',
      },
      {
        src: '/project-assets/cafe/logo-dark.jpg',
        caption: 'Reversed colourway — the mark holds its shape in white on black',
        wide: true,
      },
    ],
    decisions: [
      {
        title: 'The name is the icon',
        why: 'Instead of logo + symbol, the first character becomes the cup — one read, one memory.',
        benefit: 'A compact identity that works on a cup, a signboard or a favicon without rearranging.',
      },
      {
        title: 'Steam as the tell',
        why: 'A single steam curl turns a letterform into a hot drink without adding a second colour or a separate graphic.',
        benefit: 'The metaphor survives at small sizes and in one-colour print.',
      },
      {
        title: 'Cream and espresso',
        why: 'The palette is drawn from the drink itself — cream, roast and caramel — rather than trend colours.',
        benefit: 'The brand feels warm and edible, and prints beautifully in two colours.',
      },
      {
        title: 'Reversed proof',
        why: 'The wordmark was checked in white-on-black early, not as an afterthought.',
        benefit: 'Signage, stamps and dark applications are already solved.',
      },
    ],
    outcome: [
      'A bilingual-feeling identity: unmistakably Bengali, instantly readable as a café.',
      'A wordmark that carries its own symbol — cup, steam and name in one gesture.',
      'A small, complete kit: primary mark, mark detail and a proven reversed colourway.',
    ],
  },
  {
    slug: 'resourcio',
    order: 5,
    title: 'Resourcio',
    tagline: 'A soft-3D landing page for the Resourcio community — friendly on the surface, structured underneath.',
    category: 'Startup Website · UI/UX · Product Design',
    group: 'product',
    year: '2026',
    role: 'UI/UX Designer',
    scope: 'Landing page design + hero and feature explorations',
    disciplines: ['UX Design', 'UI Design', 'Visual Design'],
    tools: ['Figma'],
    deliverables: ['Landing page', 'Hero variants', 'Feature sections', 'Logo lockups'],
    figmaUrl: 'https://www.figma.com/design/8HkhHrYCQMk30BDwukYBGh/StartUp_Resourcio_webdesign?node-id=0-1',
    accent: '#5B5BD6',
    palette: [
      { hex: '#E8E6F7', name: 'Lavender Mist' },
      { hex: '#5B5BD6', name: 'Indigo' },
      { hex: '#8B5CF6', name: 'Violet' },
      { hex: '#1E1B3A', name: 'Midnight' },
      { hex: '#FFFFFF', name: 'White' },
    ],
    cover: {
      layout: 'browser',
      bg: '#E8E6F7',
      accent: '#5B5BD6',
      main: '/project-assets/resourcio/hero.jpg',
      side: ['/project-assets/resourcio/page-full.jpg', '/project-assets/resourcio/logos.jpg'],
    },
    challenge:
      'Explain what a resource-sharing community offers in one scroll — and make "community" feel like a product.',
    challengeBody:
      'Resourcio needed a home page that says what the community is, what it gives members and how to join — fast. The design uses soft 3D forms and a lavender field to feel welcoming, then a strict card hierarchy to keep the pitch scannable.',
    approach: [
      {
        title: 'Value first',
        text: 'Opened with a hero that states the offer plainly over floating 3D shapes — personality up top, promise in the copy.',
      },
      {
        title: 'Offer as cards',
        text: 'Broke "what we offer" into icon-led feature cards so each benefit is scannable in seconds.',
      },
      {
        title: 'Repeatable sections',
        text: 'Kept one card rhythm through features, contact and CTA so the page reads as a single system.',
      },
      {
        title: 'Brand lockup',
        text: 'Explored the Resourcio wordmark in light and dark so the brand survives header, footer and partner placements.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/resourcio/hero.jpg',
        caption: 'Hero — lavender field, floating 3D glass shapes and a single primary CTA',
      },
      {
        src: '/project-assets/resourcio/hero-alt.jpg',
        caption: 'Alternate hero exploration — same system, different composition',
      },
      {
        src: '/project-assets/resourcio/features.jpg',
        caption: '"What we offer" — circular-icon feature cards on the lavender surface',
        wide: true,
      },
      {
        src: '/project-assets/resourcio/features2.jpg',
        caption: 'Supporting sections — info card and split content row',
      },
      {
        src: '/project-assets/resourcio/logos.jpg',
        caption: 'Resourcio wordmark lockups in indigo, dark and light',
        wide: true,
      },
      {
        src: '/project-assets/resourcio/browser.jpg',
        caption: 'The page presented inside a browser mock for review',
      },
    ],
    decisions: [
      {
        title: 'Soft 3D over flat SaaS',
        why: 'Glassy spheres and shapes give the community a tactile, optimistic feel that flat tech gradients can\'t.',
        benefit: 'The page is memorable at a glance — the hero itself is the brand moment.',
      },
      {
        title: 'One accent, used hard',
        why: 'Indigo is reserved for actions — buttons, icons, links — against a mostly-desaturated lavender field.',
        benefit: 'CTAs are unmissable and the hierarchy never argues with itself.',
      },
      {
        title: 'Cards for every offer',
        why: 'Each benefit gets the same card anatomy: icon, title, line of copy.',
        benefit: 'The value prop scans in seconds and the system extends to future sections.',
      },
      {
        title: 'Hero variants explored',
        why: 'Two hero compositions were designed side by side rather than committing to the first idea.',
        benefit: 'The final direction is a deliberate choice, not a default.',
      },
    ],
    outcome: [
      'A landing page that pitches the community in one scroll — offer, benefits, join.',
      'A lavender-and-indigo visual language with a distinctive soft-3D hero.',
      'Wordmark lockups and section blocks ready to grow with the product.',
    ],
  },
  {
    slug: 'tshirt',
    order: 6,
    title: 'T-Shirt Graphics',
    tagline: 'Two apparel artworks — a duotone portrait over sunset stripes, and a painted emblem — mocked up on black and white tees.',
    category: 'Graphic Design · Apparel Design',
    group: 'graphic',
    year: '2024',
    role: 'Graphic Designer',
    scope: 'Artwork concepts + garment mockups',
    disciplines: ['Graphic Design', 'Illustration', 'Print'],
    tools: ['Figma'],
    deliverables: ['Two artwork designs', 'Black & white garment mockups'],
    figmaUrl: 'https://www.figma.com/design/x3hSLdCe5REEkWwG1NXg0x/t-shirt?node-id=0-1',
    accent: '#C15427',
    palette: [
      { hex: '#111111', name: 'Ink' },
      { hex: '#C15427', name: 'Burnt Orange' },
      { hex: '#D89A2B', name: 'Ochre Gold' },
      { hex: '#2F6B6A', name: 'Teal' },
      { hex: '#C8102E', name: 'Signal Red' },
      { hex: '#F5F5F5', name: 'Tee White' },
    ],
    cover: {
      layout: 'duo',
      bg: '#161616',
      accent: '#C15427',
      main: '/project-assets/tshirt/tee-black-portrait.jpg',
      side: ['/project-assets/tshirt/tee-white-brush.jpg', '/project-assets/tshirt/art-brush.jpg'],
    },
    challenge:
      'Make two graphics that work as prints — strong at arm\'s length, interesting up close, and printable on both light and dark garments.',
    challengeBody:
      'This was an apparel exercise in restraint: each design had to survive as a chest print on black and white fabric. One leans figurative — a duotone portrait over retro stripes; the other leans emblematic — a painted gold block with a ring-and-mark device.',
    approach: [
      {
        title: 'Two directions',
        text: 'Explored a painterly portrait and an abstract emblem in parallel so the set covers figurative and symbolic tastes.',
      },
      {
        title: 'Print-first composition',
        text: 'Kept both graphics as self-contained blocks sized for the chest — no edge-to-edge bleed, no fine detail that dies in ink.',
      },
      {
        title: 'Limited palettes',
        text: 'Restricted each artwork to a handful of inks — orange/teal duotone for the portrait; gold, black and red for the emblem.',
      },
      {
        title: 'Garment proofing',
        text: 'Mocked every design on black and white tees on hangers to judge contrast and placement at real scale.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/tshirt/tee-black-portrait.jpg',
        caption: 'Portrait print on the black garment',
      },
      {
        src: '/project-assets/tshirt/tee-white-portrait.jpg',
        caption: 'The same artwork on white — the duotone holds its contrast',
        wide: true,
      },
      {
        src: '/project-assets/tshirt/art-portrait.jpg',
        caption: 'Artwork detail — duotone portrait over horizontal sunset stripes',
      },
      {
        src: '/project-assets/tshirt/art-brush.jpg',
        caption: 'Artwork detail — painted gold block, white ring and red mark',
      },
      {
        src: '/project-assets/tshirt/tee-white-brush.jpg',
        caption: 'Emblem print on the white garment',
      },
      {
        src: '/project-assets/tshirt/tee-black-brush.jpg',
        caption: 'Emblem print on black — the gold block reads like foil',
      },
    ],
    decisions: [
      {
        title: 'Stripes as a light source',
        why: 'The portrait sits on horizontal orange bands, so the sunset itself does the lighting — face lit warm on one side, teal shadow on the other.',
        benefit: 'A two-colour print feels like a full painting.',
      },
      {
        title: 'One device, three inks',
        why: 'The emblem is a single gesture — painted gold block, white ring, red mark — instead of a busy illustration.',
        benefit: 'Readable at badge size and screen-print friendly.',
      },
      {
        title: 'Mocked on both fabrics',
        why: 'Every artwork was checked on black and white garments before calling it done.',
        benefit: 'No surprises at print — contrast decisions were made in context.',
      },
    ],
    outcome: [
      'Two finished apparel graphics with distinct personalities — figurative and emblematic.',
      'A four-variant set covering black and white garments.',
      'Prints designed as real products, not just artboards.',
    ],
  },
  {
    slug: 'book-publisher',
    order: 7,
    title: 'Book Publisher Website',
    tagline: 'A publishing house site where discovery is the product — shelves, spotlights and authors, organised to browse.',
    category: 'Website · UI/UX · Publishing',
    group: 'product',
    year: '2026',
    role: 'UI/UX Designer',
    scope: 'Multi-page website — home, catalogue, book & author pages',
    disciplines: ['UX Design', 'UI Design', 'Information Architecture', 'Responsive Design'],
    tools: ['Figma'],
    deliverables: ['Homepage', 'Catalogue grids', 'Book detail pages', 'Author / event pages', 'Mobile screens'],
    figmaUrl: 'https://www.figma.com/design/SY7f5ySqqvOU2FyU2Qnas7/Book-Publisher-Website?node-id=0-1',
    accent: '#6D28D9',
    palette: [
      { hex: '#FFFFFF', name: 'Page White' },
      { hex: '#6D28D9', name: 'Publisher Purple' },
      { hex: '#DDD6FE', name: 'Lilac' },
      { hex: '#1E1B2E', name: 'Ink Navy' },
      { hex: '#F59E0B', name: 'Bookmark Amber' },
    ],
    cover: {
      layout: 'browser',
      bg: '#F5F4FB',
      accent: '#6D28D9',
      main: '/project-assets/bookpub/pages-row.jpg',
      side: ['/project-assets/bookpub/home.jpg', '/project-assets/bookpub/covers.jpg'],
    },
    challenge:
      'Turn a catalogue into a browsing experience — help readers find their next book without making them work for it.',
    challengeBody:
      'A publisher\'s site lives or dies on discovery. The design organises the catalogue the way a good bookshop does: a striking window display, clearly signed shelves, and a quiet path from cover to checkout — on desktop and mobile.',
    approach: [
      {
        title: 'Shelf-first IA',
        text: 'Structured the site around how people actually browse — featured picks, categories, authors — instead of a database-shaped sitemap.',
      },
      {
        title: 'Window display hero',
        text: 'Designed the hero as a bookshop window: a spotlight panel and a portrait, with featured covers immediately below the fold.',
      },
      {
        title: 'Cover-led grids',
        text: 'Let book covers carry the interface — dense, regular grids with restrained chrome, so the product is the UI.',
      },
      {
        title: 'Detail pages',
        text: 'Gave individual books their own stage — cover, synopsis and purchase path — with accent colour reserved for actions.',
      },
    ],
    gallery: [
      {
        src: '/project-assets/bookpub/home.jpg',
        caption: 'Homepage — window-display hero, top picks and category sections',
        tall: true,
      },
      {
        src: '/project-assets/bookpub/grid.jpg',
        caption: 'Catalogue grid — a series shelf presented as a clean cover wall',
      },
      {
        src: '/project-assets/bookpub/detail.jpg',
        caption: 'Book detail page — amber accent for the purchase path',
        tall: true,
      },
      {
        src: '/project-assets/bookpub/pages-row.jpg',
        caption: 'The page family — home, listing, detail, author and utility screens side by side',
        wide: true,
      },
      {
        src: '/project-assets/bookpub/mobile.jpg',
        caption: 'Mobile home — the same shelves collapsed to a thumb-width scroll',
        tall: true,
      },
      {
        src: '/project-assets/bookpub/covers.jpg',
        caption: 'Cover assets — the real product imagery driving the UI',
      },
    ],
    decisions: [
      {
        title: 'Purple as the house colour',
        why: 'A single violet marks the publisher\'s chrome — header, categories, footer — while covers supply all other colour.',
        benefit: 'The brand is instantly recognisable yet never fights the books.',
      },
      {
        title: 'Categories before search',
        why: 'Category cards sit on the homepage so browsing starts with one tap, not a blank search box.',
        benefit: 'Casual visitors discover; deliberate visitors still reach the catalogue fast.',
      },
      {
        title: 'Uniform cover grids',
        why: 'Books are shown at one trim size in strict grids rather than mixed card styles.',
        benefit: 'The shelf metaphor holds — the eye compares covers, not layouts.',
      },
      {
        title: 'Amber for action',
        why: 'A contrasting amber is reserved for purchase/CTA moments inside the purple system.',
        benefit: 'The path to buy stands out without breaking the palette.',
      },
      {
        title: 'Mobile shelves',
        why: 'Mobile keeps the same sections as a single column of shelves instead of a cut-down site.',
        benefit: 'Discovery works one-handed — the catalogue survives the small screen.',
      },
    ],
    outcome: [
      'A complete publishing site: homepage, catalogue grids, book detail, author and utility pages.',
      'A discovery model that behaves like a bookshop — window, shelves, spotlight.',
      'A consistent purple-led system carried from desktop to mobile.',
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getAdjacentCaseStudies = (slug: string) => {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx >= 0 && idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null,
  };
};
