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
        <div class="fl"><img src="Atlas-logo.png" alt="Atlas" style="height:118px; width:auto; vertical-align:middle;"></div>
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
      <img src="${cat.id}.svg" alt="${cat.title}" style="width:100%;height:100%;object-fit:contain;filter:invert(1);">
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
            <img src="${cat.id}.svg" alt="${cat.title}" style="width:100%;height:100%;object-fit:contain;">
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
