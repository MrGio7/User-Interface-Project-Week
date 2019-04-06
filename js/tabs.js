class TabLink{
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;

        this.content = document.querySelectorAll(`.tab-content[data-tab="${this.tabData}"]`)

        this.content = Array.from(this.content).map( e => new TabContent(e));

        this.tabElement.addEventListener('click', () => this.selectTab());
    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab');

        Array.from(tabs).forEach(tabs => tabs.classList.remove('active-tab'));

        const content = document.querySelectorAll('.tab-content');

        Array.from(content).forEach(content => content.style.display="none");

        this.tabElement.classList.add("active-tab");

        this.content.forEach(content => content.selectContent());
    }
}


class TabContent{
    constructor(contElement){
        this.contElement = contElement;
    }
    selectContent(){
        this.contElement.style.display="flex";
    }
}



















const tabs = document.querySelectorAll('.tab').forEach(event => new TabLink(event));