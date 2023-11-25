export enum AttributeForm {
    "name" = "name",
    "color" = "color",
    "letter" = "letter",
}

export default class Form extends HTMLElement{
    name?: string;
    color?: string;
    letter?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeForm,null> ={
            name: null,
            color: null,
            letter:null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propname: AttributeForm, oldValue: string, newValue: string){
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

        const sect = this.ownerDocument.createElement('section');
        this.shadowRoot?.appendChild(sect);

        const form = this.ownerDocument.createElement('form');
        sect.appendChild(form);

        const textN = this.ownerDocument.createElement('input');
        textN.setAttribute("placeholder", `Give yourself a name`)
        textN.setAttribute("type", "text");

        const color = this.ownerDocument.createElement('input');
        color.setAttribute("type", "color");

        const textL = this.ownerDocument.createElement('input');
        textL.setAttribute("placeholder", `Give yourself one letter`)
        textL.setAttribute("type", "text");
        
        form.appendChild(textN);
        form.appendChild(color);
        form.appendChild(textL);

        const btn = this.ownerDocument.createElement ('button');
        btn.innerText = "Subir datos"
        // btn.addEventListener(this.submitform);
        }
    }
}

customElements.define('app-form', Form);