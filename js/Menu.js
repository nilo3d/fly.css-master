/*
    Menu
*/
class Menu{
    constructor(menuId){
        this._menu = document.querySelector("#"+menuId);
    }
    toggle(){
        this._menu.classList.toggle('menu-side-hide');
    }
}
menu = new Menu('fly-global-menu');