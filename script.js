const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => Array.from(root.querySelectorAll(q));

function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

function copyText(text) {
  navigator.clipboard?.writeText(text).then(() => toast('Скопировано: ' + text)).catch(() => toast(text));
}

document.addEventListener('click', (e) => {
  const copy = e.target.closest('[data-copy]');
  if (copy) copyText(copy.dataset.copy);
});

// cursor glow
window.addEventListener('pointermove', (e) => {
  const glow = $('.cursor-glow');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// ambient cyan/gold glow particles — not snow
(() => {
  const canvas = $('#stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles;
  function resize() {
    w = canvas.width = innerWidth * devicePixelRatio;
    h = canvas.height = innerHeight * devicePixelRatio;
    const count = Math.min(46, Math.floor(innerWidth / 26));
    particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.6 + .7) * devicePixelRatio,
      a: Math.random() * Math.PI * 2,
      speed: (Math.random() * .003 + .0015) * (i % 2 ? 1 : -1),
      drift: (Math.random() * .24 + .08) * devicePixelRatio,
      hue: Math.random() > .72 ? 'gold' : 'cyan'
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.a += p.speed;
      p.x += Math.cos(p.a) * p.drift;
      p.y += Math.sin(p.a * .7) * p.drift;
      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 7);
      if (p.hue === 'gold') {
        g.addColorStop(0, 'rgba(255,209,102,.45)');
        g.addColorStop(1, 'rgba(255,209,102,0)');
      } else {
        g.addColorStop(0, 'rgba(57,232,255,.38)');
        g.addColorStop(1, 'rgba(57,232,255,0)');
      }
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 7, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize(); draw(); addEventListener('resize', resize);
})();

// reveal animation
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

function renderWiki() {
  const tabs = $('#wikiTabs');
  const panel = $('#wikiPanel');
  tabs.innerHTML = WIKI_SECTIONS.map((s, i) => `
    <button class="wiki-tab ${i === 0 ? 'active' : ''}" data-id="${s.id}">
      <span>${s.icon}</span>${String(i + 1).padStart(2, '0')} · ${s.title}
    </button>
  `).join('');

  panel.innerHTML = `
    <div class="wiki-intro">
      <b>Вики теперь читается подряд.</b> Больше не нужно возвращаться вверх и нажимать вкладки: листай вниз, а левое меню просто быстро переносит к нужному разделу.
    </div>
    ${WIKI_SECTIONS.map((s, i) => `
      <article class="wiki-chapter" id="wiki-${s.id}" data-id="${s.id}">
        <div class="wiki-flow-label"><span>${s.icon}</span>Раздел ${String(i + 1).padStart(2, '0')}</div>
        ${s.html}
      </article>
    `).join('')}
  `;

  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.wiki-tab');
    if (!btn) return;
    const target = document.getElementById('wiki-' + btn.dataset.id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const chapters = $$('.wiki-chapter', panel);
  const spy = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.dataset.id;
    $$('.wiki-tab', tabs).forEach(t => t.classList.toggle('active', t.dataset.id === id));
  }, { rootMargin: '-22% 0px -60% 0px', threshold: [0.08, 0.2, 0.45] });
  chapters.forEach(ch => spy.observe(ch));
}


function renderCommands() {
  const grid = $('#commandGrid');
  const search = $('#commandSearch');
  function card(group) {
    const items = group.items.map(([cmd, desc]) => `<div class="cmd"><code>${cmd}</code><p>${desc}</p></div>`).join('');
    return `<details class="command-group" open><summary><h3>${group.title}</h3><span class="command-count">${group.items.length}</span></summary><div class="cmd-list">${items}</div></details>`;
  }
  function draw(filter = '') {
    const f = filter.trim().toLowerCase();
    const groups = COMMAND_GROUPS.map(g => ({...g, items: g.items.filter(([cmd, desc]) => (cmd + ' ' + desc + ' ' + g.title).toLowerCase().includes(f))})).filter(g => g.items.length);
    grid.innerHTML = groups.length ? groups.map(card).join('') : `<div class="notice">Ничего не найдено. Попробуй: город, война, суд, claim, напитки, admin.</div>`;
  }
  search.addEventListener('input', () => draw(search.value));
  $('#expandAll').addEventListener('click', () => {
    $$('details.command-group').forEach(d => d.open = true);
  });
  grid.addEventListener('click', e => {
    const code = e.target.closest('.cmd code');
    if (code) copyText(code.textContent);
  });
  draw();
}

function renderDonate() {
  const grid = $('#donateGrid');
  grid.innerHTML = DONATIONS.map((r) => `
    <article class="donate-card" style="--rank-color:${r.color}">
      <div class="rank-badge">${r.publicName} <small>${r.name}</small></div>
      <h3>${r.publicName}</h3>
      <div class="price">Цена: ${r.price}</div>
      <p>${r.summary}</p>
      <ul>${r.perks.map(p => `<li>${p}</li>`).join('')}</ul>
    </article>
  `).join('');
  const perks = ['Бейдж в чате/TAB', 'Аукцион слотов', 'Скидка комиссии', 'BattlePass XP', 'RTP cooldown', 'Команды Essentials'];
  const map = {
    'Terra': ['Гражданин', '5', '—', '+5%', '-10%', '/hat, /workbench'],
    'Polis': ['Депутат', '8', '-5%', '+8%', '-10%', '/enderchest, /anvil'],
    'Senator': ['Сенатор', '12', '-8%', '+12%', '-10%', '/repair, /feed, /nick'],
    'Consul': ['Консул', '16', '-10%', '+15%', '-10%', '/heal, /ptime, /pweather'],
    'Imperator': ['Канцлер', '24', '-15%', '+20%', '-10%', '/heal, /feed, /repair']
  };
  const table = $('#donateTable');
  table.innerHTML = `<thead><tr><th>Бонус</th>${DONATIONS.map(r => `<th>${r.publicName}</th>`).join('')}</tr></thead><tbody>${perks.map((p, i) => `<tr><td>${p}</td>${DONATIONS.map(r => `<td>${map[r.name][i]}</td>`).join('')}</tr>`).join('')}</tbody>`;
}

function renderIngredients() {
  $('#ingredientCloud').innerHTML = INGREDIENTS.map(i => `<span>${i}</span>`).join('');
}

renderWiki();
renderCommands();
renderDonate();
renderIngredients();

// sticky bar style
addEventListener('scroll', () => {
  $('#topbar').style.background = scrollY > 40 ? 'rgba(5,8,18,.82)' : 'rgba(5,8,18,.62)';
});
