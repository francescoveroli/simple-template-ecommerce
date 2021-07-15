document.addEventListener('scroll', () => {
    let nav = document.querySelector('#nav');
    if (window.pageYOffset > 50) {
        nav.classList.remove('bg-transparent');
        nav.classList.remove('navbar-light')
        nav.style.backgroundColor = "#B095DB";
        nav.style.color = ("#FFFFFF");
        nav.classList.add('bg-accent');
        nav.style.transition = "0.4s";

    } else {
        nav.classList.remove('bg-accent');
        nav.classList.add('bg-transparent');
        nav.classList.add('navbar-light');
    }
    let btn = document.querySelector('#buscar');
    if (window.pageYOffset > 50) {

        btn.classList.add('text-white')
    } else {
        btn.classList.remove('text-white');
    }
})

ScrollReveal().reveal('.headline', { duration: 1500, delay: 500, distance: '80px', interval: 600, easing: 'cubic-bezier(0.5, 0, 0, 1)' });