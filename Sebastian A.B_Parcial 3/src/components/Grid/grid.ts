import "./line"
import "../export"

export enum AttributeG{
    "btn" = "btn"
}

export default class Grid extends HTMLElement{
    btn?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeG,null> ={
            btn: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propname: AttributeG, oldValue: string, newValue: string){
        switch (propname) {
            default:
                this[propname] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    // submitform(){
    //     addDoc
    // }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = '';

        const grid =  this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(grid);

        const line2 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line2);

        const line3 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line3);

        const line4 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line4);

        const line5 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line5);

        const line6 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line6);

        const line7 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line7);

        const line8 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line8);

        const line9 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line9);

        const line10 = this.ownerDocument.createElement('app-line');
        grid.appendChild(line10);
        
        }
    }
}

customElements.define('app-grid', Grid);