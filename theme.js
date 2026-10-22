const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
function updateThemeControl() {
  const isDark = root.dataset.theme !== 'light';
  toggle.textContent = isDark ? '☀ Light mode' : '☾ Dark mode';
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#11151c' : '#f5f7fa';
}
toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('bbissey-theme', root.dataset.theme); } catch (_) {}
  updateThemeControl();
});
updateThemeControl();
