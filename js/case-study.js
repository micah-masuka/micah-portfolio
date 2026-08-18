(() => {
  const encode = (value) => {
    const node = document.createElement('div');
    node.textContent = value == null ? '' : String(value);
    return node.innerHTML;
  };

  const paragraphs = (items = []) => items.map((text) => `<p>${encode(text)}</p>`).join('');

  function renderSubsections(sections = []) {
    if (!sections.length) return '';
    return sections.map((section) => `
      <div class="role-subsection">
        <h4>${encode(section.heading)}</h4>
        <ul>${(section.items || []).map((item) => `<li>${encode(item)}</li>`).join('')}</ul>
      </div>`).join('');
  }

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const buffer = await crypto.subtle.digest('SHA-256', data);
    return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  const storageKey = (slug) => `micah-case-gate:${slug}`;

  function clearLegacyGateToken(slug) {
    try {
      localStorage.removeItem(storageKey(slug));
    } catch {
      /* ignore */
    }
  }

  async function hashPassword(text) {
    if (window.crypto?.subtle) return sha256(text);
    return null;
  }

  function normalizeGateInput(input) {
    return String(input ?? '').trim();
  }

  function matchesGatePassword(input, study) {
    if (!study.gatePassword) return false;
    return normalizeGateInput(input) === study.gatePassword;
  }

  async function passwordToken(input, study) {
    if (matchesGatePassword(input, study)) return study.gateHash;
    const hash = await hashPassword(normalizeGateInput(input));
    if (hash && hash === study.gateHash) return study.gateHash;
    return null;
  }

  function readGateToken(slug) {
    try {
      return sessionStorage.getItem(storageKey(slug));
    } catch {
      return null;
    }
  }

  function writeGateToken(slug, token) {
    clearLegacyGateToken(slug);
    try {
      sessionStorage.setItem(storageKey(slug), token);
    } catch {
      /* ignore */
    }
  }

  function isUnlocked(study, slug) {
    return readGateToken(slug) === study.gateHash;
  }

  function renderGate(study) {
    return `
      <section class="case-gate" aria-labelledby="gate-heading">
        <h1 id="gate-heading">${encode(study.title)}</h1>
        <p class="eyebrow">${encode(study.eyebrow || 'Case study')}</p>
        <div class="case-body">
          <p class="lede">${encode(study.gateMessage || 'This case study is password protected.')}</p>
          <form class="gate-form" id="case-gate-form">
            <label for="case-gate-password">Password</label>
            <input id="case-gate-password" name="password" type="password" autocomplete="current-password" required>
            <button type="submit" class="button primary">View case study</button>
            <p class="gate-error muted" id="case-gate-error" hidden>Incorrect password. Try again or contact Micah for access.</p>
          </form>
          <p class="muted"><a class="text-link" href="/portfolio">← Back to portfolio</a></p>
        </div>
      </section>`;
  }

  function mountCase(study, root) {
    root.innerHTML = renderCase(study);
    window.MicahPortfolio?.initIaFlow?.(root);
    window.MicahPortfolio?.initImageViewer?.(root);
  }

  function unlockCase(study, root) {
    writeGateToken(study.slug, study.gateHash);
    mountCase(study, root);
  }

  function bindGate(study, root) {
    root.innerHTML = renderGate(study);
    const form = root.querySelector('#case-gate-form');
    const input = root.querySelector('#case-gate-password');
    const error = root.querySelector('#case-gate-error');

    input?.focus();

    form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      error.hidden = true;

      if (matchesGatePassword(input.value, study)) {
        unlockCase(study, root);
        return;
      }

      try {
        const token = await passwordToken(input.value, study);
        if (token) {
          unlockCase(study, root);
          return;
        }
      } catch (err) {
        console.error('Password check failed:', err);
      }

      error.hidden = false;
      input.select();
    });
  }

  function renderBackground(study) {
    if (!study.background?.length) return '';
    return `
      <section class="case-section" aria-labelledby="background-heading">
        <h2 id="background-heading">Background</h2>
        <div class="case-body">
          ${paragraphs(study.background)}
        </div>
      </section>`;
  }

  function renderOverview(study) {
    const meta = Object.entries(study.role?.meta || {}).filter(([, value]) => value);
    if (!meta.length) return '';
    return `
      <dl class="overview-grid">
        ${meta.map(([label, value]) => `<div><dt>${encode(label)}</dt><dd>${encode(value)}</dd></div>`).join('')}
      </dl>`;
  }

  function renderRole(study) {
    const role = study.role;
    if (!role) return '';
    const points = (role.points || []).map((item) => `<li>${encode(item)}</li>`).join('');
    const subsections = renderSubsections(role.subsections);
    return `
      <section class="case-section" aria-labelledby="role-heading">
        <h2 id="role-heading">My Role</h2>
        <div class="case-body">
          <h3>${encode(role.title)}</h3>
          ${role.summary ? `<p>${encode(role.summary)}</p>` : ''}
          ${subsections}
          ${points ? `<ul>${points}</ul>` : ''}
        </div>
      </section>`;
  }

  function renderNotPursued(study) {
    const block = study.notPursued;
    if (!block) return '';
    const items = (block.items || []).map((item) => `<li>${encode(item)}</li>`).join('');
    return `
      <section class="case-section" aria-labelledby="not-pursued-heading">
        <h2 id="not-pursued-heading">${encode(block.heading || 'What I did not pursue')}</h2>
        <div class="case-body">
          ${paragraphs(block.paragraphs)}
          ${items ? `<ul>${items}</ul>` : ''}
        </div>
      </section>`;
  }

  function renderLearnings(study) {
    const items = study.learnings || [];
    if (!items.length) return '';
    return `
      <section class="case-section" aria-labelledby="learnings-heading">
        <h2 id="learnings-heading">What I learned</h2>
        <div class="case-body">
          <ul>${items.map((item) => `<li>${encode(item)}</li>`).join('')}</ul>
        </div>
      </section>`;
  }

  function renderIaFlow(study) {
    const flow = study.iaFlow;
    if (!flow?.variants) return '';

    const stepButton = (step) => `
      <button type="button" class="ia-node" data-id="${encode(step.id)}" data-detail="${encode(step.detail)}"${step.trace ? ` data-trace="${step.trace}"` : ''} aria-pressed="false">
        <span class="ia-node__label">${encode(step.label)}</span>
        ${step.sub ? `<span class="ia-node__sub">${encode(step.sub)}</span>` : ''}
      </button>`;

    const renderLinear = (variant) => {
      const steps = variant.steps || [];
      return `
        <div class="ia-flow__track ia-flow__track--linear">
          ${steps.map((step, index) => `
            ${index ? '<span class="ia-flow__arrow-row" aria-hidden="true">↓</span>' : ''}
            <div class="ia-flow__stage ia-flow__stage--center">${stepButton(step)}</div>
          `).join('')}
        </div>`;
    };

    const renderChannels = (variant) => {
      const channels = variant.channels || [];
      return `
        <div class="ia-flow__track ia-flow__track--channels">
          <div class="ia-flow__stage ia-flow__stage--center">${stepButton(variant.anchor)}</div>
          <span class="ia-flow__arrow-row" aria-hidden="true">↓</span>
          <div class="ia-flow__channel-grid">
            ${channels.map((step) => stepButton(step)).join('')}
          </div>
          ${variant.gapLabel ? `<p class="ia-flow__gap-label">${encode(variant.gapLabel)}</p>` : ''}
          ${variant.orphan ? `
            <div class="ia-flow__stage ia-flow__stage--center ia-flow__stage--muted">${stepButton(variant.orphan)}</div>` : ''}
        </div>`;
    };

    const renderSplit = (variant) => {
      const byId = Object.fromEntries((variant.steps || []).map((step) => [step.id, step]));
      const home = byId.home;
      const services = byId.services;
      const works = byId.works;
      const servicePage = byId['service-page'];
      const workPage = byId['work-page'];
      const contact = byId.contact;
      const breakLabel = variant.breaks?.[0]?.label || 'No linked path';

      return `
        <div class="ia-flow__track ia-flow__track--split">
          <div class="ia-flow__stage ia-flow__stage--center">${stepButton(home)}</div>
          <span class="ia-flow__arrow-row" aria-hidden="true">↓</span>
          <div class="ia-flow__fork-grid">
            <div class="ia-flow__branch">
              ${stepButton(services)}
              <span class="ia-flow__arrow-row" aria-hidden="true">↓</span>
              ${stepButton(servicePage)}
            </div>
            <div class="ia-flow__break" aria-hidden="true">
              <span class="ia-flow__break-line"></span>
              <span class="ia-flow__break-label">${encode(breakLabel)}</span>
              <span class="ia-flow__break-line"></span>
            </div>
            <div class="ia-flow__branch">
              ${stepButton(works)}
              <span class="ia-flow__arrow-row" aria-hidden="true">↓</span>
              ${stepButton(workPage)}
            </div>
          </div>
          <span class="ia-flow__arrow-row" aria-hidden="true">↓</span>
          <div class="ia-flow__stage ia-flow__stage--center ia-flow__stage--muted">${stepButton(contact)}</div>
        </div>`;
    };

    const renderVariantTrack = (variant) => {
      if (variant.layout === 'split') return renderSplit(variant);
      if (variant.layout === 'channels') return renderChannels(variant);
      return renderLinear(variant);
    };

    const renderPanel = (key, variant) => `
      <div class="ia-flow__panel" role="tabpanel" data-variant="${encode(key)}" hidden>
        <p class="ia-flow__summary">${encode(variant.summary)}</p>
        ${renderVariantTrack(variant)}
      </div>`;

    const firstKey = Object.keys(flow.variants)[0];
    const firstVariant = flow.variants[firstKey];
    const firstDetail = firstVariant?.layout === 'channels'
      ? firstVariant.anchor?.detail
      : firstVariant?.steps?.[0]?.detail || '';

    const tabs = Object.entries(flow.variants).map(([key, variant], index) => `
      <button type="button" role="tab" class="ia-flow__tab" data-variant="${encode(key)}" aria-selected="${index === 0 ? 'true' : 'false'}" tabindex="${index === 0 ? '0' : '-1'}">${encode(variant.label)}</button>
    `).join('');

    const panels = Object.entries(flow.variants).map(([key, variant]) => renderPanel(key, variant)).join('');

    return `
      <section class="case-section" aria-labelledby="ia-flow-heading">
        <h2 id="ia-flow-heading">${encode(flow.heading)}</h2>
        <div class="case-body">
          <p class="ia-flow__intro">${encode(flow.intro)}</p>
          <div class="ia-flow">
            <div class="ia-flow__toolbar">
              <div class="ia-flow__tabs" role="tablist" aria-label="Information architecture comparison">${tabs}</div>
              <button type="button" class="ia-flow__play" data-label-default="Trace client path" data-label-stop="Stop">Trace client path</button>
            </div>
            ${panels}
            <p class="ia-flow__detail" aria-live="polite">${encode(firstDetail)}</p>
          </div>
        </div>
      </section>`;
  }

  function renderVideo(video) {
    if (!video?.src) return '';
    const poster = video.poster ? ` poster="${encode(video.poster)}"` : '';
    return `
                <figure class="case-video">
                  <video controls playsinline preload="metadata"${poster} aria-label="${encode(video.alt || video.caption || 'Case study video')}">
                    <source src="${encode(video.src)}" type="video/mp4">
                  </video>
                  ${video.caption ? `<figcaption>${encode(video.caption)}</figcaption>` : ''}
                </figure>`;
  }

  function renderDesign(study) {
    const blocks = study.design || [];
    if (!blocks.length) return '';
    return `
      <section class="case-section" aria-labelledby="design-heading">
        <h2 id="design-heading">Experience Design</h2>
        <div class="case-body">
          ${blocks.map((block, index) => `
            <article class="design-block">
              <h3>${encode(block.heading)}</h3>
              ${paragraphs(block.paragraphs)}
              ${renderSubsections(block.subsections)}
              ${block.video ? renderVideo(block.video) : ''}
              ${block.images?.length ? `
                <div class="case-gallery">
                  ${block.images.map((image) => `
                    <figure${image.wide ? ' class="is-wide"' : ''}>
                      <button type="button" class="case-image-open" data-full-src="${encode(image.src)}"${image.caption ? ` data-caption="${encode(image.caption)}"` : ''} aria-label="View larger: ${encode(image.alt || 'case study image')}">
                        <img src="${encode(image.src)}" alt="${encode(image.alt || '')}" width="${image.wide ? '1600' : '1200'}" height="${image.wide ? '1200' : '750'}" loading="${index === 0 ? 'eager' : 'lazy'}">
                      </button>
                      ${image.caption ? `<figcaption>${encode(image.caption)}</figcaption>` : ''}
                    </figure>`).join('')}
                </div>` : ''}
            </article>`).join('')}
        </div>
      </section>`;
  }

  function renderFigmaEmbed(study) {
    const embed = study.figmaEmbed;
    if (!embed?.src) return '';
    const heading = embed.heading || 'Interactive Prototype';
    const caption = embed.caption || 'Explore the interactive Figma prototype below.';
    return `
      <section class="case-section" aria-labelledby="figma-embed-heading">
        <h2 id="figma-embed-heading">${encode(heading)}</h2>
        <div class="case-body">
          <p>${encode(caption)}</p>
          <div class="figma-embed-wrap" style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;border:1px solid var(--color-border, rgba(0,0,0,0.12));">
            <iframe
              src="${encode(embed.src)}"
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
              allowfullscreen
              loading="lazy"
              title="${encode(embed.title || heading)}"
            ></iframe>
          </div>
        </div>
      </section>`;
  }

  function renderPdfDownload(study) {
    const pdf = study.pdf;
    if (!pdf?.href) return '';
    const label = pdf.label || 'View full case study (PDF)';
    return `
      <p class="case-download">
        <a class="button primary" href="${encode(pdf.href)}" target="_blank" rel="noreferrer">${encode(label)} ↗</a>
      </p>`;
  }

  function renderConclusion(study) {
    if (!study.conclusion?.length && !study.requestNote && !study.pdf) return '';
    return `
      <section class="case-section" aria-labelledby="conclusion-heading">
        <h2 id="conclusion-heading">Conclusion</h2>
        <div class="case-body">
          ${paragraphs(study.conclusion)}
          ${study.requestNote ? `<p class="muted">${encode(study.requestNote)}</p>` : ''}
          ${renderPdfDownload(study)}
        </div>
      </section>`;
  }

  const CASE_SEQUENCE = [
    { slug: 'alfresco', href: '/case-studies/alfresco-bakery', label: 'Alfresco Bakery' },
    { slug: 'verandah', href: '/case-studies/verandah-cafe', label: 'Verandah Café' },
    { slug: 'logos', href: '/case-studies/logos-publicity', label: 'Logos Publicity' },
    { slug: 'sanex', href: '/case-studies/sanex', label: 'Sanex' },
    { slug: 'streamvault', href: '/case-studies/streamvault', label: 'Streamvault' },
    { slug: 'lucad', href: '/case-studies/lucad-airlines', label: 'LUCAD Airlines' },
    { slug: 'espace', href: '/case-studies/espace-marine', label: 'Espace Marine' }
  ];

  function nextMarkup(study) {
    const index = CASE_SEQUENCE.findIndex((item) => item.slug === study.slug);
    const fallback = CASE_SEQUENCE[(index + 1 + CASE_SEQUENCE.length) % CASE_SEQUENCE.length];
    const next = study.next || fallback;
    if (!next?.href || !next?.label) return '';
    return `<section class="case-section case-next" aria-label="Next case study">
      <h2>Next</h2>
      <p class="case-body"><a href="${encode(next.href)}">${encode(next.label)} →</a></p>
    </section>`;
  }

  function renderTools(study) {
    const tools = study.tools || [];
    if (!tools.length) return '';
    return `<ul class="badges case-tools">${tools.map((tool) => `
      <li><img src="${encode(tool.badge)}" alt="${encode(tool.label)}" height="22" loading="lazy"></li>`).join('')}</ul>`;
  }

  function renderCase(study) {
    const tags = (study.tags || []).map((tag) => `<li>${encode(tag)}</li>`).join('');
    const live = study.live
      ? `<p class="case-live-link"><a class="text-link" href="${encode(study.live.href)}" target="_blank" rel="noreferrer">${encode(study.live.label)} ↗</a></p>`
      : '';

    return `
      <article class="case">
        <header class="case-hero">
          <h1 class="case-title">${encode(study.title)}</h1>
          <p class="eyebrow">${encode(study.eyebrow || 'Case study')}</p>
          <div class="case-body">
            <p class="lede">${encode(study.lede)}</p>
            <ul class="tag-list">${tags}</ul>
            ${renderTools(study)}
            ${live}
          </div>
          ${renderOverview(study)}
        </header>
        ${renderBackground(study)}
        ${renderRole(study)}
        ${renderFigmaEmbed(study)}
        ${renderIaFlow(study)}
        ${renderDesign(study)}
        ${renderNotPursued(study)}
        ${renderLearnings(study)}
        ${renderConclusion(study)}
        ${nextMarkup(study)}
      </article>`;
  }

  function mount() {
    const root = document.querySelector('#case-root');
    const slug = document.body.dataset.case;
    const study = window.MicahPortfolio?.caseStudies?.[slug];
    if (!root || !study) return;

    if (study.confidential && study.gateHash) {
      clearLegacyGateToken(slug);
      if (!isUnlocked(study, slug)) {
        bindGate(study, root);
        return;
      }
    }

    mountCase(study, root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
