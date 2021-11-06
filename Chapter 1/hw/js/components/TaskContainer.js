const $template = document.createElement('template');

$template.innerHTML = `
<div class="task-container">
    <input type="checkbox" class="checkbox" />
    <div class="task-description col-11">
        <div class="task-name"></div>
        <div class="added-date"></div>
    </div>
    <div class="remove-btn">
        <i class="fal fa-trash-alt"></i>
    </div>
</div>
`;

export default class TaskContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$taskName = this.querySelector('.task-name');
        this.$addedDate = this.querySelector('.added-date');
    }

    static get observedAttributes() {
        return ['name', 'date'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {

            case 'name':
                console.log(3);
                this.$taskName.innerHTML = newValue;
                console.log(this.$taskName);
                break;
            case 'date':
                console.log(4);
                this.$addedDate.innerHTML = newValue;
                console.log(this.$addedDate);
                break;
        }
    }
}

window.customElements.define('task-container', TaskContainer);