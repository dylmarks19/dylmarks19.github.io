window.C = SITE_CONFIG;

function el(id) {
  return document.getElementById(id);
}

function copyrightYear() {
  const y = new Date().getFullYear();
  return y > C.company.yearFounded ? `${C.company.yearFounded}-${y}` : `${C.company.yearFounded}`;
}

window.el = el;
window.copyrightYear = copyrightYear;
