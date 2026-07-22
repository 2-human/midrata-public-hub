/* proposal-hub — CONTENT INSTANCE: Midrata Demand Test (window.HUB).
 * The chassis (hub.html, pinned 2.0.0) is never edited; it renders entirely from this file.
 *
 * Prepared by Prota Studios (Vernon Steward) for Midrata. This hub is a MOCKUP of the
 * demand-test design in "Midrata — Demand Test Brief" (17 Jul 2026). Every ad, landing
 * page, reservation and figure here is illustrative. The lead forecast is modeled from
 * financial-services and crypto-vertical Meta benchmarks; see the Forecast view.
 *
 * House style: no em-dashes, no emojis in agency voice, hedge current-state reads with
 * "may / could / might", second person, American English. (Ad/social MOCKUP captions may
 * use emojis; they imitate the feed.)
 *
 * COMPLIANCE NOTE (governs all copy): Midrata is legally a security and cannot yet sell.
 * No creative in this hub says or implies buy / invest / purchase. All CTA and disclaimer
 * wording is a placeholder for General Counsel (Michael Munneke) sign-off before launch. */

var WEB = "https://midrata.com/";
// Placeholder media: dark forest (Midrata brand — see brand/BRANDBOOK.md) so the mockup renders offline.
var IMG = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='480'%20height='360'%3E%3Crect%20width='480'%20height='360'%20fill='%230a130c'/%3E%3Ccircle%20cx='300'%20cy='130'%20r='150'%20fill='%232f4a32'%20opacity='0.5'/%3E%3Ccircle%20cx='360'%20cy='90'%20r='95'%20fill='%235f7355'%20opacity='0.32'/%3E%3Crect%20x='70'%20y='0'%20width='34'%20height='360'%20fill='%23050807'/%3E%3Crect%20x='168'%20y='0'%20width='26'%20height='360'%20fill='%23070a08'/%3E%3Crect%20x='250'%20y='0'%20width='42'%20height='360'%20fill='%23040604'/%3E%3Crect%20x='384'%20y='0'%20width='30'%20height='360'%20fill='%23060907'/%3E%3C/svg%3E";

var IC = {
  doc:    `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v13"/><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v14H6a2 2 0 0 0-2 1.2z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v14h6a2 2 0 0 1 2 1.2z"/></svg>`,
  list:   `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h5M10 17h5"/></svg>`,
  chart:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6M20 16v-9"/></svg>`,
  nodes:  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h5a2 2 0 0 1 2 2v2M7 18h5a2 2 0 0 0 2-2v-2"/></svg>`,
  send:   `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-7-7 18-2-7-9-4z"/></svg>`,
  window: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>`,
  chat:   `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v12H7l-3 3z"/></svg>`,
  crm:    `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>`,
  shield: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  people: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.6"/><path d="M3.5 20v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1"/><path d="M16 14.2a4 4 0 0 1 4.5 4.3V20"/></svg>`,
};

window.HUB = {

  /* ---- AGENCY (Prota Studios; the studio running the test) ------------------ */
  agency: {
    name: "Prota",
    unit: "Studios",
    org:  "Prota Studios",
    lang: "en",
    logo: "<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-label='Prota Studios'><path d='M16 2l3.4 8.4L28 12l-6.2 6 1.4 8.4L16 22.6 8.8 26.4 10.2 18 4 12l8.6-1.6z' fill='#f3ecdd'/></svg>",
    favicon: "favicon.svg",
    tokens: {
      accent: "#c9a15a", accentStrong: "#a8823c", accentSoft: "#f3ead6",
      ink: "#12141d", ink2: "#1d2130", inkMuted: "rgba(18,20,29,.56)",
      sidebar: "#0d1122", bg: "#f6f5f1", bgAlt: "#ecebe1", hairline: "rgba(18,20,29,.12)",
      onDark: "#f3ecdd",
    },
    fonts: { display: "Georgia,'Times New Roman',serif", body: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" },
  },

  /* ---- PITCH (who this hub is for) ----------------------------------------- */
  brand: {
    proposalFor: "Midrata",
    foot: "Prota Studios.<br>Demand-test design for Midrata. Every surface here is a review candidate, not live creative. All copy is subject to General Counsel sign-off.",
  },
  favicon: "favicon.svg",
  defaultView: "intro",
  WEB: WEB,

  sitepane: `
      <p class="sitepane__lede">A working prototype of the Midrata microsite, built in the brand derived from midrata.com (black canvas, forest photography, Styrene-style uppercase). Every page and the reservation flow are clickable.</p>
      <p class="sitepane__h">What it contains</p>
      <div class="sp-point"><b>Two articles</b><span>One per value proposition. Cash-flow ("Income you don't have to manage") for the warm niche; anti-establishment ("Built for a different century") for the broad audience. Article-led ads point here.</span></div>
      <div class="sp-point"><b>Two landing pages</b><span>Same two value propositions, headline swapped, one fake-door reservation each. Direct ads point straight here; articles lead here.</span></div>
      <div class="sp-point"><b>Legally safe</b><span>Every CTA is a soft-commitment reservation. No buy, invest, purchase, presale, or price. Copy pending General Counsel sign-off.</span></div>
      <p class="sitepane__kicker">The whole cluster, ads to reservations, is mapped in Content cluster.</p>
  `,

  /* ---- NAV ----------------------------------------------------------------- */
  nav: [
    { section: "Demand test", items: [
      { view: "intro",     label: "Overview",         icon: IC.doc },
      { view: "recs",      label: "The test design",  icon: IC.list },
      { view: "forecast",  label: "Lead forecast",    icon: IC.chart },
    ]},
    { section: "Creative & funnel", items: [
      { view: "ads",       label: "Meta ad sets",     icon: IC.send,   badge: 4 },
      { view: "cluster",   label: "Content cluster",  icon: IC.nodes },
      { view: "website",   label: "Microsite",        icon: IC.window },
      { view: "social",    label: "Organic layer",    icon: IC.chat,   badge: 3 },
    ]},
    { section: "Signal", items: [
      { view: "crm",       label: "Reservations",     icon: IC.crm,    badge: 5 },
    ]},
    { section: "Governance", items: [
      { view: "compliance", label: "Compliance & standards", icon: IC.shield },
      { view: "people",     label: "Team & roles",           icon: IC.people },
    ]},
  ],

  /* ---- PER-VIEW TOOLBAR + TYPE --------------------------------------------- */
  VIEWS: {
    intro:      { title: "Overview", sub: "A behavioral demand signal, built to move a skeptical investor", open: WEB, openLabel: "Open midrata.com ↗" },
    recs:       { title: "The test design", sub: "Two audiences, two messages, one fake-door funnel" },
    forecast:   { title: "Lead forecast", sub: "Modeled from financial and crypto-vertical Meta benchmarks", tbBadge: "Vertical model" },
    ads:        { title: "Meta ad sets", sub: "Two messages, two routes: to an article, or straight to the landing page" },
    cluster:    { title: "Content cluster", sub: "How the ads, articles and landing pages connect, per value proposition" },
    website:    { title: "Microsite", sub: "Articles map to the ads and lead to value-proposition landing pages", open: "https://learn.midrata.com/", openLabel: "Open the microsite ↗", tbBadge: "Prototype", infoPane: true },
    social:     { title: "Organic layer", sub: "Existing Substack and video content, repurposed as top of funnel" },
    crm:        { title: "Reservations", sub: "Every reservation traced to its ad set, with self-reported investment range" },
    compliance: { title: "Compliance & standards", sub: "The legal gate, and the web-quality standards the funnel is built to", tbBadge: "GC sign-off required" },
    people:     { title: "Team & roles", sub: "Who owns what across Midrata and Prota" },
  },

  /* ---- SOCIAL: platform chrome + organic posts ----------------------------- */
  PF: {
    linkedin:  { name: "LinkedIn",  cls: "li", tag: "in" },
    facebook:  { name: "Facebook",  cls: "fb", tag: "f"  },
    instagram: { name: "Instagram", cls: "ig", tag: "◉" },
  },
  socialMeta: { heading: "Organic layer: the anti-establishment register",
    lede: "3 existing pieces &middot; Substack and video &middot; no direct call to action yet. These already run in Midrata's voice and can warm an audience ahead of retargeting, at no incremental media cost." },
  social: [
    { slug: "trust-in-banks-collapsed", title: "Trust in banks has collapsed", location: "Substack",
      img: IMG, article: WEB,
      posts: {
        linkedin:  { cap: "Confidence in banks sits near 25 percent, down from about 60 percent before 2008 (Gallup). The institutions were built for a different century. The question is not whether they failed you. It is what you build instead.", tags: ["#Inflation", "#Trust", "#WealthClub"] },
        facebook:  { cap: "The system was not built for you. 🏦 Trust in banks is near a record low, and the people paying for it are everyday families. There is a better way to think about this.", tags: [] },
      }},
    { slug: "you-cant-spend-bitcoin", title: "You can't pay your mortgage with Bitcoin", location: "Video",
      img: IMG, article: WEB,
      posts: {
        linkedin:  { cap: "Bitcoin is a store of value. It is not spendable on the bills that actually stress you: the mortgage, the cards, the insurance. What if an asset streamed to you, and could be spent on exactly those things?", tags: ["#Bitcoin", "#InflationHedge"] },
        instagram: { cap: "Store of value ≠ spendable. 🧠 Watch to the end. Full piece on our page.", tags: ["#bitcoin", "#inflation", "#money"] },
      }},
    { slug: "taxes-inflation-debt", title: "Taxes, inflation, debt: it's extraction", location: "Substack",
      img: IMG, article: WEB,
      posts: {
        linkedin:  { cap: "Taxes, inflation, debt. For most people that is not an accident, it is extraction. This is the register our audience already responds to. The next step is turning that recognition into a reason to act.", tags: ["#Freedom", "#Corruption", "#FinancialSystem"] },
        facebook:  { cap: "Taxes. Inflation. Debt. It's extraction, and you feel it every month. 🔥 Let's build something better.", tags: [] },
      }},
  ],

  /* ---- CRM: reservation pipeline ------------------------------------------- */
  STAGES: { "New reservation": "st-new", "Qualified": "st-contacted", "High intent ($25K+)": "st-visit", "Nurture": "st-quoted", "Disqualified": "st-lost" },
  leads: [
    { id: "R-1042", name: "Danielle Frost", email: "danielle.frost@example.com", phone: "(555) 010-4471", postcode: "78704",
      projectType: "Freedom Pass reservation", idealStart: "As soon as it opens",
      message: "Follow real estate and passive income accounts. Reserved after the cash-flow ad. Self-reported range: $25,000 to $50,000.",
      page: "Landing page · Reserve (Ad set 1)", pageUrl: WEB, srcShort: "Warm niche · cash-flow", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "midrata-demand-test", content: "warm-cashflow", term: "-" },
      stage: "High intent ($25K+)", date: "18 Jul 2026", notes: "High-value warm-niche reservation. Weight heavily in the investor readout." },
    { id: "R-1039", name: "Marcus True", email: "marcus.true@example.com", phone: "(555) 010-3320", postcode: "44107",
      projectType: "Freedom Pass reservation", idealStart: "In the next few months",
      message: "Came from the anti-establishment ad. Frustrated with inflation and bank fees. Self-reported range: $5,000 to $10,000.",
      page: "Landing page · Reserve (Ad set 4)", pageUrl: WEB, srcShort: "Broad · anti-establishment", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "midrata-demand-test", content: "broad-antiestablishment", term: "-" },
      stage: "Qualified", date: "17 Jul 2026", notes: "Broad-audience reservation. Typical mid-range self-report. Good proof of everyday-people intent." },
    { id: "R-1036", name: "Priya Raman", email: "priya.raman@example.com", phone: "(555) 010-8890", postcode: "94040",
      projectType: "Freedom Pass reservation", idealStart: "As soon as it opens",
      message: "FIRE-adjacent. Compared it to REITs and syndications in the notes. Self-reported range: $50,000 or more.",
      page: "Landing page · Reserve (Ad set 1)", pageUrl: WEB, srcShort: "Warm niche · cash-flow", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "midrata-demand-test", content: "warm-cashflow", term: "-" },
      stage: "High intent ($25K+)", date: "16 Jul 2026", notes: "Sophisticated warm-niche lead. Will want to see how Midrata differs from a REIT. Strong investor-facing signal." },
    { id: "R-1031", name: "Andre Willis", email: "andre.willis@example.com", phone: "(555) 010-2214", postcode: "30310",
      projectType: "Freedom Pass reservation", idealStart: "Just exploring",
      message: "Reserved from the Bitcoin-alternative angle inside the anti-establishment set. Curious, low commitment. Self-reported range: under $5,000.",
      page: "Landing page · Reserve (Ad set 2)", pageUrl: WEB, srcShort: "Warm niche · anti-establishment", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "midrata-demand-test", content: "warm-antiestablishment", term: "-" },
      stage: "Nurture", date: "15 Jul 2026", notes: "Low-commitment reservation. Keep in the nurture track, do not over-weight in the readout." },
    { id: "R-1024", name: "Sofia Delgado", email: "sofia.delgado@example.com", phone: "(555) 010-6675", postcode: "33135",
      projectType: "Freedom Pass reservation", idealStart: "In the next few months",
      message: "Broad audience, cash-flow message. Liked that the token could go toward the mortgage. Self-reported range: $10,000 to $25,000.",
      page: "Landing page · Reserve (Ad set 3)", pageUrl: WEB, srcShort: "Broad · cash-flow", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "midrata-demand-test", content: "broad-cashflow", term: "-" },
      stage: "Qualified", date: "14 Jul 2026", notes: "Broad-audience, mid-range self-report. Cross-message read: cash-flow may travel to the broad audience better than expected." },
  ],

  /* ---- EDITORIAL / STATIC-HTML VIEWS --------------------------------------- */
  html: {

    intro: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Demand test for Midrata</p>
      <h1>Overview</h1>
      <p class="brief__lede">This hub is one connected system pointed at a single question: is there real, behaviorally-grounded demand for a Freedom Pass, strong enough to move a skeptical investor, and can we prove it without crossing the legal line. Every surface here either produces that signal or proves it worked.</p>
      <blockquote class="brief__quote">&ldquo;Wealthy people don't feel the need for cash-flowing investments, so why would everyday people? Prove real demand.&rdquo;<cite>Dave Leland, the investor this test has to convince</cite></blockquote>
      <div class="brief__body">
        <p>The product's audience is everyday consumers, but the test's output has to satisfy a sophisticated investor. That raises the bar past &ldquo;did people click&rdquo; to &ldquo;is this a credible, defensible signal.&rdquo; A survey where people self-report interest is weak evidence (nearly everyone says a free-sounding idea is great). So the design centers on a behavioral proxy: a reservation click on a purchase-like call to action, captured and attributed.</p>
        <p class="brief__aside">Start with <b>The test design</b> for the two-by-two we would run, then <b>Lead forecast</b> for the numbers. <b>Meta ad sets</b>, <b>Landing page</b> and <b>Organic layer</b> are the funnel. <b>Reservations</b> is the signal. <b>Compliance &amp; standards</b> governs every word of it.</p>
      </div>
      <div class="brief__sec">
        <p class="brief__num">!</p>
        <div class="brief__body">
          <h2>The constraint that shapes everything</h2>
          <p>Midrata is legally classified as a security and cannot yet collect money or simulate a sale. That is not a detail, it is the design constraint. Read it before anything else.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">No sale language</div><div class="state__v">No ad, page or button can say or imply buy, invest, purchase, or a completed transaction. The workable alternative is a soft-commitment reservation.</div></div>
            <div class="state__row"><div class="state__k">GC sign-off</div><div class="state__v">Every CTA, disclaimer and any return figure must be approved by General Counsel (Michael Munneke) before creative is built, not just before launch.</div></div>
            <div class="state__row"><div class="state__k">Platform review</div><div class="state__v">Financial and crypto-adjacent creative draws extra scrutiny on Meta. Ad-account standing should be confirmed early, since review can eat into a short flight.</div></div>
            <div class="state__row"><div class="state__k">Report cleanly</div><div class="state__v">The historical 7,400 badge-presale figure is a different funnel. Keep it strictly separate from new demand-test results in any investor-facing material.</div></div>
          </div>
        </div>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Midrata. Figures across this hub are illustrative; the forecast is modeled from financial and crypto-vertical Meta benchmarks.</p></div>
    </div>
  `,

    recs: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Demand test for Midrata</p>
      <h1>The test design</h1>
      <p class="brief__lede">Not a sprawling campaign, but a small, disciplined test that gives a clean read on two variables at once: which audience responds, and which message lands. On a five-to-ten-thousand-dollar budget, a clean read on two things beats a noisy read on six.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Where Midrata stands today</h2>
          <p>Strong conviction, real prior interest, and very little tested. This is the honest starting position, and some of it may shift as the work begins.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Prior interest</div><div class="state__v">7,400-plus expressions of interest exist, but they come from an earlier badge presale that was unwound into SAFE notes. That is a different funnel and should not be conflated with fresh signups.</div></div>
            <div class="state__row"><div class="state__k">No ICP yet</div><div class="state__v">No formal ideal-customer-profile work has been done. Audience definitions here are working hypotheses to be tested, so this test doubles as a first real segmentation data point.</div></div>
            <div class="state__row"><div class="state__k">Assets on hand</div><div class="state__v">A website, a Google interest form, six teaser and pitch decks, and organic Substack and video content in the anti-establishment register. Enough raw material to assemble creative without starting from a blank page.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>The strategy: a behavioral signal inside the legal line</h2>
          <p>Send paid traffic to a dedicated landing page (not the Google form) that presents the value proposition and a soft-commitment call to action: Reserve Your Freedom Pass. On click, before any money or account details, the page reveals that membership is not yet available and invites the visitor onto the early-access list, then captures name, email, phone and the two qualifying questions already in use.</p>
          <p class="brief__aside">This produces a click-through on a purchase-like CTA, which is meaningfully stronger proof than a checked box, while staying entirely non-transactional. A Google form cannot carry a pixel, so it cannot tell you which audience and message produced the signal. The landing page can.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>What we would build: the two-by-two</h2>
          <p>Two genuinely different audiences, two ready-made messages, held constant everywhere else so the read is attributable. Four ad sets, one channel, one landing page, one shared CTA.</p>
          <div class="ledger">
            <div class="ledger__head"><span>&nbsp;</span><span>Warm niche (RE / passive income / FIRE)</span><span>Broad everyday people (inflation / debt / distrust)</span></div>
            <div class="ledger__row"><span class="lg-seg">Cash-flow / passive income<br><small>&ldquo;What if investing paid you every week?&rdquo;</small></span><span class="lg-build">Ad set 1</span><span class="lg-build">Ad set 3</span></div>
            <div class="ledger__row"><span class="lg-seg">Anti-establishment / freedom<br><small>&ldquo;Taxes, inflation, debt. Let's build something better.&rdquo;</small></span><span class="lg-build">Ad set 2</span><span class="lg-build">Ad set 4</span></div>
          </div>
          <p style="margin-top:.9rem">The warm niche is likely cheaper to reach and higher intent, but more sophisticated and quicker to compare Midrata to a REIT. The broad audience is larger and colder, and a harder concept to land in a single ad. Two other messages exist (the Bitcoin-alternative and the generational-institution framings); the first can ride inside the anti-establishment set, the second is better as landing-page credibility copy than as a direct-response ad.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>How it adds up to a defensible number</h2>
          <p><b>Get in front.</b> Meta's interest targeting reaches both audiences. <b>Clear the legal line.</b> The fake-door reservation captures intent without a transaction. <b>Attribute it.</b> A pixel plus per-ad-set UTMs traces every reservation to its audience and message. <b>Weight it.</b> A $25,000-plus self-report from the warm niche counts differently than &ldquo;just curious&rdquo; from the broad audience.</p>
          <p class="brief__aside">The headline metric for the investor is not raw signups, it is cost per reservation and the self-reported investment mix behind it. That is the number that answers Dave.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Midrata. All CTA and disclaimer wording is placeholder pending General Counsel sign-off.</p></div>
    </div>
  `,

    forecast: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Demand test for Midrata</p>
      <h1>Lead forecast</h1>
      <p class="brief__lede">These numbers are not guesses. They are modeled from how paid Meta acquisition behaves in Midrata's actual category, financial services with crypto-adjacent creative, then run through the friction of this specific funnel. Below: the grounds the model rests on, the funnel itself, and reservations at three spend levels.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>The grounds: what this vertical does on Meta</h2>
          <p>Financial services is consistently one of the most expensive categories to advertise on Meta, and token or crypto-adjacent creative sits inside a restricted class that adds review and narrows delivery. That is the starting fact. These are Prota's working ranges for the category, not a single cited dataset, and each would be re-based on Midrata's first real read.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Lever</span><span>What the vertical does</span><span>Modeled range</span></div>
            <div class="ledger__row"><span class="lg-seg">CPM (cost per 1,000)</span><span class="lg-now">Finance is a top-tier-priced auction; crypto sits in a restricted class with narrower delivery, which pushes effective CPM higher still.</span><span class="lg-why"><b>$12 to $25</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Link click-through</span><span class="lg-now">Considered financial offers earn a modest click rate versus impulse consumer offers. The warm niche runs above, the cold broad audience below.</span><span class="lg-why"><b>0.9% to 1.4%</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Landing to reservation</span><span class="lg-now">A light-friction waitlist capture (email plus two qualifying questions) behind a fake-door reveal converts in a known band, well below a one-tap native form.</span><span class="lg-why"><b>8% to 11%</b></span></div>
            <div class="ledger__row"><span class="lg-seg">Policy drag</span><span class="lg-now">Financial and crypto creative can face added review or throttled delivery, which shortens an already short flight and lifts cost.</span><span class="lg-why"><b>Risk to the downside</b></span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>The funnel, and where Midrata sits inside the band</h2>
          <p>Each scenario multiplies the three levers into a cost per reservation (CPM, then link click-through, then landing-page reservation rate). Three things decide where a given ad set lands inside the range.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Category</div><div class="state__v">Financial and crypto-adjacent creative draws extra Meta scrutiny and higher CPMs than a broad, uncontested audience, so the cost floor is well above a typical consumer offer.</div></div>
            <div class="state__row"><div class="state__k">Friction</div><div class="state__v">A landing page with a fake-door reveal converts lower than a one-tap native instant form, which is the price of a stronger, behavioral signal.</div></div>
            <div class="state__row"><div class="state__k">Qualification</div><div class="state__v">The two qualifying questions intentionally filter, trading raw volume for a stronger, investor-grade signal.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>Reservations by spend</h2>
          <p>Optimistic assumes the warm niche and clean policy standing; base is the blended read across the four ad sets; conservative assumes cold-audience economics and some policy drag.</p>
          <table style="width:100%;border-collapse:collapse;margin:.6rem 0 .2rem;font-size:.92rem">
            <thead>
              <tr style="text-align:left;border-bottom:2px solid var(--ink)">
                <th style="padding:.5rem .4rem">Scenario</th>
                <th style="padding:.5rem .4rem">Assumptions</th>
                <th style="padding:.5rem .4rem;text-align:right">Cost / reservation</th>
                <th style="padding:.5rem .4rem;text-align:right">$5K</th>
                <th style="padding:.5rem .4rem;text-align:right">$10K</th>
                <th style="padding:.5rem .4rem;text-align:right">$15K</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--hairline)">
                <td style="padding:.5rem .4rem"><b>Optimistic</b></td>
                <td style="padding:.5rem .4rem">CPM $12 &middot; CTR 1.4% &middot; LP 11%</td>
                <td style="padding:.5rem .4rem;text-align:right"><b>$7.79</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>642</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>1,283</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>1,925</b></td>
              </tr>
              <tr style="border-bottom:1px solid var(--hairline);background:var(--accent-soft)">
                <td style="padding:.5rem .4rem"><b>Base case</b></td>
                <td style="padding:.5rem .4rem">CPM $18 &middot; CTR 1.0% &middot; LP 10%</td>
                <td style="padding:.5rem .4rem;text-align:right"><b>$18.00</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>278</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>556</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>833</b></td>
              </tr>
              <tr>
                <td style="padding:.5rem .4rem"><b>Conservative</b></td>
                <td style="padding:.5rem .4rem">CPM $25 &middot; CTR 0.9% &middot; LP 8%</td>
                <td style="padding:.5rem .4rem;text-align:right"><b>$34.72</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>144</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>288</b></td>
                <td style="padding:.5rem .4rem;text-align:right"><b>432</b></td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:.82rem;color:var(--ink-muted);margin:.3rem 0 0">Investor-grade subset (reservations self-reporting $25,000 or more, about one in five): optimistic 128 / 257 / 385; base 56 / 111 / 167 across $5K / $10K / $15K.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>What the numbers say about the targets</h2>
          <p>Michelle's realistic target of 1,000-plus reservations is reachable, but only in the optimistic case at roughly $8,000-plus of media, or in the base case nearer $18,000. It needs the upper end of budget and strong creative together. The stretch target of 10,000 is not attainable at this budget under any credible scenario, and saying so plainly is part of the credibility this test is meant to build.</p>
          <p class="brief__aside">Plan the readout around cost per reservation, most likely in the fifteen-to-twenty-dollar range blended across the four ad sets, with the warm niche pulling below and the cold broad audience above. That blended number, and the self-reported investment mix behind it, is the honest signal to put in front of the investor.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Midrata, 22 Jul 2026. Forecast modeled from financial-services and crypto-vertical Meta benchmarks; ranges are Prota estimates for the category and would be re-based on the first real read.</p></div>
    </div>
  `,

    ads: `
    <div class="ads">
      <h1>Meta ad sets: two messages, two routes</h1>
      <p class="lede">Each value proposition runs in two creative routes we can compare: an <strong>article-led</strong> ad that sends cold traffic to a microsite article first, and a <strong>direct</strong> ad that goes straight to that value proposition's landing page. Same message, different depth of warm-up, so we learn whether the article earns its click. Creative is dark-forest per the Midrata brand. All copy is placeholder pending General Counsel sign-off; no promised return figures.</p>
      <div class="ad-grid">
        <div>
          <p class="ad-label">Message A &middot; Cash-flow &middot; <b>route: &rarr; Article</b></p>
          <div class="fb">
            <div class="fb__head"><div class="fb__avatar"></div><div class="fb__who"><b>Midrata</b><span>Sponsored &middot; &#127760;</span></div></div>
            <div class="fb__text">What if your money paid you every week? 💸 No property to manage, no huge upfront capital. Here is what it actually means for an asset to pay you.</div>
            <div class="fb__media"><img src="${IMG}" alt="Midrata forest creative"></div>
            <div class="fb__link"><div class="lk"><small>learn.midrata.com</small><b>Income you don't have to manage</b><span>A 4-minute read.</span></div><a class="fb__cta" href="#cluster" rel="noopener">Read More</a></div>
            <div class="fb__react"><span>&#128077; Like</span><span>&#128172; Comment</span><span>&#10150; Share</span></div>
          </div>
        </div>
        <div>
          <p class="ad-label">Message A &middot; Cash-flow &middot; <b>route: &rarr; Landing page</b></p>
          <div class="fb">
            <div class="fb__head"><div class="fb__avatar"></div><div class="fb__who"><b>Midrata</b><span>Sponsored &middot; &#127760;</span></div></div>
            <div class="fb__text">Income you don't have to manage. 🌲 A member-owned pool of real-world assets, streamed back to you and built to be spent. Reserve your place in early access.</div>
            <div class="fb__media"><img src="${IMG}" alt="Midrata forest creative"></div>
            <div class="fb__link"><div class="lk"><small>learn.midrata.com &middot; early access</small><b>Reserve your place</b><span>No payment today.</span></div><a class="fb__cta primary" href="#website" rel="noopener">Reserve</a></div>
            <div class="fb__react"><span>&#128077; Like</span><span>&#128172; Comment</span><span>&#10150; Share</span></div>
          </div>
        </div>
        <div>
          <p class="ad-label blue">Message B &middot; Anti-establishment &middot; <b>route: &rarr; Article</b></p>
          <div class="fb">
            <div class="fb__head"><div class="fb__avatar"></div><div class="fb__who"><b>Midrata</b><span>Sponsored &middot; &#127760;</span></div></div>
            <div class="fb__text">Taxes, inflation, debt. For most people that is extraction, not accident. 🔥 Read why the old system stopped working, and what replaces it.</div>
            <div class="fb__media"><img src="${IMG}" alt="Midrata forest creative"></div>
            <div class="fb__link"><div class="lk"><small>learn.midrata.com</small><b>Built for a different century</b><span>A 4-minute read.</span></div><a class="fb__cta" href="#cluster" rel="noopener">Read More</a></div>
            <div class="fb__react"><span>&#128077; Like</span><span>&#128172; Comment</span><span>&#10150; Share</span></div>
          </div>
        </div>
        <div>
          <p class="ad-label blue">Message B &middot; Anti-establishment &middot; <b>route: &rarr; Landing page</b></p>
          <div class="fb">
            <div class="fb__head"><div class="fb__avatar"></div><div class="fb__who"><b>Midrata</b><span>Sponsored &middot; &#127760;</span></div></div>
            <div class="fb__text">The system wasn't built for you. 🌲 A member-owned alternative grounded in real-world assets. Let's build something better. Reserve your place.</div>
            <div class="fb__media"><img src="${IMG}" alt="Midrata forest creative"></div>
            <div class="fb__link"><div class="lk"><small>learn.midrata.com &middot; early access</small><b>Reserve your place</b><span>No payment today.</span></div><a class="fb__cta primary" href="#website" rel="noopener">Reserve</a></div>
            <div class="fb__react"><span>&#128077; Like</span><span>&#128172; Comment</span><span>&#10150; Share</span></div>
          </div>
        </div>
      </div>
      <p style="margin-top:1.4rem;font-size:.86rem;color:var(--ink-muted)">Four creatives here are the routing test (message &times; route). Crossed with the two audiences (warm niche, broad), that is the full ad-set grid; audience is held out of this view so the routing read stays clean. The article-led and direct routes both terminate at the same value-proposition landing page and its fake-door reservation. See the <b>Content cluster</b> for the full map.</p>
    </div>
  `,

    website: `
    <iframe title="Midrata microsite prototype" srcdoc="<!doctype html><meta charset='utf-8'><body style='margin:0;font-family:Archivo,Helvetica Neue,Arial,sans-serif;color:#fff;background:#000'>
      <header style='display:flex;justify-content:space-between;align-items:center;height:60px;padding:0 2rem;border-bottom:1px solid rgba(255,255,255,.14)'>
        <span style='font-weight:700;letter-spacing:.22em;font-size:1rem'>MIDRATA</span>
        <span style='font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;opacity:.7'>Cash flow &nbsp;&nbsp; The system &nbsp;&nbsp; Reserve</span>
      </header>
      <section style='position:relative;min-height:360px;display:flex;align-items:flex-end;padding:2.5rem 2rem;background:linear-gradient(180deg,rgba(0,0,0,.82),rgba(0,0,0,.3) 40%,rgba(0,0,0,.95)),radial-gradient(120% 80% at 70% 20%,#33502F,#182617 45%,#050805)'>
        <div>
          <p style='text-transform:uppercase;letter-spacing:.24em;font-size:.72rem;color:#8CA17A;margin:0 0 1rem'>A next-generation wealth club</p>
          <h1 style='text-transform:uppercase;letter-spacing:.04em;font-weight:700;font-size:2.6rem;line-height:1.08;margin:0'>Money you can<br>actually use.</h1>
          <p style='max-width:52ch;font-size:1.05rem;line-height:1.5;color:#EDEFEA;margin-top:1.1rem'>Clear terms. Real utility. No hype. A member-owned way to hold and spend value, grounded in real-world assets rather than speculation.</p>
          <span style='display:inline-block;margin-top:1.6rem;border:1px solid #fff;padding:.9rem 1.7rem;text-transform:uppercase;letter-spacing:.16em;font-size:.78rem;font-weight:600'>Reserve your place</span>
        </div>
      </section>
      <section style='padding:2.5rem 2rem'>
        <p style='text-transform:uppercase;letter-spacing:.24em;font-size:.72rem;color:#5F7355;margin:0 0 1rem'>Two ways in</p>
        <div style='display:grid;grid-template-columns:1fr 1fr;gap:1.2rem'>
          <div style='border:1px solid rgba(255,255,255,.14);padding:1.6rem;background:linear-gradient(180deg,rgba(36,56,42,.28),transparent)'>
            <p style='text-transform:uppercase;letter-spacing:.2em;font-size:.66rem;color:#8CA17A;margin:0 0 .6rem'>Cash flow</p>
            <b style='text-transform:uppercase;letter-spacing:.06em;font-size:1.1rem'>Income you don't have to manage</b>
            <p style='color:#9a9a92;font-size:.9rem'>Article &rarr; cash-flow landing page. For the warm niche.</p>
          </div>
          <div style='border:1px solid rgba(255,255,255,.14);padding:1.6rem;background:linear-gradient(180deg,rgba(36,56,42,.28),transparent)'>
            <p style='text-transform:uppercase;letter-spacing:.2em;font-size:.66rem;color:#8CA17A;margin:0 0 .6rem'>The system</p>
            <b style='text-transform:uppercase;letter-spacing:.06em;font-size:1.1rem'>Built for a different century</b>
            <p style='color:#9a9a92;font-size:.9rem'>Article &rarr; anti-establishment landing page. For the broad audience.</p>
          </div>
        </div>
      </section>
      <section style='background:#fff;color:#000;padding:2rem'>
        <p style='background:#F2F1EC;border:1px solid #d9d8cf;padding:1rem;font-size:.9rem;margin:0 0 1rem'><b>Midrata isn't available in your area yet.</b> Membership requires securities registration we're completing now. Join the early-access list and we'll notify you the moment it opens.</p>
        <input placeholder='Full name' style='width:100%;box-sizing:border-box;padding:.7rem;margin-bottom:.5rem;border:1px solid #cfcfc8'>
        <input placeholder='Email' style='width:100%;box-sizing:border-box;padding:.7rem;margin-bottom:.5rem;border:1px solid #cfcfc8'>
        <select style='width:100%;box-sizing:border-box;padding:.7rem;margin-bottom:.8rem;border:1px solid #cfcfc8'><option>Annual amount you might consider</option><option>Under $5,000</option><option>$25,000 or more</option></select>
        <span style='display:inline-block;border:1px solid #000;padding:.75rem 1.4rem;text-transform:uppercase;letter-spacing:.16em;font-size:.72rem;font-weight:600'>Join early access</span>
        <p style='font-size:.7rem;color:#7a7a70;margin-top:.9rem'>Not an offer to sell or a solicitation to buy a security. Wording subject to legal review. Meta pixel fires here for per-ad-set attribution.</p>
      </section>
    </body>"></iframe>
  `,

    cluster: `
    <div class="cluster">
      <h1>Content cluster: the demand-test funnel</h1>
      <p class="lede">Two value propositions, each with its own <strong>article</strong> and its own <strong>landing page</strong>, on the microsite. Every message runs two ad routes: an <strong>article-led</strong> ad that warms cold traffic with the article first, and a <strong>direct</strong> ad straight to the landing page. Both routes end at the same fake-door reservation, which feeds the <strong>CRM</strong> with the ad set attached.</p>
      <div class="diagram">
        <svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arw" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#b8b8c0"/></marker>
            <marker id="arwC" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#0f7d74"/></marker>
          </defs>
          <text class="col-label" x="24" y="26">Meta ads &middot; 2 routes each</text>
          <text class="col-label" x="358" y="26">Microsite articles</text>
          <text class="col-label" x="640" y="26">Landing pages</text>
          <text class="col-label" x="980" y="26">CRM</text>

          <!-- wires: cash-flow track -->
          <path class="wire" marker-end="url(#arw)" d="M312 84 C 340 84, 336 96, 360 96"/>
          <path class="wire" marker-end="url(#arw)" d="M336 150 C 470 150, 520 118, 632 118"/>
          <path class="wire" marker-end="url(#arw)" d="M312 150 C 470 150, 520 118, 632 118"/>
          <path class="wire" marker-end="url(#arw)" d="M604 106 C 618 106, 620 112, 632 112"/>
          <!-- wires: anti-establishment track -->
          <path class="wire" marker-end="url(#arw)" d="M312 300 C 340 300, 336 300, 360 300"/>
          <path class="wire" marker-end="url(#arw)" d="M336 356 C 470 356, 520 330, 632 330"/>
          <path class="wire" marker-end="url(#arw)" d="M312 356 C 470 356, 520 330, 632 330"/>
          <path class="wire" marker-end="url(#arw)" d="M604 318 C 618 318, 620 324, 632 324"/>
          <!-- landing pages -> CRM -->
          <path class="wire--crm" marker-end="url(#arwC)" d="M872 118 C 920 118, 930 210, 972 210"/>
          <path class="wire--crm" marker-end="url(#arwC)" d="M872 330 C 920 330, 930 250, 972 250"/>

          <!-- CASH-FLOW: ads -->
          <foreignObject x="24" y="52" width="290" height="60"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="#ads"><span class="node__tag">Cash-flow &middot; article-led</span><span class="node__title">Ad &rarr; article</span></a></div></foreignObject>
          <foreignObject x="24" y="120" width="290" height="60"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="#ads"><span class="node__tag">Cash-flow &middot; direct</span><span class="node__title">Ad &rarr; landing page</span></a></div></foreignObject>
          <!-- CASH-FLOW: article -->
          <foreignObject x="360" y="66" width="244" height="86"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="#website"><span class="node__tag">Article</span><span class="node__title">Income you don't have to manage</span><span class="node__meta">learn.midrata.com &rarr;</span></a></foreignObject>
          <!-- CASH-FLOW: LP -->
          <foreignObject x="632" y="76" width="240" height="86"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="#website"><span class="node__tag">Landing page</span><span class="node__title">What if your money paid you every week?</span><span class="node__meta">Fake-door reserve &rarr;</span></a></foreignObject>

          <!-- ANTI-ESTABLISHMENT: ads -->
          <foreignObject x="24" y="268" width="290" height="60"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="#ads"><span class="node__tag">Anti-establishment &middot; article-led</span><span class="node__title">Ad &rarr; article</span></a></div></foreignObject>
          <foreignObject x="24" y="336" width="290" height="60"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="#ads"><span class="node__tag">Anti-establishment &middot; direct</span><span class="node__title">Ad &rarr; landing page</span></a></div></foreignObject>
          <!-- ANTI-ESTABLISHMENT: article -->
          <foreignObject x="360" y="278" width="244" height="86"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="#website"><span class="node__tag">Article</span><span class="node__title">Built for a different century</span><span class="node__meta">learn.midrata.com &rarr;</span></a></foreignObject>
          <!-- ANTI-ESTABLISHMENT: LP -->
          <foreignObject x="632" y="288" width="240" height="86"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="#website"><span class="node__tag">Landing page</span><span class="node__title">The system wasn't built for you</span><span class="node__meta">Fake-door reserve &rarr;</span></a></foreignObject>

          <!-- CRM -->
          <foreignObject x="972" y="180" width="204" height="100"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--crm node__link" style="border-style:solid;cursor:pointer" href="#crm"><span class="node__tag">CRM &middot; live</span><span class="node__title">Reservations</span><span class="node__meta">Tagged by ad set &middot; open &rarr;</span></a></foreignObject>
        </svg>
      </div>
      <div class="cluster-note"><strong>How it works:</strong> two ads per value proposition (one article-led, one direct) test whether the article earns its click. Cash-flow copy is tuned for the warm niche; anti-establishment for the broad audience. Both routes land on the same value-proposition page and its fake-door reservation, so every reservation reaches the CRM tagged with its ad set and self-reported investment range.</div>
    </div>
  `,

    compliance: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Demand test for Midrata</p>
      <h1>Compliance &amp; standards</h1>
      <p class="brief__lede">Two layers of governance sit under this funnel. First the legal gate, which is the hard external constraint and cannot be waived. Then the web-quality standards from our library that keep the fake-door honest, the page trustworthy, and the tracking lawful.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>The legal gate (hard constraint)</h2>
          <div class="state">
            <div class="state__row"><div class="state__k">Security status</div><div class="state__v">Midrata is a security and cannot collect money or simulate a sale. Roughly six months from being cleared. Under the Howey test, the exemption ends at 101 people regardless of token structure.</div></div>
            <div class="state__row"><div class="state__k">No sale language</div><div class="state__v">No creative may say or imply buy, invest, purchase, or a completed transaction. Only soft-commitment reservation and waitlist language.</div></div>
            <div class="state__row"><div class="state__k">No promised returns</div><div class="state__v">The interest form's &ldquo;returns of 15% or more&rdquo; line does not travel to paid creative unless General Counsel clears it. Default to no specific return percentages.</div></div>
            <div class="state__row"><div class="state__k">GC sign-off</div><div class="state__v">Michael Munneke approves all CTA, disclaimer and return-percentage wording before creative is built. Treat this as a real gating step in the timeline, with buffer.</div></div>
            <div class="state__row"><div class="state__k">Platform policy</div><div class="state__v">Confirm Meta ad-account standing for financial and crypto-adjacent creative early. Review can add lead time to a short flight.</div></div>
            <div class="state__row"><div class="state__k">Reporting hygiene</div><div class="state__v">Keep the 7,400 badge-presale figure clearly separated from new demand-test data in every investor-facing document.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Standards the funnel is built to</h2>
          <p>Mapped from our web and content-quality library. These govern the surfaces we control; Meta ad policy and securities law stay with the platform and counsel.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Standard</span><span>Governs</span><span>Why it matters here</span></div>
            <div class="ledger__row"><span class="lg-seg">Deceptive Patterns taxonomy</span><span class="lg-now">The fake-door CTA</span><span class="lg-why">A reject-list (fake urgency, fake scarcity, confirmshaming, trick wording) that keeps the reservation honest and legally defensible.</span></div>
            <div class="ledger__row"><span class="lg-seg">E-E-A-T / YMYL</span><span class="lg-now">Financial-topic trust bar</span><span class="lg-why">Finance auto-escalates the trust bar. The page must show real authority and beneficial purpose, not hype.</span></div>
            <div class="ledger__row"><span class="lg-seg">Search Essentials (spam)</span><span class="lg-now">Landing-page legitimacy</span><span class="lg-why">Misleading-functionality and doorway rules describe the fake-door risk directly. Argues for noindex on the test page.</span></div>
            <div class="ledger__row"><span class="lg-seg">Schema.org (with caution)</span><span class="lg-now">Structured data / GEO</span><span class="lg-why">Organization and FAQ markup for credibility, but avoid FinancialProduct or Offer markup that implies a purchasable security.</span></div>
            <div class="ledger__row"><span class="lg-seg">GDPR + ePrivacy</span><span class="lg-now">Pixel consent + the form</span><span class="lg-why">Consent must precede the Meta pixel; data-minimization governs the investment-range question.</span></div>
            <div class="ledger__row"><span class="lg-seg">GOV.UK / WCAG 2.2 / ARIA</span><span class="lg-now">The lead form</span><span class="lg-why">Accessible, evidence-based patterns for the fields, errors and the success state.</span></div>
            <div class="ledger__row"><span class="lg-seg">Core Web Vitals + Lighthouse</span><span class="lg-now">Page speed</span><span class="lg-why">Landing-page experience quality feeds Meta's CPC and CTR, and so the cost per reservation.</span></div>
          </div>
          <p style="margin-top:.9rem;font-size:.86rem;color:var(--ink-muted)">Gaps with no library standard, to source externally: Meta financial and crypto ad policy, securities and financial-promotions law, and paid-media KPI definitions.</p>
        </div>
      </div>

      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Midrata. Standards mapped from the internal web and content-quality library.</p></div>
    </div>
  `,

    people: `
    <div class="brief">
      <p class="brief__eyebrow">Prota Studios &middot; Demand test for Midrata</p>
      <h1>Team &amp; roles</h1>
      <p class="brief__lede">Who owns what across the two teams. One dependency sits above the rest: General Counsel sign-off gates every piece of creative, so it belongs on the critical path, not at the end of it.</p>
      <div class="people">
        <div class="person"><div class="person__av">MS</div><div class="person__body"><h3>Michelle Schubert</h3><p class="person__role">Founder &amp; CEO, Midrata</p><p class="person__bio">Owns content and messaging approval and the framing of the investor readout. Sets the demand targets this test is measured against.</p></div></div>
        <div class="person"><div class="person__av">MM</div><div class="person__body"><h3>Michael Munneke</h3><p class="person__role">General Counsel, Midrata</p><p class="person__bio">Required sign-off on all CTA, disclaimer and return-percentage language before creative is built. The gating dependency in the timeline.</p></div></div>
        <div class="person"><div class="person__av">JB</div><div class="person__body"><h3>Jarin Bressler</h3><p class="person__role">Head of Financial Operations, Midrata</p><p class="person__bio">Owns the treasury and financial-operations context that the value-proposition claims must stay consistent with.</p></div></div>
        <div class="person"><div class="person__av">BH</div><div class="person__body"><h3>Bella Haeusel</h3><p class="person__role">VP of Operations, Midrata</p><p class="person__bio">On the kickoff call. Partners with Michelle on content and messaging approval and readout framing.</p></div></div>
        <div class="person"><div class="person__av">WL</div><div class="person__body"><h3>Will Little</h3><p class="person__role">Venture Capitalist &amp; advisor, Prota</p><p class="person__bio">Connected Vernon into Midrata. Advisory line into the venture-evaluation framework this test can feed.</p></div></div>
        <div class="person"><div class="person__av">VS</div><div class="person__body"><h3>Vernon Steward</h3><p class="person__role">CEO, Prota Studios</p><p class="person__bio">Runs the demand-test design and execution: landing page, media buying, tracking and analysis, with contractor support for ad ops and build.</p></div></div>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>Prota Studios. Prepared for Midrata.</p></div>
    </div>
  `,

  },

};
