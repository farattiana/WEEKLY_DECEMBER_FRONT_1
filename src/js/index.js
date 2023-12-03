//Mobile Menu
const BurgerMenu = document.getElementById('burger-menu');
const BurgerClose = document.getElementById('burger-close');
const mobileNavbar = document.querySelector('.mobile-links-container');
const mobilelinks = document.querySelectorAll('.mobile-link-item');

BurgerMenu.addEventListener('click' , () => {
  mobileNavbar.classList.add('is-active');
  mobileNavbar.classList.remove('hide')
  mobileNavbar.classList.add('show')
})

BurgerClose.addEventListener('click', () => {
  mobileNavbar.classList.remove('is-active')
  mobileNavbar.classList.add('hide')
  mobileNavbar.classList.remove('show')
})

mobilelinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavbar.classList.remove('is-active')
    mobileNavbar.classList.add('hide')
    mobileNavbar.classList.remove('show')
})
})