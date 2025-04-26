
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme', 'dark');
});
