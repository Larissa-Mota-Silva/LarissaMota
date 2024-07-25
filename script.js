document.addEventListener('DOMContentLoaded', () => {
    //Rlagem suave da página
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    //Menu hamburguer
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Inicialize o AOS
    AOS.init({
        once: false // Garante que a animação ocorra toda vez que o elemento entra na viewport
    });
});