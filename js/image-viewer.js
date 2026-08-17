(() => {
  let dialog;
  let img;
  let caption;
  let items = [];
  let index = 0;

  function ensureDialog() {
    if (dialog) return;

    dialog = document.createElement('dialog');
    dialog.className = 'image-viewer';
    dialog.setAttribute('aria-label', 'Image preview');
    dialog.innerHTML = `
      <div class="image-viewer__inner">
        <button type="button" class="image-viewer__close" aria-label="Close preview">Close</button>
        <button type="button" class="image-viewer__nav image-viewer__prev" aria-label="Previous image" hidden>Previous</button>
        <button type="button" class="image-viewer__nav image-viewer__next" aria-label="Next image" hidden>Next</button>
        <figure class="image-viewer__frame">
          <img src="" alt="" tabindex="0" role="button" aria-label="Image preview. Click or press Enter to zoom.">
        </figure>
        <div class="image-viewer__caption" aria-live="polite"></div>
      </div>`;

    document.body.appendChild(dialog);

    img = dialog.querySelector('img');
    caption = dialog.querySelector('.image-viewer__caption');
    const closeBtn = dialog.querySelector('.image-viewer__close');
    const prevBtn = dialog.querySelector('.image-viewer__prev');
    const nextBtn = dialog.querySelector('.image-viewer__next');

    const toggleZoom = () => {
      dialog.classList.toggle('is-zoomed');
    };

    closeBtn.addEventListener('click', () => dialog.close());
    prevBtn.addEventListener('click', () => showAt(index - 1));
    nextBtn.addEventListener('click', () => showAt(index + 1));

    img.addEventListener('click', toggleZoom);
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        toggleZoom();
      }
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('is-image-viewer-open');
      dialog.classList.remove('is-zoomed');
      img.removeAttribute('src');
    });

    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showAt(index - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showAt(index + 1);
      }
    });
  }

  function syncNav() {
    const prevBtn = dialog.querySelector('.image-viewer__prev');
    const nextBtn = dialog.querySelector('.image-viewer__next');
    const multiple = items.length > 1;
    prevBtn.hidden = !multiple || index === 0;
    nextBtn.hidden = !multiple || index === items.length - 1;
  }

  function showAt(nextIndex) {
    if (!items.length) return;
    index = Math.max(0, Math.min(nextIndex, items.length - 1));
    const item = items[index];
    dialog.classList.remove('is-zoomed');
    img.src = item.src;
    img.alt = item.alt;
    if (item.caption) {
      caption.textContent = item.caption;
      caption.hidden = false;
    } else {
      caption.textContent = '';
      caption.hidden = true;
    }
    syncNav();
  }

  function openAt(targetIndex) {
    ensureDialog();
    if (!items.length) return;
    showAt(targetIndex);
    document.documentElement.classList.add('is-image-viewer-open');
    dialog.classList.remove('is-zoomed');
    if (!dialog.open) dialog.showModal();
  }

  function collectItems(root) {
    return [...root.querySelectorAll('.case-image-open')].map((button) => ({
      src: button.dataset.fullSrc || button.querySelector('img')?.currentSrc || button.querySelector('img')?.src || '',
      alt: button.querySelector('img')?.alt || '',
      caption: button.dataset.caption || ''
    })).filter((item) => item.src);
  }

  function initImageViewer(root) {
    if (!root) return;

    items = collectItems(root);
    root.querySelectorAll('.case-image-open').forEach((button, itemIndex) => {
      button.addEventListener('click', () => openAt(itemIndex));
    });
  }

  window.MicahPortfolio = window.MicahPortfolio || {};
  window.MicahPortfolio.initImageViewer = initImageViewer;
})();
