/*
 * Builds the page from js/content.js. You normally don't need to edit this
 * file; change the content file instead.
 */
(() => {
  const C = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);

  // Escape plain text so characters like & and < display correctly.
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const tags = (list) => list.map((t) => `<span class="tag">${esc(t)}</span>`).join('');

  // ---- Hero ----
  document.title = C.name;
  $('mark').innerHTML = `${esc(C.shortName)}<span>.</span>`;
  $('avail').textContent = C.availability;
  $('headline').innerHTML = `${esc(C.name)}<br><em>${esc(C.highlight)}</em> ${esc(C.role)}`;
  $('lede').innerHTML = C.lede; // may contain <strong>
  $('meta').innerHTML = C.meta.map((m) => `<span>${esc(m)}</span>`).join('');
  document.querySelectorAll('[data-link]').forEach((a) => (a.href = C.links[a.dataset.link]));

  // ---- Featured project ----
  const F = C.featured;
  $('feat-name').textContent = F.name;
  $('feat-intro').textContent = F.intro;
  $('feat-headline').textContent = F.headline;
  $('feat-summary').innerHTML = F.summary; // may contain <em>
  $('feat-code').href = F.codeUrl;
  $('feat-facts').innerHTML = F.facts
    .map(([title, text]) => `<div class="fact"><h4>${esc(title)}</h4><p>${esc(text)}</p></div>`)
    .join('');
  $('feat-stack').innerHTML = tags(F.stack);

  // ---- Other projects ----
  $('projects').innerHTML = C.projects
    .map(
      (p) => `
      <a class="proj" href="${esc(p.url)}" target="_blank" rel="noopener">
        <h3>${esc(p.name)} <span>${esc(p.lang)}</span></h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${tags(p.tags)}</div>
      </a>`
    )
    .join('');

  // ---- Experience ----
  $('jobs').innerHTML = C.experience
    .map(
      (j) => `
      <div class="job">
        <div class="when">${esc(j.when)}</div>
        <div>
          <h3>${esc(j.title)}</h3>
          <div class="org">${esc(j.org)}</div>
          <ul>${j.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>
        </div>
      </div>`
    )
    .join('');

  // ---- Skills ----
  $('skills-list').innerHTML = Object.entries(C.skills)
    .map(([group, list]) => `<div><h3>${esc(group)}</h3><ul>${list.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>`)
    .join('');

  // ---- Education ----
  const eduList = (rows) =>
    rows.map(([title, sub]) => `<li><strong>${esc(title)}</strong><span>${esc(sub)}</span></li>`).join('');
  $('quals').innerHTML = eduList(C.qualifications);
  $('certs').innerHTML = eduList(C.certifications);

  // ---- Contact ----
  $('contact-heading').textContent = C.contact.heading;
  $('contact-text').textContent = C.contact.text;
  $('email').textContent = C.links.email;
  $('year').textContent = new Date().getFullYear();
  $('footer-name').textContent = C.name;

  // ---- DocFlow demo card ----
  const pill = $('pill');
  const reason = $('reason');
  const log = $('log');
  const bA = $('b-approve');
  const bR = $('b-reject');
  const bX = $('b-reset');
  const start = '<b>POST</b> /api/documents          201\nstatus: "pending"  → approvers notified';
  const setState = (s, label, lines) => {
    pill.dataset.s = s;
    pill.textContent = label;
    reason.hidden = s !== 'rejected';
    log.innerHTML = lines;
    bA.disabled = bR.disabled = s !== 'pending';
    bX.disabled = s === 'pending';
  };
  bA.addEventListener('click', () =>
    setState('approved', 'Approved', start + '\n<b>POST</b> /api/documents/42/approve  200\nstatus: "approved" → uploader notified')
  );
  bR.addEventListener('click', () =>
    setState('rejected', 'Rejected', start + '\n<b>POST</b> /api/documents/42/reject   200\nreason required    → uploader notified')
  );
  bX.addEventListener('click', () => setState('pending', 'Awaiting approval', start));
  setState('pending', 'Awaiting approval', start);

  // ---- Copy email ----
  const copy = $('copy');
  const email = $('email');
  copy.addEventListener('click', () => {
    const reset = (ms) => setTimeout(() => (copy.textContent = 'Copy email'), ms);
    const fallback = () => {
      const r = document.createRange();
      r.selectNodeContents(email);
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      copy.textContent = 'Selected, press Ctrl/⌘ + C';
      reset(2500);
    };
    try {
      navigator.clipboard.writeText(email.textContent.trim()).then(() => {
        copy.textContent = 'Copied';
        reset(1800);
      }, fallback);
    } catch {
      fallback();
    }
  });
})();
