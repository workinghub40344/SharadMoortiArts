import heroGanesha from "@/assets/hero-ganesha.jpg";
import catGanesha from "@/assets/cat-ganesha.jpg";
import catLakshmi from "@/assets/cat-lakshmi.jpg";
import catRadhaKrishna from "@/assets/cat-radhakrishna.jpg";
import catShiva from "@/assets/cat-shiva.jpg";
import catHanuman from "@/assets/cat-hanuman.jpg";
import catBuddha from "@/assets/cat-buddha.jpg";
import catFountains from "@/assets/cat-fountains.jpg";
import catCustom from "@/assets/cat-custom.jpg";

export const BRAND = {
  name: "Sharad Moorti Arts",
  tagline: "हस्तनिर्मित संगमरमर",
  whatsapp: "+919999999999",
  whatsappDisplay: "+91 99999 99999",
  phone: "+919999999999",
  email: "atelier@sharadmoortiarts.in",
  address: "Artisan Atelier, Makrana, Rajasthan, India",
};

export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "/collection", hasDropdown: true },
  { label: "MOORTI", href: "/collection#moorti" },
  { label: "TEMPLES", href: "/collection#temples" },
  { label: "FOUNTAINS", href: "/collection#fountains" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export const HERO = {
  image: heroGanesha,
  badges: ["Pure Makrana Marble", "Hand Carved", "Pan India Shipping"],
};

export const COLLECTION_DROPDOWN = [
  {
    title: "MOORTI (BY DEITY)",
    links: [
      { label: "Ganesha Moorti", href: "#ganesha" },
      { label: "Lakshmi Moorti", href: "#lakshmi" },
      { label: "Radha Krishna", href: "#radha-krishna" },
      { label: "Shiva Moorti", href: "#shiva" },
      { label: "Hanuman Moorti", href: "#hanuman" },
      { label: "Buddha Statues", href: "#buddha" },
    ]
  },
  {
    title: "MOORTI (BY MATERIAL)",
    links: [
      { label: "White Makrana Marble", href: "#white-marble" },
      { label: "Statuario Marble", href: "#statuario" },
      { label: "Black Indian Marble", href: "#black-marble" },
      { label: "Painted / Gold Leaf", href: "#painted" },
    ]
  },
  {
    title: "TEMPLES & STRUCTURES",
    links: [
      { label: "Home Altar Temples", href: "#temples" },
      { label: "Carved Jali Mandir", href: "#jali-temple" },
      { label: "Large Institutional Temples", href: "#large-temple" },
      { label: "Custom Pooja Units", href: "#custom-pooja" },
    ]
  },
  {
    title: "FOUNTAINS & DECOR",
    links: [
      { label: "Lotus Cascade Fountains", href: "#fountains" },
      { label: "Traditional Spout Fountains", href: "#spout-fountain" },
      { label: "Modern Abstract Features", href: "#modern-fountain" },
      { label: "Garden Marble Urns", href: "#garden-urn" },
    ]
  }
];

export const CATEGORIES = [
  { name: "Ganesha", count: 42, accent: "Vighnaharta", image: catGanesha },
  { name: "Lakshmi", count: 28, accent: "Shree", image: catLakshmi },
  { name: "Radha Krishna", count: 36, accent: "Premavatar", image: catRadhaKrishna },
  { name: "Shiva", count: 31, accent: "Mahadeva", image: catShiva },
  { name: "Hanuman", count: 19, accent: "Bajrangbali", image: catHanuman },
  { name: "Buddha", count: 24, accent: "Tathagata", image: catBuddha },
  { name: "Fountains", count: 12, accent: "Jaldhara", image: catFountains },
  { name: "Custom Murti", count: 999, accent: "Bespoke", image: catCustom },
];

export const FEATURES = [
  { title: "Hand-Carved Mastery", desc: "Each piece shaped over weeks by third-generation artisans of Makrana." },
  { title: "Curated Marble", desc: "Only the finest blocks of Makrana, Statuario and Black Indian marble." },
  { title: "Custom Sizes", desc: "From altar miniatures to monumental temple installations." },
  { title: "Insured Delivery", desc: "Fortified crating, white-glove logistics across India and beyond." },
  { title: "Temple-Ready", desc: "Pran-pratishtha aligned proportions, scripture-true iconography." },
  { title: "Personal Atelier", desc: "Dedicated curator from first sketch to home installation." },
];

export const PRODUCTS = [
  { id: 1, name: "Siddhi Vinayaka", desc: "Seated Ganesha, lotus base", price: 84000, material: "White Makrana", tag: "Bestseller", image: catGanesha },
  { id: 2, name: "Mahalakshmi Padmasana", desc: "Eight-armed Lakshmi", price: 126000, material: "Statuario Marble", tag: "Limited", image: catLakshmi },
  { id: 3, name: "Yugal Sarkar", desc: "Radha Krishna pair, raas pose", price: 168000, material: "Pure White Marble", tag: "New", image: catRadhaKrishna },
  { id: 4, name: "Nataraja", desc: "Cosmic dancing Shiva", price: 142000, material: "Black Indian Marble", tag: "Heritage", image: catShiva },
  { id: 5, name: "Bhakta Hanuman", desc: "Kneeling, folded hands", price: 64000, material: "White Makrana", tag: "Bestseller", image: catHanuman },
  { id: 6, name: "Dhyana Buddha", desc: "Meditation pose, half-lotus", price: 98000, material: "Dust Marble", tag: "New", image: catBuddha },
];

export const MOORTI_PRODUCTS = [
  ...PRODUCTS,
  { id: 7, name: "Saraswati Mata", desc: "Playing veena", price: 95000, material: "White Makrana", tag: "Divine", image: catLakshmi },
  { id: 8, name: "Ram Darbar", desc: "Complete family setup", price: 210000, material: "Pure White Marble", tag: "Premium", image: catRadhaKrishna },
  { id: 9, name: "Shiv Linga", desc: "With Nandi", price: 45000, material: "Black Indian Marble", tag: "Classic", image: catShiva },
  { id: 10, name: "Panchmukhi Hanuman", desc: "Five-faced form", price: 110000, material: "Statuario Marble", tag: "Rare", image: catHanuman },
];

export const TEMPLE_PRODUCTS = [
  { id: 1, name: "Home Altar Mandir", desc: "Compact pooja setup", price: 150000, material: "White Makrana", tag: "Popular", image: catCustom },
  { id: 2, name: "Carved Jali Temple", desc: "Intricate lattice work", price: 280000, material: "Statuario Marble", tag: "Premium", image: catCustom },
  { id: 3, name: "Dome Style Mandir", desc: "Traditional Rajasthani dome", price: 350000, material: "Pure White Marble", tag: "Heritage", image: catCustom },
  { id: 4, name: "Wall Mounted Altar", desc: "Space-saving design", price: 85000, material: "White Makrana", tag: "Modern", image: catCustom },
  { id: 5, name: "Large Courtyard Temple", desc: "Full-scale installation", price: 850000, material: "Premium Makrana", tag: "Bespoke", image: catCustom },
  { id: 6, name: "Corner Pooja Unit", desc: "Elegant corner fit", price: 120000, material: "Dust Marble", tag: "Compact", image: catCustom },
];

export const FOUNTAIN_PRODUCTS = [
  { id: 1, name: "Lotus Cascade", desc: "Three-tier lotus design", price: 180000, material: "White Makrana", tag: "Bestseller", image: catFountains },
  { id: 2, name: "Nandi Spout", desc: "Traditional temple style", price: 95000, material: "Black Indian Marble", tag: "Classic", image: catFountains },
  { id: 3, name: "Modern Abstract Fountain", desc: "Clean lines, ambient sound", price: 140000, material: "Statuario Marble", tag: "Contemporary", image: catFountains },
  { id: 4, name: "Elephant Pillar Fountain", desc: "Royal Rajasthani carving", price: 220000, material: "Pure White Marble", tag: "Heritage", image: catFountains },
  { id: 5, name: "Garden Urn Water Feature", desc: "Classical European style", price: 160000, material: "Dust Marble", tag: "Outdoor", image: catFountains },
  { id: 6, name: "Miniature Tabletop", desc: "Indoor zen feature", price: 45000, material: "White Makrana", tag: "Gift", image: catFountains },
];


export const PROCESS = [
  { step: "01", title: "Quarry Selection", desc: "Master artisan hand-selects blocks from Makrana mines, judging grain, vein and density." },
  { step: "02", title: "Rough Shaping", desc: "Stone is roughed to silhouette using traditional chisels — never automation." },
  { step: "03", title: "Hand Carving", desc: "Iconography emerges over weeks, guided by shilpa-shastra proportions." },
  { step: "04", title: "Fine Detailing", desc: "Ornaments, fabric folds and facial expression are coaxed by needle tools." },
  { step: "05", title: "Polishing", desc: "Six progressive grits bring forth marble's translucent inner glow." },
  { step: "06", title: "Pratishtha", desc: "Final blessing, signed by the lead karigar, packaged in fortified crates." },
];

export const MATERIALS = [
  { name: "White Makrana", note: "Heritage marble of the Taj. Luminous, dense, resilient." },
  { name: "Statuario Marble", note: "Snow-white field with dramatic grey veining." },
  { name: "Black Indian Marble", note: "Deep onyx tone, breathtaking for Nataraja and Shiva." },
  { name: "Dust Marble", note: "Composite finish, ideal for outdoor temples and garden installations." },
];

export const TESTIMONIALS = [
  { name: "Anjali Mehta", city: "Mumbai", rating: 5, text: "The Lakshmi we commissioned is breathtaking. Every petal of the lotus carved to perfection. Our home temple feels alive." },
  { name: "Dr. Ramesh Iyer", city: "Bengaluru", rating: 5, text: "Worked with the atelier for our family temple. Their understanding of agama proportions is rare today. Truly devotional." },
  { name: "Priya & Karan", city: "Delhi NCR", rating: 5, text: "Gifted a Radha Krishna to my parents. The packaging alone felt sacred. The piece is now the heart of their living room." },
  { name: "Vikram Singh", city: "Jaipur", rating: 5, text: "Commissioned a 5-foot Hanuman for our ancestral temple. The artisans treated it as devotion, not a transaction." },
];

export const FAQS = [
  { q: "Which marble is best for a home temple?", a: "For most home altars we recommend pure White Makrana — it is luminous, dense, and ages beautifully. For dramatic statement pieces, Statuario or Black Indian Marble are exceptional." },
  { q: "Can you create a custom size or pose?", a: "Yes. Bespoke commissions are our soul. Share your vision via WhatsApp with reference imagery, intended placement and dimensions — our master karigar will sketch a proposal." },
  { q: "How long does delivery take across India?", a: "In-stock pieces ship within 7 working days. Bespoke commissions typically take 4–10 weeks depending on size and detailing. We deliver pan-India with full insurance." },
  { q: "Do you offer Cash on Delivery?", a: "For pieces under ₹25,000 we offer COD across major cities. Larger commissions follow a milestone payment schedule with full transparency." },
  { q: "How are the moortis packaged?", a: "Each piece is wrapped in archival foam, cradled in custom-cut wood crating, sealed and stress-tested before dispatch. Damage in transit is virtually unheard of." },
  { q: "Do you fulfil temple and institutional orders?", a: "Absolutely. We have crafted murtis for temples, ashrams and corporate prayer halls across India. Dedicated project management included." },
];

export const TRUST_STRIP = [
  "Handcrafted by skilled artisans",
  "Pan India delivery",
  "Safe, insured packaging",
  "Custom orders welcome",
];
