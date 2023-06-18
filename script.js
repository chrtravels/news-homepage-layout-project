const hamburgerMenu = document.getElementsByClassName('mobile-nav-toggle');
hamburgerMenu[0].addEventListener("click", openMobileMenu);

const mobileMenu = document.getElementById('mobile-nav-menu');
const overlay = document.getElementById('overlay');

const closeMobileMenuBtn = document.getElementsByClassName('close-btn');
closeMobileMenuBtn[0].addEventListener("click", closeMobileMenu);

let menuOpen = false;

function openMobileMenu () {
  menuOpen = true;
  overlay.style.display = 'block';
  mobileMenu.style.width = '70vw';
}

function closeMobileMenu () {
  menuOpen = false;
  overlay.style.display = 'none';
  mobileMenu.style.width = '0';
}
