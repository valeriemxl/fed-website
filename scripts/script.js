// JavaScript Document
console.log("hi");

const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.toggle('show'); // Toggle het menu in/uit
});

// Sluiten wanneer je buiten het menu klikt
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove('show');
  }
});


