// Gestion du scroll pour afficher le menu en fixed
import { scrollPosition } from "./specific/scroll";
window.addEventListener('scroll', scrollPosition.headerPosition);

//gestion des compétences
import "./data/skill"

//gestion des expériences
import "./data/job";

//gestion des formations
import "./data/training";

//gestion des cards de portfolio
import "./data/portfolio";

//gestion en temps réel des menus et boutons en mode mobile et tablet/desktop
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__nav');
    const menuToogle = document.querySelector('.menu__toogle');
    const totop = document.querySelector('.totop');
    const panel= document.querySelector('.panel');
    const panelPop = document.querySelector('.panel__pop');
   
    //gestion du clic pour le menu burger
    const displayNavMobile = () => {
        if (menu.style.display == 'none'){
            menu.style.display = '';
            menu.classList.add('menu__nav__on');
        } else {
            menu.style.display = 'none';
            menu.classList.remove('menu__nav__on');
        }
    }

    menuToogle.addEventListener('click', displayNavMobile);

    //gestion du clic sur le panel en cours de construction
    panel.addEventListener('click', () => {
        panelPop.classList.toggle('hidden');
    })

    //gestion du clic sur le bouton retourner en haut
    totop.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    //gestion de la largeur au chargement de la page
     window.onload = () => {
        const width = window.innerWidth;
        if (width > 899) {
            menu.style.display = '';
            menuToogle.style.display = 'none';
        } else {
            menu.style.display = 'none';
            menuToogle.style.display = '';
        }
    };

    //gestion de la largeur au changement de taille de la fenêtre
    window.onresize = () => {
        const width = window.innerWidth;
        if (width > 899) {
            menu.style.display = '';
            menu.classList.remove('menu__nav__on');
            menuToogle.style.display = 'none';
        } else {
            menu.style.display = 'none';
            menuToogle.style.display = '';
        }
    };
});