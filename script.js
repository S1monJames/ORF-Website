function toggleNavbar() {
    var navElement = document.querySelector('nav');
    navElement.classList.toggle('show-navbar');

    var sectionElement = document.querySelector('main > section');
    if (navElement.classList.contains('show-navbar')) {
        sectionElement.style.marginTop = '200px';
    } else {
        sectionElement.style.marginTop = '0';
    }
}
