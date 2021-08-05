const $template = document.createElement('template');

$template.innerHTML = `
<div class="result">
    <fieldset>
    <div class="result-block">
        <label for="name">Name: </label>
        <div id="name"></div>
    </div>
    <div class="result-block">
        <label for="email">Email: </label>
        <div id="email"></div>
    </div>
    <div class="result-block">
        <label for="company">Company: </label>
        <div id="company"></div>
    </div>
    <div class="result-block">
        <label for="follower">Follower: </label>
        <div id="follower"></div>
    </div>
    </fieldset>
</div>
<fieldset id="right">
    <div class="result-block" >
        <label for="avatar">Avatar:</label>
        <div id="avatar"></div>
    </div>
</fieldset>
`;

export default class ResultTable extends HTMLElement {
    constructor()
    {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('#name');
        this.$email = this.querySelector('#email');
        this.$company = this.querySelector('#email');
        this.$follower = this.querySelector('#follower');
        this.$avatar = this.querySelector('#avatar');
    };

    static get observedAttributes() {
        return ['name', 'email', 'company', 'follower', 'avatar'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'name':
                this.$name.innerHTML = newValue;
            case 'email':
                this.$email.innerHTML = newValue;
            case 'company':
                this.$company.innerHTML = newValue;
            case 'follower':
                this.$follower.innerHTML = newValue;
            case 'avatar':
                this.$avatar.style.background = `url(${newValue})`;
        }
    }
};

window.customElements.define('result-table', ResultTable);