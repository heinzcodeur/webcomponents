class UserCardElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const firstName = this.getAttribute('first-name')
        console.log(firstName)
        const lastName = this.getAttribute('last-name')
        this.shadowRoot.innerHTML = `
                    <style>
                        h2{
                        color:red
                        }
                        
                        ::slotted(span){
                        color: green;
                        font-family: Tahoma;
                        }
                    </style>
                    <h2>${firstName} ${lastName}</h2>
                    <slot name="span"></slot>
                    <slot name="strong"></slot>
        Bonjour tout le monde`;
    }
}

window.customElements.define('user-card', UserCardElement)