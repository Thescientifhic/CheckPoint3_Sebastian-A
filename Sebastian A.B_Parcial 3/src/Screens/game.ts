import "../components/export"
import "../components/Grid/grid"

export default class Game extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = '';
    
    const gridG = this.ownerDocument.createElement('app-grid');
    this.shadowRoot?.appendChild(gridG);
    
    }
    }
}

customElements.define('app-game', Game);


