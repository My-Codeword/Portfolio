let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

    sections.forEach(sec => {


        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll(`header nav a[href*=${id}]`).forEach(link => link.classList.add('active'));
            });

        };
    });

    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    if (menuIcon.classList.contains('bx-x') && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};


ScrollReveal({
    // reset: true,
    distance: '88px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.blog-container,.Portfolio-box,.Contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img,', { origin: 'left' });

ScrollReveal().reveal('.home-content p,.about-content,', { origin: 'right' });

// multiple word code

const text = document.querySelector(".multiple-text")
const textload = () => {
    setTimeout(() => {

        text.textContent = "Freelancer";
    }, 0);

    setTimeout(() => {
        text.textContent = "Devloper";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Coder";
    }, 8000);

}





