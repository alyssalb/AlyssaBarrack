const toggleBtn = document.getElementById('mode-toggle');

// Set initial label based on starting theme
function updateButtonLabel() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  toggleBtn.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Toggle between light and dark
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateButtonLabel();
});

// Initialize label on page load
updateButtonLabel();
