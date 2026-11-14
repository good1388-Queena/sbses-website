/*
 * SBSES — site content, English (single source of truth for all on-page copy).
 * Edit text here; do not hard-code copy in index.html or main.js.
 * The Chinese translation is in site-content.zh.js: when you change wording here,
 * change the matching line there too. Settings that are not wording (contact details,
 * links, image paths) are written only in this file.
 * (Only the browser-tab <title> and meta description live in index.html <head>.)
 *
 * Rules (Owner decisions):
 *  - Brand name is "Smart Bookkeping Services" — spelling is intentional, do NOT correct it.
 *  - SBSES is never described as licensed / certified / chartered / a tax agent / an audit firm,
 *    and no filing or compliance outcome is promised.
 *  - No testimonials, client counts, years of experience, team size, address or SSM number
 *    unless the Owner supplies them.
 *  - Unknown facts stay as the literal string "TODO_OWNER". Anything that depends on a
 *    TODO_OWNER value is shown disabled on the page — never replace it with made-up data.
 */
window.SITE_CONTENT = {
  brand: {
    short: "SBSES",
    full: "Smart Bookkeping Services"
  },

  // English title and description also live in index.html <head>; keep the two in step.
  meta: {
    title: "SBSES · Smart Bookkeping Services",
    description: "Freelance accounting, bookkeeping and payroll support for SMEs and growing businesses."
  },

  nav: {
    ariaLabel: "Main",
    languageLabel: "Language",
    menuLabel: "Menu",
    items: [
      { label: "Home", href: "#top" },
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "About", href: "#about" },
      { label: "Knowledge Centre", href: "knowledge.html" },
      { label: "Contact", href: "#contact" }
    ],
    // Phase C (Client Portal) is not built. Keep enabled:false until it exists.
    clientLogin: {
      label: "Client Login",
      enabled: false,
      href: "TODO_OWNER",
      hint: "Client Portal — coming soon"
    },
    cta: { label: "Get a Consultation", href: "#contact" }
  },

  hero: {
    titleLines: ["Your", "Business.", "Beautifully", "Balanced."],
    strapline: "Freelance Accounting · Bookkeeping · Payroll",
    intro: "Professional, flexible and reliable accounting support for SMEs and growing businesses.",
    primary: { label: "Our Services", href: "#services" },
    secondary: { label: "Contact Us", href: "#contact" },
    illustrationAlt: "3D illustration of an open ledger with a bar chart, a pie chart, a calculator and the figures %, 5 and 8 on a round podium",
    // Shortcut links beside the 3D ledger. `target` is the id of a service in services.items.
    tags: [
      { label: "Accounting", icon: "calculator", target: "service-accounting" },
      { label: "Bookkeeping", icon: "layers", target: "service-bookkeeping" },
      { label: "Payroll", icon: "people", target: "service-payroll" },
      { label: "Compliance Support", icon: "shield", target: "service-compliance" }
    ]
  },

  services: {
    eyebrow: "What we do",
    title: "Our Services",
    intro: "Take one service or combine them. Every engagement is scoped to what your business actually needs.",
    // WhatsApp link shown under every service. {service} becomes that service's title.
    // The number itself is contact.whatsapp.number, further down: set it there only.
    enquiryLabel: "Ask on WhatsApp",
    enquiryTemplate: "Hello SBSES, I would like to ask about this service: {service}.",
    // `id` is the anchor the hero tags (and any shared link) jump to. Keep ids unchanged.
    items: [
      {
        id: "service-accounting",
        number: "01",
        title: "Full Set Accounting",
        text: "Records, reconciliations and financial reporting support."
      },
      {
        id: "service-bookkeeping",
        number: "02",
        title: "Monthly Bookkeeping",
        text: "Organised, up-to-date accounting records, maintained every month."
      },
      {
        id: "service-payroll",
        number: "03",
        title: "Payroll & Statutory Support",
        text: "Payroll calculation and payslips, with EPF, SOCSO, EIS and PCB submissions drafted for your approval. HRDF where applicable."
      },
      {
        id: "service-year-end",
        number: "04",
        title: "Year-End & Audit Preparation Support",
        text: "Schedules prepared and queries handled with your external auditor. SBSES is not an audit firm or tax agent."
      },
      {
        id: "service-compliance",
        number: "05",
        title: "Accounting Review & Compliance Administration",
        text: "Account review and administrative compliance support, within the agreed service scope."
      }
    ]
  },

  why: {
    title: "Why SBSES",
    items: [
      { title: "Flexible Support", text: "Monthly, quarterly or year-end support, shaped around how your business runs." },
      { title: "Clear Records", text: "Organised books that you and your auditor can follow." },
      { title: "SME-Focused", text: "Built for small and growing companies." },
      { title: "Practical Workflow", text: "Simple document hand-over and a steady monthly rhythm." }
    ]
  },

  process: {
    eyebrow: "Process",
    title: "How It Works",
    steps: [
      { number: "01", title: "Discuss Needs", text: "A conversation about your company and the support you need." },
      { number: "02", title: "Share Documents Securely", text: "Through a private channel we both agree on." },
      { number: "03", title: "Prepare & Review", text: "Accounts and payroll are prepared, then reviewed before they reach you." },
      { number: "04", title: "Ongoing Support", text: "Month after month, through to year end." }
    ],
    notice: "Please do not send bank statements, payslips or identity documents through a public contact form or a first enquiry message. Sensitive files are shared only through a private channel we agree on first."
  },

  about: {
    eyebrow: "About",
    titleLead: "A freelance practice,",
    titleAccent: "personally run.",
    paragraphs: [
      "SBSES provides freelance accounting, bookkeeping and payroll support for SMEs. You work with the same person each month, someone who knows your accounts.",
      "Audit and tax filing remain with your own appointed auditor and tax agent. SBSES prepares the records and schedules they need."
    ],
    // Set src to an image path (e.g. "assets/img/about.jpg") once the Owner supplies one.
    image: {
      src: "TODO_OWNER",
      alt: "TODO_OWNER",
      placeholderLines: ["TODO_OWNER", "photo or brand image"]
    }
  },

  // Wording for the Knowledge Centre. The articles, topics and official links themselves
  // are in knowledge-content.js.
  knowledge: {
    eyebrow: "Resources",
    title: "Knowledge Centre",
    teaser: "Plain-language notes on Malaysian accounting, tax and payroll topics, with links to the official sources.",
    cta: { label: "Visit the Knowledge Centre", href: "knowledge.html" },
    intro: "Plain-language notes on Malaysian accounting, tax and payroll topics. Each article shows when it was last reviewed and links to the official source.",
    allLabel: "All topics",
    readLabel: "Read article",
    backLabel: "All articles",
    publishedLabel: "Published",
    reviewedLabel: "Last reviewed",
    emptyAll: "The first articles are being prepared. In the meantime, the official sites below are the best place to check the current rules.",
    emptyTopic: "No articles in this topic yet. The official sites below are the best place to check the current rules.",
    sourcesTitle: "Official sources",
    sourcesIntro: "Rules and rates change. These are the official sites to confirm the current position.",
    articleSourcesTitle: "Sources for this article",
    missing: "This article could not be found. It may have been moved or withdrawn.",
    draftLabel: "Draft — not yet published",
    disclaimer: "General information only, not tax, legal or professional advice. SBSES is not a tax agent or audit firm. Rules change: please confirm with the official source or your own tax agent before acting."
  },

  contact: {
    title: "Let’s Simplify Your Accounts.",
    whatsapp: {
      label: "WhatsApp Consultation",
      // International format, digits only (country code 60 + number, no "+" or spaces).
      // Buttons stay disabled while this is TODO_OWNER.
      number: "601111959627",
      prefill: "Hello SBSES, I would like to ask about your accounting services."
    },
    email: {
      label: "Email Us",
      address: "smartbookkeping.acc@gmail.com"
    },
    serviceArea: "Kulai to Johor Bahru",
    serviceAreaPrefix: "Serving",
    pendingPrefix: "TODO_OWNER:",
    pendingLabels: {
      whatsapp: "WhatsApp number",
      email: "email",
      serviceArea: "service area"
    }
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for is not here. It may have moved, or the link may be incomplete.",
    action: { label: "Back to Home", href: "/" }
  },

  footer: {
    strapline: "Freelance Accounting · Bookkeeping · Payroll",
    privacy: { label: "Privacy Policy", href: "TODO_OWNER" },
    // Business registration line (e.g. SSM details). Shown as a TODO marker until supplied.
    registration: "TODO_OWNER",
    registrationPending: "TODO_OWNER: registration details"
  }
};
