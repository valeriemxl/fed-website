// JavaScript Document

/*
HAMBURGERMENU
  26. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  27. ChatGPT prompt: wat gebeurt er als je met classList.toggle een class toevoegt of verwijdert om een menu te openen en te sluiten? Geef voorbeelden en leg uit.
*/

// Selecteer beide knoppen, of ze nu de id 'menu-btn' of 'menu-btn-vergelijken' hebben
const menuBtns = document.querySelectorAll('#menu-btn, #menu-btn-vergelijken');
const menuOverlay = document.querySelector('#menu-overlay');

// Voeg event listener toe aan elke gevonden menuknop
menuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    menuOverlay.classList.toggle('show'); // Toggle het menu in/uit
  });
});

// Sluiten wanneer je buiten het menu klikt
if (menuOverlay) {
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('show');
    }
  });
}


// function lightDarkMode() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
// }

function lightDarkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  // Zoek de knop en verander de tekst op basis van de huidige modus
  let button = document.querySelector(".light-dark-mode button");
  if (element.classList.contains("dark-mode")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}
