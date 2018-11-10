/*
    Menu
*/
class Menu{
    constructor(menuId){
        this._menu = document.querySelector("#"+menuId);
    }

    // Open/Close the global menu
    toggle(){
        this._menu.classList.toggle('menu-side-show');
    }

    // Ao clicar em uma opção do menu global, coloca o conteudo na section content, em seguida fecha o menu
    click_item(item){
        this._item = item.id;
        menu.getContentPage(this._item);
        menu.toggle();
    }

    // Pega o conteudo da página especificada
    getContentPage(name){
        $.get('../'+name, function(data){
            $(".content").html(data);
        });
    }
}
menu = new Menu('fly-global-menu');
