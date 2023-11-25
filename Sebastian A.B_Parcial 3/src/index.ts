import "./components/export"
import "./Screens/dashboard.ts"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        const dashBoard = this.ownerDocument.createElement('app-grid'); //app-game || app-dash
        something.appendChild(dashBoard);
    }
}

customElements.define('app-container', AppContainer)