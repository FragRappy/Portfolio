export const scrollPosition = {
    headerPosition: function () {
        const lastScrollCheck = Math.round(window.scrollY);
        const menuFix = document.querySelector('.menu');
        const totop = document.querySelector('.totop');
        lastScrollCheck > 100 ? menuFix.classList.add('menu__fixed') : menuFix.classList.remove('menu__fixed');
        lastScrollCheck > 1? totop.style.display ='flex' : totop.style.display ='none';
    }
};