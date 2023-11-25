import "../components/export"

export default class DashB extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = '';
    
    const formI = this.ownerDocument.createElement('app-form');
    this.shadowRoot?.appendChild(formI);
    
    }
    }
}

customElements.define('app-dash', DashB);