import "../squareB/square"
import "../export"

export enum AttributeLine{
    "btn" = "btn"
}

export default class Line extends HTMLElement{
    btn?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeLine,null> ={
            btn: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propname: AttributeLine, oldValue: string, newValue: string){
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

        const line =  this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(line);

        const btn2 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn2);

        const btn3 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn3);

        const btn4 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn4);

        const btn5 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn5);

        const btn6 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn6);

        const btn7 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn7);

        const btn8 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn8);

        const btn9 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn9);

        const btn10 = this.ownerDocument.createElement('app-square');
        line.appendChild(btn10);
        }
    }
}

customElements.define('app-line', Line);