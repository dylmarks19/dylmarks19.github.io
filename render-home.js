function renderHome() {
  el('hero-eyebrow').textContent = C.hero.eyebrow;
  el('hero-h1').innerHTML = `${C.hero.line1}<br><em>${C.hero.line2}</em>`;
  el('hero-sub').textContent = C.hero.sub;
  el('hero-trust').innerHTML = C.trustBadges.map(b=>`<div class="trust-item"><i class="ti ${b.icon}"></i> ${b.label}</div>`).join('');
  el('stats-bar').innerHTML = C.stats.map(s=>`<div class="stat-item"><div class="stat-num">${s.num}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
  el('home-cat-grid').innerHTML = CATEGORIES.map(cat=>`
    <div class="cat-card" onclick="showCategory('${cat.id}')">
      <div class="cat-thumb" style="background:${cat.color};">
        <span class="cat-lbl">${cat.code}</span>
      </div>
      <div class="cat-body">
        <div class="cat-title">${cat.title}</div>
        <p class="cat-text">${cat.shortDesc.substring(0,85)}...</p>
        <a class="btn btn-outline-navy" style="font-size:11px;padding:7px 12px;">View Models <i class="ti ti-arrow-right"></i></a>
      </div>
    </div>`).join('');
}

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

window.renderHome = renderHome;
window.showCategory = showCategory;
