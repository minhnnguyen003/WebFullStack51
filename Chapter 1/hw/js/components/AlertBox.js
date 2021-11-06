const $template = document.createElement('template');

$template.innerHTML = `
<div class="col-12 error-message" id="error-message"><strong>Alert!</strong> You cannot insert blank task</div>
`;

export default class AlertMessage extends HTMLElement {
    constructor() {
        super();
        
        this.appendChild($template.content.cloneNode(true));
    }
};

window.customElements.define('alert-message', AlertMessage)