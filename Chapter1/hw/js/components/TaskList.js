import TaskContainer from "./TaskContainer.js"; 

const $template = document.createElement('template');

$template.innerHTML = `
    <div class="task-list col-10"></div>
`;

export default class TaskList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$taskList = this.querySelector('.task-list');
    }

    static get observedAttributes() {
        return ['list']
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'list':
                let datas = JSON.parse(newValue);
                for(let data of datas)
                {
                    console.log(data);
                    let $taskContainer = new TaskContainer();
                    $taskContainer.setAttribute('name', data.name);
                    $taskContainer.setAttribute('date', data.date);

                    this.$taskList.appendChild($taskContainer)
                }
                break;
        }
    }
}

window.customElements.define('task-list', TaskList);