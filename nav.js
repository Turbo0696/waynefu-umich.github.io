// Mobile hamburger
function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Journal dropdown — click to toggle
document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.nav-dropdown');
  if (!dropdown) return;

  var label = dropdown.querySelector('.nav-dropdown-label');
  var menu  = dropdown.querySelector('.dropdown-menu');

  // Toggle on label click
  if (label) {
    label.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    });
  }

  // Also open on any click inside the dropdown wrapper
  dropdown.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') return;
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', function () {
    menu.classList.remove('open');
  });

  // Keep menu open when clicking inside it
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
