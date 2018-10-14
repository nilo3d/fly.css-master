/*
    Menu for your website/webapp/mobileapp.
*/
class Menu{
    show(menuId){
        let menu = document.querySelector("#"+menuId);
        menu.classList.toggle('menu-side-hide');
    }
}