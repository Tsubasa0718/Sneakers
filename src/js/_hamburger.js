const Hamburger = document.getElementById('hamburger-menu');
const Nav = document.querySelector('.nav');
const Mask = document.getElementById('mask');

Hamburger.addEventListener('click',()=>{
    const Expanded = Hamburger.getAttribute('aria-expanded');
   if(Expanded === 'false'){
    Hamburger.setAttribute('aria-expanded', 'true');
    Hamburger.classList.add('is-active');
    Nav.setAttribute('aria-hidden', 'false');
    Nav.classList.add('is-active');
    Mask.classList.add('is-active')
   }else{
    Hamburger.setAttribute('aria-expanded', 'false');
    Hamburger.classList.remove('is-active');
    Nav.setAttribute('aria-hidden', 'true');
    Nav.classList.remove('is-active');
    Mask.classList.remove('is-active')
   }
})