const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLovo = document.querySelector('#navbar__logo')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)



// // Show active menu when scrolling
// const highlightMenu = () => {
//     const elem = documnet.querySelector('.highlight')
//     const homeMenu = documnet.querySelector('#home-page')
//     const aboutMenu = documnet.querySelector('#about-page')
//     const projectsMenu = documnet.querySelector('#projects-page')
//     let scrollPos = window.scrollY

//     // add highlight class to menu items (on desktop)
//     if (window.innerWidth >960 && scrollPos < 600) {
//         homeMenu.classList.add('highlight')
//         aboutMenu.classList.remove('highlight')
//         return
//     } 
//     else if (window.innerWidth >960 && scrollPos < 1400) {
//         aboutMenu.classList.add('highlight')
//         homeMenu.classList.remove('highlight')
//         projectsMenu.classList.remove('highlight')
//         return
//     }
//     else if (window.innerWidth >960 && scrollPos < 2345) {
//         projectsMenu.classList.remove('highlight')
//         aboutMenu.classList.remove('highlight')
//         return
//     }

//     if((elem && window.innerWidth<960 && scrollPos<600) || elem) {
//         elem.classList.remove('highlight');
//     }

//     window.addEventListener('scroll', highlightMenu)
//     window.addEventListener('click', highlightMenu)
// }