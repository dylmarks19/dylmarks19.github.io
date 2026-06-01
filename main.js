/* ═════════════════════════════════════
   SITE CONFIG — edit everything here
   ═════════════════════════════════════ */
const SITE_CONFIG = {
  company: {
    name:        "Atlas Industrial Systems",
    shortName:   "ATLAS",
    tagline:     "Industrial Equipment Specialists",
    legalSuffix: "(Pty) Ltd",
    yearFounded: 2026,
    //vatNumber:   "",
  },
  contact: {
    phones: [
      {
        label: "Ivan",
        display: "+27 (0)73 230 4984",
        whatsapp: "27732304984",
        whatsappDisplay: "+27 (0)73 230 4984"
      },
      {
        label: "Nevin",
        display: "+27 (0)66 238 6201",
        whatsapp: "27662386201",
        whatsappDisplay: "+27 (0)66 238 6201"
      },
      {
        label: "Dylan",
        display: "+27 (0)84 391 8732",
        whatsapp: "27843918732",
        whatsappDisplay: "+27 (0)84 391 8732"
      }
    ],
    email:        "sales@atlasindustrialsystems.co.za",
    address:      "Pretoria, Gauteng, South Africa",
    hoursWeekday: "Mon–Fri: 07:30 – 17:00",
    hoursSat:     "Saturday: 08:00 – 12:00",
    responseTime: "Response within 1 business day",
  },
  leadTimes: {
    standard: "8–10 weeks",
    custom:   "10–14 weeks",
    fleet:    "Priority scheduling available",
  },
  formspreeId: "xlgvzdvo",
  cataloguePdf: "catalogue/HYNEE_catalogue.pdf",
  cataloguePdfLabel: "ATLAS Industrial Systems — Full Product Catalogue",
  hero: {
    eyebrow: "South Africa's Industrial Equipment Specialists",
    line1:   "Precision Equipment.",
    line2:   "Delivered.",
    sub:     "Atlas Industrial Systems supplies world-class lifting and access equipment across South Africa — made to order.",
  },
  stats: [
    { num: "11",    lbl: "Product Categories" },
    { num: "40+",   lbl: "Models Available"   },
    { num: "16m",   lbl: "Max Platform Height" },
    { num: "454kg", lbl: "Max Lift Capacity"  },
    { num: "SANS",  lbl: "OHS Compliant"      },
    { num: "MTO",   lbl: "Make to Order"      },
  ],
  trustBadges: [
    { icon: "ti-certificate",    label: "ISO 9001:2015 certified supplier"      },
    { icon: "ti-shield-check",   label: "CE Marked"          },
    { icon: "ti-truck-delivery", label: "Nationwide Delivery" },
    { icon: "ti-zoom-check",     label: "EN 280/SANS 10159 Compliant"   },
  ],
  footerBadges: ["ISO 9001:2015", "CE Marked", "SANS Compliant", "EN 280/SANS 10159"],
  enquiryTypes: [
    "Product / Quote Request",
    "B2B Enquiry",
    "Custom / Bespoke Order",
    "Technical Specification",
    "Catalogue / Documentation Request",
    "Certification Documents",
    "Financing Enquiry",
    "After-Sales / Service",
    "General Enquiry",
  ],
  certifications: [
    { icon: "ti-certificate",     name: "ISO 9001:2015",    body: "Quality Management System — consistent product quality on every unit manufactured.",                  tagType: "green",  tagLabel: "Certified" },
    { icon: "ti-shield-check",    name: "CE Marking",       body: "European conformity for the Machinery Directive — structural and electrical safety compliance.",       tagType: "green",  tagLabel: "Certified" },
    { icon: "ti-flag-3",          name: "SANS / OHS Act",   body: "Fully compliant with South African National Standards and the Occupational Health & Safety Act.",      tagType: "green",  tagLabel: "Compliant" },
    { icon: "ti-zoom-check",      name: "EN 280/SANS 10159",           body: "European standard for Mobile Elevating Work Platforms — design, safety and testing requirements.",      tagType: "green",  tagLabel: "Certified" },
    { icon: "ti-leaf",            name: "RoHS Compliant",   body: "Restriction of hazardous substances in all electrical and electronic components.",                     tagType: "green",  tagLabel: "Compliant" },
    { icon: "ti-test-pipe",       name: "Factory FAT",      body: "Every unit undergoes a full Factory Acceptance Test before dispatch — 100% of units, no exceptions.",  tagType: "orange", tagLabel: "Standard"  },
    { icon: "ti-book",            name: "Operator Manuals", body: "Full multilingual operator and maintenance manuals supplied with every machine.",                      tagType: "green",  tagLabel: "Included"  },
  ],
};

const CATEGORIES = [
  {
    id: "smp1", icon: "ti-building-arch", code: "SMP1", color: "#12181f", price: 80000,
    title: "Single Mast — Swing Outrigger",
    shortDesc: "Lightweight aluminium single mast with swing outriggers. 1 person, push-around.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Platform Dim", "Overall Len", "Outrigger", "Weight (AC)"],
    tableRows: [
      ["SMP1-6",  "6m",  "150kg", "1", "0.60×0.55m", "1.26m", "1.96×1.7m", "325kg"],
      ["SMP1-8",  "8m",  "150kg", "1", "0.60×0.55m", "1.34m", "1.96×1.7m", "378kg"],
      ["SMP1-9",  "9m",  "150kg", "1", "0.60×0.55m", "1.45m", "1.96×1.7m", "400kg"],
      ["SMP1-10", "10m", "120kg", "1", "0.60×0.55m", "1.45m", "1.96×1.7m", "430kg"],
    ],
  },
  {
    id: "smp2", icon: "ti-building-arch", code: "SMP2", color: "#151a12", price: 100000,
    title: "Single Mast — Push-Around",
    shortDesc: "Advanced single mast aluminium lifts. AC/DC powered, outrigger-stabilised. Up to 12m platform height.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Platform Dim", "Overall Len", "Outrigger", "Weight (AC/DC)"],
    tableRows: [
      ["SMP2-5",  "4.7m", "150kg", "1", "0.67×0.66m", "1.26m", "1.9×1.8m",  "330/380kg"],
      ["SMP2-6",  "6.1m", "150kg", "1", "0.67×0.66m", "1.26m", "1.9×1.8m",  "345/395kg"],
      ["SMP2-8",  "7.5m", "150kg", "1", "0.67×0.66m", "1.30m", "1.9×1.8m",  "385/435kg"],
      ["SMP2-9",  "9m",   "150kg", "1", "0.67×0.66m", "1.35m", "2.1×2.0m",  "410/460kg"],
      ["SMP2-10", "10.4m","136kg", "1", "0.67×0.66m", "1.40m", "2.1×2.0m",  "430/480kg"],
      ["SMP2-12", "12m",  "120kg", "1", "0.67×0.66m", "1.42m", "2.4×2.2m",  "520/570kg"],
    ],
  },
  {
    id: "smd", icon: "ti-steering-wheel", code: "SMD", color: "#0f1a22", price: 110000,
    title: "Single Mast — Self-Propelled",
    shortDesc: "Self-propelled aluminium single mast. Driven, zero turning radius, indoor/outdoor.",
    tableHeaders: ["Model", "Platform Ht (indoor)", "Platform Ht (outdoor)", "Capacity", "Occ.", "Overall Len", "Overall W", "Weight"],
    tableRows: [
      ["SMD-6",  "6m",   "4.8m", "160kg", "1", "1.40m", "0.78m", "1160kg"],
      ["SMD-8",  "7.5m", "6m",   "125kg", "1", "1.40m", "0.78m", "1280kg"],
    ],
  },
  {
    id: "dmp1", icon: "ti-stack-2", code: "DMP1", color: "#1a1209", price: 120000,
    title: "Double Mast — Swing Outrigger",
    shortDesc: "Double aluminium mast with swing outriggers. 200kg capacity, up to 12m platform height.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Platform Dim", "Overall Len", "Outrigger", "Weight (AC)"],
    tableRows: [
      ["DMP1-6",  "6m",  "200kg", "1", "1.5×0.67m", "1.70m", "2.4×2.2m", "630kg"],
      ["DMP1-8",  "8m",  "200kg", "1", "1.5×0.67m", "1.70m", "2.4×2.2m", "680kg"],
      ["DMP1-9",  "9m",  "200kg", "1", "1.5×0.67m", "1.70m", "2.4×2.2m", "730kg"],
      ["DMP1-10", "10m", "200kg", "1", "1.5×0.67m", "1.70m", "2.4×2.2m", "800kg"],
      ["DMP1-12", "12m", "200kg", "1", "1.5×0.67m", "1.70m", "2.4×2.2m", "830kg"],
    ],
  },
  {
    id: "dmp2", icon: "ti-stack-2", code: "DMP2", color: "#1a0d1a", price: 130000,
    title: "Double Mast — Push-Around",
    shortDesc: "Advanced double mast push-around. 2-person platform, AC/DC powered, up to 16m platform height.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Platform Dim", "Overall Len", "Outrigger", "Weight (AC/DC)"],
    tableRows: [
      ["DMP2-6",  "6m",  "250kg", "2", "1.45×0.7m", "1.48m", "2.1×1.7m", "610/660kg"],
      ["DMP2-8",  "8m",  "250kg", "2", "1.45×0.7m", "1.48m", "2.1×1.7m", "645/695kg"],
      ["DMP2-10", "10m", "250kg", "2", "1.45×0.7m", "1.48m", "2.3×2.2m", "715/765kg"],
      ["DMP2-12", "12m", "200kg", "2", "1.45×0.7m", "1.48m", "2.5×2.4m", "750/800kg"],
      ["DMP2-14", "14m", "200kg", "2", "1.8×0.7m",  "1.88m", "2.9×2.4m", "892/942kg"],
      ["DMP2-16", "16m", "150kg", "1", "1.8×0.7m",  "1.88m", "2.9×2.4m", "996/1046kg"],
    ],
  },
  {
    id: "fmd", icon: "ti-lift", code: "FMD", color: "#0d1a35", price: 120000,
    title: "Forklift Mast — Wheeled",
    shortDesc: "Heavy-duty self-propelled wheeled steel mast lifts with jib arm. Drivable at full height.",
    tableHeaders: ["Model", "Platform Ht", "Horiz. Reach", "Capacity", "Occ.", "Turret", "Jib", "Battery", "Weight"],
    tableRows: [
      ["FMD1-8J", "8m",     "3.51m", "200kg", "2", "356°", "120°", "24V/220Ah", "2850kg"],
      ["FMD-9J",  "9m",     "3.64m", "200kg", "2", "356°", "120°", "24V/220Ah", "3300kg"],
      ["FMD-10J", "10m",    "5.7m",  "200kg", "2", "340°", "130°", "48V/220Ah", "5900kg"],
      ["FMD-11J", "10.65m", "6.05m", "200kg", "2", "352°", "120°", "48V/260Ah", "4980kg"],
    ],
  },
  {
    id: "cmd", icon: "ti-tank", code: "CMD", color: "#0a1f14", price: 130000,
    title: "Forklift Mast — Tracked (Crawler)",
    shortDesc: "Tracked crawler forklift mast lifts with jib. For uneven terrain and construction sites.",
    tableHeaders: ["Model", "Platform Ht", "Horiz. Reach", "Capacity", "Occ.", "Turret", "Jib", "Track W", "Battery", "Weight"],
    tableRows: [
      ["CMD-7J",  "7m", "3.38m", "200kg", "2", "220°", "120°", "250mm", "48V/220Ah", "2970kg"],
      ["CMD2-8J", "8m", "3.63m", "200kg", "2", "220°", "120°", "250mm", "48V/220Ah", "3300kg"],
    ],
  },
  {
    id: "tmd", icon: "ti-arrows-up", code: "TMD", color: "#0d2218", price: 150000,
    title: "Telescopic Mast — Wheeled",
    shortDesc: "Self-propelled wheeled telescopic mast lifts. Compact, narrow-profile for tight indoor spaces.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Overall W", "Travel (stowed)", "Battery", "Weight"],
    tableRows: [
      ["TMD1-4", "3.65m", "230kg", "2", "0.79m", "N/A",      "2×12V/100Ah", "950kg"],
      ["TMD-6",  "5.95m", "200kg", "2", "0.79m", "N/A",      "2×12V/100Ah", "1350kg"],
      ["TMD-9J", "9.2m",  "200kg", "2", "1.0m",  "4.5 km/h", "24V/240Ah",   "2950kg"],
    ],
  },
  {
    id: "ctd", icon: "ti-tank", code: "CTD", color: "#1a160a", price: 140000,
    title: "Telescopic Mast — Tracked (Crawler)",
    shortDesc: "Tracked crawler telescopic mast lift. Ultra-compact, zero-radius turn for restricted access.",
    tableHeaders: ["Model", "Platform Ht", "Capacity", "Occ.", "Overall W", "Overall Len", "Track W", "Battery", "Weight"],
    tableRows: [
      ["CTD2-4", "3.8m", "200kg", "2", "0.79m", "1.44m", "150mm", "2×12V/100Ah", "740kg"],
    ],
  },
  {
    id: "x", icon: "ti-scissors", code: "X", color: "#0d1a1a", price: 120000,
    title: "Scissor Lifts",
    shortDesc: "Mini scissor lifts — self-propelled, push-around, and all-electric/oil-free variants.",
    tableHeaders: ["Model", "Type", "Platform Ht", "Capacity", "Occ.", "Platform Dim", "Overall W", "Gradeability", "Weight"],
    tableRows: [
      ["XD-3",  "Self-propelled",   "3m",   "240kg", "1", "1.15×0.6m",  "0.76m", "25%", "630kg"],
      ["XD-4",  "Self-propelled",   "4m",   "240kg", "1", "1.15×0.6m",  "0.76m", "25%", "660kg"],
      ["XD-3E", "Self-prop. / Oil-free", "3.4m", "200kg", "2", "1.24×0.67m", "0.8m", "—",   "580kg"],
      ["XP-3",  "Push-around",      "3m",   "240kg", "1", "1.15×0.6m",  "0.76m", "—",   "482kg"],
      ["XP-4",  "Push-around",      "3.9m", "240kg", "1", "1.15×0.6m",  "0.76m", "—",   "516kg"],
    ],
  },
  {
    id: "ml", icon: "ti-package", code: "ML", color: "#1a0d0d", price: 1250000,
    title: "Material Lifts",
    shortDesc: "Heavy and light duty manual fork-style material lifts. Stabiliser-supported, no power required.",
    tableHeaders: ["Model", "Duty", "Lift Ht (forks up)", "Load @0.36m", "Load @0.61m", "Load @1.07m", "Stab W", "Weight"],
    tableRows: [
      ["MLP1-3", "Light", "3.8m",  "318kg", "200kg", "84kg",  "1.63m", "125kg"],
      ["MLP1-4", "Light", "4.9m",  "295kg", "195kg", "80kg",  "1.63m", "138kg"],
      ["MLP1-5", "Light", "6.0m",  "272kg", "181kg", "80kg",  "1.63m", "156kg"],
      ["MLP2-3", "Heavy", "3.49m", "454kg", "454kg", "181kg", "1.85m", "148kg"],
      ["MLP2-4", "Heavy", "4.98m", "363kg", "363kg", "227kg", "1.85m", "176kg"],
      ["MLP2-6", "Heavy", "6.46m", "363kg", "295kg", "159kg", "1.85m", "205kg"],
      ["MLP2-7", "Heavy", "7.94m", "295kg", "204kg", "113kg", "1.85m", "231kg"],
    ],
  },
];

const C = SITE_CONFIG;
function el(id) { return document.getElementById(id); }
function copyrightYear() {
  const y = new Date().getFullYear();
  return y > C.company.yearFounded ? `${C.company.yearFounded}–${y}` : `${C.company.yearFounded}`;
}
function footerHTML() {
  const vat = C.company.vatNumber ? `&nbsp;|&nbsp;VAT ${C.company.vatNumber}` : '';
  return `
    <div class="footer-top">
      <div class="footer-brand">
        <div class="fl"><img src="assets/images/atlas-logo.png" alt="Atlas" style="height:118px; width:auto; vertical-align:middle;"></div>
        <div class="ft">${C.company.name} ${C.company.legalSuffix}</div>
        <p>South Africa's industrial equipment specialists. Made to order, delivered nationwide.</p>
      </div>
      <div class="footer-col"><h4>Equipment</h4><ul>
        <li><a onclick="show('products')">Featured Models</a></li>
        <li><a onclick="show('catalogue')">Full Catalogue</a></li>
        <li><a onclick="show('contact')">Custom / Bespoke</a></li>
      </ul></div>
      <div class="footer-col"><h4>Company</h4><ul>
        <li><a onclick="show('offers')">Our Offering</a></li>
        <li><a onclick="show('certs')">Certifications</a></li>
        <li><a onclick="show('contact')">Contact Us</a></li>
      </ul></div>
      <div class="footer-col"><h4>Contact</h4><ul>
        ${C.contact.phones.map(p=>`<li><a href="tel:${p.display.replace(/\s/g,'')}">${p.display}</a> <span style="color:var(--text-muted);font-size:12px;">(${p.label})</span></li>`).join('')}
        <li><a href="mailto:${C.contact.email}">${C.contact.email}</a></li>
        <li><a>${C.contact.hoursWeekday}</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© ${copyrightYear()} ${C.company.name} ${C.company.legalSuffix}. All rights reserved.${vat}</div>
      <div class="footer-badges">${C.footerBadges.map(b=>`<span class="fbadge">${b}</span>`).join('')}</div>
    </div>`;
}

el('hero-eyebrow').textContent = C.hero.eyebrow;
el('hero-h1').innerHTML = `${C.hero.line1}<br><em>${C.hero.line2}</em>`;
el('hero-sub').textContent = C.hero.sub;
el('hero-trust').innerHTML = C.trustBadges.map(b=>`<div class="trust-item"><i class="ti ${b.icon}"></i> ${b.label}</div>`).join('');
el('stats-bar').innerHTML = C.stats.map(s=>`<div class="stat-item"><div class="stat-num">${s.num}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
el('home-cat-grid').innerHTML = CATEGORIES.map(cat=>`
  <div class="cat-card" onclick="showCategory('${cat.id}')">
    <div class="cat-thumb" style="background:${cat.color};">
      <i class="ti ${cat.icon}"></i>
      <span class="cat-lbl">${cat.code}</span>
    </div>
    <div class="cat-body">
      <div class="cat-title">${cat.title}</div>
      <p class="cat-text">${cat.shortDesc.substring(0,85)}…</p>
      <a class="btn btn-outline-navy" style="font-size:11px;padding:7px 12px;">View Models <i class="ti ti-arrow-right"></i></a>
    </div>
  </div>`).join('');

function showCategory(id) {
  show('products');
  setTimeout(() => {
    document.querySelectorAll('.acc-item').forEach(a => {
      a.classList.remove('open');
      a.querySelector('.acc-trigger').setAttribute('aria-expanded','false');
    });
    const target = el('acc-' + id);
    if (target) {
      target.classList.add('open');
      target.querySelector('.acc-trigger').setAttribute('aria-expanded','true');
      setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'start' }), 100);
    }
  }, 60);
}

el('acc-list').innerHTML = CATEGORIES.map((cat) => {
  const theadHtml = cat.tableHeaders.map(h => `<th>${h}</th>`).join('');
  const tbodyHtml = cat.tableRows.map(row =>
    `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
  ).join('');
  const iconMap = { smp1:'ti-building-arch', smp2:'ti-building-arch', smd:'ti-steering-wheel', dmp1:'ti-stack-2', dmp2:'ti-stack-2', fmd:'ti-lift', cmd:'ti-tank', tmd:'ti-arrows-up', ctd:'ti-tank', x:'ti-scissors', ml:'ti-package' };
  return `
  <div class="acc-item" id="acc-${cat.id}">
    <button class="acc-trigger" onclick="toggleAcc('${cat.id}')" aria-expanded="false">
      <div class="acc-code-box">
        <span class="code-lbl">${cat.code}</span>
        <span class="code-sub">Series</span>
      </div>
      <div class="acc-title-area">
        <div>
          <div class="acc-title-main">${cat.title}</div>
          <div class="acc-title-desc">${cat.shortDesc}</div>
        </div>
        <div class="acc-right">
          <span class="acc-price"><i class="ti ti-tag" style="font-size:10px;margin-right:4px;"></i>${cat.price > 0 ? 'Priced from: ZAR ' + cat.price.toLocaleString() : 'Priced on enquiry'}</span>
          <span class="acc-arrow"><i class="ti ti-chevron-down"></i></span>
        </div>
      </div>
    </button>
    <div class="acc-body">
      <div class="acc-body-inner">
        <div class="acc-table-side">
          <h4>Full Model Range — ${cat.title}</h4>
          <div style="overflow-x:auto;">
            <table class="prod-table">
              <thead><tr>${theadHtml}</tr></thead>
              <tbody>${tbodyHtml}</tbody>
            </table>
          </div>
          <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
            <a class="btn btn-navy btn-sm" onclick="show('contact')"><i class="ti ti-file-invoice"></i> Enquire About This Range</a>
            <a class="btn btn-ghost btn-sm" onclick="show('catalogue')"><i class="ti ti-file-download"></i> Full Catalogue</a>
          </div>
          <p style="font-size:11px;color:var(--text-faint);margin-top:10px;">Platform heights shown. All units made to order. Custom specifications available on request.</p>
        </div>
        <div class="acc-img-side">
          <div class="acc-img-placeholder">
            <i class="ti ${iconMap[cat.id] || 'ti-lift'}"></i>
            <span>${cat.title}</span>
          </div>
          <div class="acc-img-actions">
            <a class="btn btn-outline-orange btn-sm" onclick="show('catalogue')"><i class="ti ti-file-text"></i> View in Catalogue</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}).join('');

function toggleAcc(id) {
  const item = el('acc-' + id);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(a => {
    a.classList.remove('open');
    a.querySelector('.acc-trigger').setAttribute('aria-expanded','false');
  });
  if (!isOpen) {
    item.classList.add('open');
    item.querySelector('.acc-trigger').setAttribute('aria-expanded','true');
    setTimeout(() => {
      item.scrollIntoView({ behavior:'smooth', block:'nearest' });
    }, 80);
  }
}

const dlBtn = el('catalogue-download-btn');
if (dlBtn) {
  dlBtn.href = C.cataloguePdf;
  dlBtn.setAttribute('download', C.cataloguePdfLabel + '.pdf');
  dlBtn.setAttribute('title', C.cataloguePdfLabel);
}

el('cert-grid').innerHTML = C.certifications.map(c=>`
  <div class="cert-card">
    <div class="cert-icon"><i class="ti ${c.icon}"></i></div>
    <div class="cert-name">${c.name}</div>
    <p class="cert-body">${c.body}</p>
    <span class="tag tag-${c.tagType}">${c.tagLabel}</span>
  </div>`).join('');

el('contact-sub').textContent = `Submit your enquiry below — include the model or product type, required specs, quantity and delivery location. ${C.contact.responseTime}.`;
el('contact-left').innerHTML = `
  ${C.contact.phones.map(p=>`<div class="ci"><div class="ci-icon"><i class="ti ti-phone"></i></div><div><div class="ci-label">Phone — ${p.label}</div><div class="ci-val"><a href="tel:${p.display.replace(/\s/g,'')}">${p.display}</a> <a href="https://wa.me/${p.whatsapp}" target="_blank" rel="noopener" title="Available on WhatsApp" style="margin-left:8px;"><i class="ti ti-brand-whatsapp" style="color:var(--green);"></i></a></div></div></div>`).join('')}
  <div class="ci"><div class="ci-icon"><i class="ti ti-mail"></i></div><div><div class="ci-label">Email</div><div class="ci-val"><a href="mailto:${C.contact.email}">${C.contact.email}</a></div></div></div>
  <div class="ci"><div class="ci-icon"><i class="ti ti-clock"></i></div><div><div class="ci-label">Business Hours</div><div class="ci-val">${C.contact.hoursWeekday}<br>${C.contact.hoursSat}</div></div></div>
  <div class="lead-info">
    <div class="lead-title"><i class="ti ti-clock" style="color:var(--navy-light);margin-right:6px;"></i>Manufacturing Lead Times</div>
    <div class="lead-row">
      Standard units: <strong>${C.leadTimes.standard}</strong><br>
      Custom / Bespoke: <strong>${C.leadTimes.custom}</strong><br>
      Fleet (5+ units): <strong>${C.leadTimes.fleet}</strong>
    </div>
  </div>`;

el('enquiry-select').innerHTML = C.enquiryTypes.map(t=>`<option>${t}</option>`).join('');
el('product-category').innerHTML = '<option value="">— Select a category —</option>' + CATEGORIES.map(cat=>`<option value="${cat.id}">${cat.title}</option>`).join('');
updateProductModels();

function updateProductModels() {
  const categoryId = el('product-category').value;
  const modelsSelect = el('product-models');
  const category = CATEGORIES.find(c => c.id === categoryId);
  modelsSelect.innerHTML = '';
  if (!categoryId) {
    modelsSelect.innerHTML = '<option value="">— Select a model —</option>';
    CATEGORIES.forEach(cat => {
      cat.tableRows.forEach(row => {
        const modelCode = row[0];
        modelsSelect.innerHTML += `<option value="${modelCode}">${modelCode} (${cat.code})</option>`;
      });
    });
  } else if (category) {
    modelsSelect.innerHTML = `<option value="${category.code}">${category.title}</option>`;
    category.tableRows.forEach(row => {
      const modelCode = row[0];
      modelsSelect.innerHTML += `<option value="${modelCode}">${modelCode}</option>`;
    });
  }
}

const form      = el('enquiry-form');
const submitBtn = el('form-submit-btn');
const msgOk     = el('form-success');
const msgErr    = el('form-error');

if (C.formspreeId) {
  form.action = `https://formspree.io/f/${C.formspreeId}`;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="ti ti-loader-2" style="animation:spin 1s linear infinite;"></i> Sending…';
    msgOk.classList.remove('show-success');
    msgErr.classList.remove('show-error');
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        msgOk.classList.add('show-success');
        submitBtn.innerHTML = '<i class="ti ti-circle-check"></i> Sent!';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="ti ti-send"></i> Submit Enquiry';
        }, 4000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      msgErr.classList.add('show-error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="ti ti-send"></i> Submit Enquiry';
    }
  });
} else {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msgErr.innerHTML = `<i class="ti ti-alert-circle" style="font-size:18px;font-style:normal;"></i>
      Form not yet connected. Please email <a href="mailto:${C.contact.email}" style="color:inherit;text-decoration:underline;">${C.contact.email}</a>
      or <a href="https://wa.me/${C.contact.whatsapp}" target="_blank" style="color:inherit;text-decoration:underline;">WhatsApp us</a> directly.`;
    msgErr.classList.add('show-error');
  });
}

['home','products','catalogue','offers','certs','contact'].forEach(p => {
  const f = el(`footer-${p}`);
  if (f) f.innerHTML = footerHTML();
});

const navOrder = ['home','products','catalogue','offers','certs','contact'];
function show(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  el('section-' + section).classList.add('active');
  document.querySelectorAll('#nav-links li a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('#mobile-menu a').forEach(a => a.classList.remove('active'));
  const idx = navOrder.indexOf(section);
  const desktopLinks = document.querySelectorAll('#nav-links li a');
  const mobileLinks  = document.querySelectorAll('#mobile-menu a');
  if (desktopLinks[idx]) desktopLinks[idx].classList.add('active');
  if (mobileLinks[idx])  mobileLinks[idx].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  const menu = el('mobile-menu');
  const ham  = el('hamburger');
  const open = menu.classList.toggle('open');
  ham.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeMenu() {
  el('mobile-menu').classList.remove('open');
  el('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const menu = el('mobile-menu');
  const ham  = el('hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !ham.contains(e.target)) {
    closeMenu();
  }
});

const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);
