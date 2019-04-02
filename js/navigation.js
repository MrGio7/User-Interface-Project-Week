class Dropdown{
    constructor(element){
        this.element = element;
        this.buttons = this.element.querySelector('.dropdown-btn');
        this.buttonOpen = this.element.querySelector('.dropdown-btn-open');
        this.buttonClose = this.element.querySelector('.dropdown-btn-close');
        this.menuContent = this.element.querySelector('.menu-content');

        this.buttons.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu(){
        this.buttonOpen.classList.toggle('btn-hide');
        this.buttonClose.classList.toggle('btn-hide');
        this.menuContent.classList.toggle('hide-content');
    }
}








let dropdown = document.querySelectorAll('.dropdown').forEach(e => new Dropdown(e))