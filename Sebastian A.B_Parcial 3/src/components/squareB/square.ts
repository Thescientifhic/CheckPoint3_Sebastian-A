export enum AttributeBtn{
    "btn" = "btn"
}

export default class Btn extends HTMLElement{
    btn?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeBtn,null> ={
            btn: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propname: AttributeBtn, oldValue: string, newValue: string){
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
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
        <button></button>
        `;
        }
    }
}

customElements.define('app-square', Btn);