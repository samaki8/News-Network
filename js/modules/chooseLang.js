//js\modules\chooseLang.js
function chooseLang(lang) {
  const langs = {
    fr: { img: '/assets/drapeaux/francais.png', name: 'Français' },
    en: { img: '/assets/drapeaux/english.png', name: 'English' },
    es: { img: '/assets/drapeaux/spanish.png', name: 'Español' }
  };
  const btn = document.getElementById('dropdownLang');
  btn.innerHTML = `<img src="${langs[lang].img}" alt="${langs[lang].name}" style="width:20px;vertical-align:middle;"> ${langs[lang].name}`;
}