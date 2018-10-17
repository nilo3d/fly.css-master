/*
    Menu
*/
class Menu{
    constructor(menuId){
        this._menu = document.querySelector("#"+menuId);
    }
    toggle(){
        this._menu.classList.toggle('menu-side-show');
    }
}
menu = new Menu('fly-global-menu');
