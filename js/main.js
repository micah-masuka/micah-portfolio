const THEME_KEY = 'micah-theme';

localStorage.removeItem('color-scheme');

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const themeMeta = document.querySelector('meta[name="color-scheme"]');
const themeToggle = document.querySelector('.theme-toggle');

const applyTheme = (theme) => {
  if (themeMeta) themeMeta.content = theme;
  document.documentElement.classList.toggle('theme-dark', theme === 'dark');
  document.documentElement.style.removeProperty('color-scheme');
};

const currentTheme = () => (document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light');

const syncThemeToggle = () => {
  if (!themeToggle) return;
  const dark = currentTheme() === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
};

applyTheme(localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light');

themeToggle?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
  syncThemeToggle();
});

syncThemeToggle();

const micaCompanion = document.querySelector('[data-mica-companion]');
const micaSprite = document.querySelector('[data-mica-sprite]');
const micaBubble = document.querySelector('[data-mica-bubble]');
const micaStage = document.querySelector('.mica-stage');
const micaClose = document.querySelector('.mica-close');

if (micaCompanion && micaSprite && micaBubble && micaStage && micaClose) {
  const micaStates = ['is-waving', 'is-happy', 'is-curious'];
  const micaMessages = [
    'Hello! I’m Mica. Micah notices the details; I supervise them.',
    'Curious about the work? The case studies are just below.',
    'Purr-fect interfaces should feel clear, friendly, and calm.'
  ];
  let micaMessageIndex = 0;
  let micaBubbleTimer;

  const setMicaState = (state = 'is-idle') => {
    micaSprite.className = `mica-sprite ${state}`;
  };

  const showMicaBubble = (message, duration = 5200) => {
    const text = micaBubble.querySelector('p');
    if (text && message) text.textContent = message;
    micaBubble.classList.add('is-visible');
    window.clearTimeout(micaBubbleTimer);
    micaBubbleTimer = window.setTimeout(() => micaBubble.classList.remove('is-visible'), duration);
  };

  const blink = () => {
    if (micaSprite.classList.contains('is-idle')) {
      setMicaState('is-blinking');
      window.setTimeout(() => setMicaState(), 180);
    }
  };

  const walkInPlace = () => {
    if (!micaSprite.classList.contains('is-idle')) return;
    setMicaState('is-walking-one');
    window.setTimeout(() => setMicaState('is-walking-two'), 260);
    window.setTimeout(() => setMicaState('is-walking-one'), 520);
    window.setTimeout(() => setMicaState(), 780);
  };

  micaStage.addEventListener('click', () => {
    const state = micaStates[micaMessageIndex % micaStates.length];
    const message = micaMessages[micaMessageIndex % micaMessages.length];
    micaMessageIndex += 1;
    setMicaState(state);
    showMicaBubble(message);
    window.setTimeout(() => setMicaState(), 1500);
  });

  micaClose.addEventListener('click', () => {
    micaCompanion.hidden = true;
    window.sessionStorage.setItem('mica-away', 'true');
  });

  if (window.sessionStorage.getItem('mica-away') === 'true') {
    micaCompanion.hidden = true;
  } else {
    window.setTimeout(() => showMicaBubble(), 1100);
    window.setInterval(blink, 4200);
    window.setInterval(walkInPlace, 11000);
  }
}
