(() => {
  function initIaFlow(root) {
    root.querySelectorAll('.ia-flow').forEach((widget) => {
      const tabs = [...widget.querySelectorAll('[role="tab"]')];
      const panels = [...widget.querySelectorAll('[role="tabpanel"]')];
      const detail = widget.querySelector('.ia-flow__detail');
      const playBtn = widget.querySelector('.ia-flow__play');
      let traceTimer;

      const stopTrace = () => {
        if (traceTimer) clearInterval(traceTimer);
        traceTimer = null;
        widget.querySelectorAll('.ia-node.is-active').forEach((node) => node.classList.remove('is-active'));
        if (playBtn) playBtn.textContent = playBtn.dataset.labelDefault || 'Trace client path';
      };

      const setDetail = (text) => {
        if (detail) detail.textContent = text || '';
      };

      const activatePanel = (variant) => {
        stopTrace();
        tabs.forEach((tab) => {
          const selected = tab.dataset.variant === variant;
          tab.setAttribute('aria-selected', String(selected));
          tab.tabIndex = selected ? 0 : -1;
        });
        panels.forEach((panel) => {
          const show = panel.dataset.variant === variant;
          panel.hidden = !show;
        });
        const firstNode = widget.querySelector(`[role="tabpanel"][data-variant="${variant}"] .ia-node`);
        if (firstNode) {
          widget.querySelectorAll('.ia-node[aria-pressed="true"]').forEach((node) => node.setAttribute('aria-pressed', 'false'));
          firstNode.setAttribute('aria-pressed', 'true');
          setDetail(firstNode.dataset.detail || '');
        }
      };

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => activatePanel(tab.dataset.variant));
        tab.addEventListener('keydown', (event) => {
          const index = tabs.indexOf(tab);
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const next = event.key === 'ArrowRight'
              ? tabs[(index + 1) % tabs.length]
              : tabs[(index - 1 + tabs.length) % tabs.length];
            next.focus();
            activatePanel(next.dataset.variant);
          }
        });
      });

      widget.querySelectorAll('.ia-node').forEach((node) => {
        node.addEventListener('click', () => {
          stopTrace();
          const panel = node.closest('[role="tabpanel"]');
          panel?.querySelectorAll('.ia-node[aria-pressed="true"]').forEach((item) => item.setAttribute('aria-pressed', 'false'));
          node.setAttribute('aria-pressed', 'true');
          setDetail(node.dataset.detail || '');
        });
      });

      playBtn?.addEventListener('click', () => {
        const panel = panels.find((item) => !item.hidden);
        if (!panel) return;
        const nodes = [...panel.querySelectorAll('.ia-node[data-trace]')].sort(
          (a, b) => Number(a.dataset.trace) - Number(b.dataset.trace)
        );
        if (!nodes.length) return;

        if (traceTimer) {
          stopTrace();
          return;
        }

        playBtn.textContent = playBtn.dataset.labelStop || 'Stop';
        let step = 0;

        const showStep = () => {
          nodes.forEach((node, index) => {
            node.classList.toggle('is-active', index === step);
            if (index === step) {
              panel.querySelectorAll('.ia-node[aria-pressed="true"]').forEach((item) => item.setAttribute('aria-pressed', 'false'));
              node.setAttribute('aria-pressed', 'true');
              setDetail(node.dataset.detail || '');
            }
          });
          step += 1;
          if (step >= nodes.length) stopTrace();
        };

        showStep();
        traceTimer = setInterval(showStep, 1400);
      });

      activatePanel(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true')?.dataset.variant || tabs[0]?.dataset.variant);
    });
  }

  window.MicahPortfolio = window.MicahPortfolio || {};
  window.MicahPortfolio.initIaFlow = initIaFlow;
})();
