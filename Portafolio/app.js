
const barraNavAnim = () => {
    const mobileBurger = document.querySelector('.mobile-burger');
    const nav = document.querySelector('.barra-nav-primaria')
    const linksNav = document.querySelectorAll('.barra-nav-primaria li')

    mobileBurger.addEventListener('click', () => {

      nav.classList.toggle('barra-nav-primaria-active');

      linksNav.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `fadeInBarraNav 0.5s ease forwards ${index/5 + 1}s`
        }
        
      });
      mobileBurger.classList.toggle('toggle');
    });
}

barraNavAnim();
