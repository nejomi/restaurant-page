import home from './home';
import menu from './menu';
import contact from './contact';

(function () {
    const main = document.querySelector('main');

    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');
    
    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    contactButton.addEventListener("click", loadContact)

    function clearMain () {
        main.innerHTML = "";
    }

    function loadHome () {
        clearMain();
        home.render();
    }

    function loadMenu () {
        clearMain();
        menu.render();
    }

    function loadContact () {
        clearMain();
        contact.render();
    }

    window.addEventListener("load", loadHome);
 }
)()

