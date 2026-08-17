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
