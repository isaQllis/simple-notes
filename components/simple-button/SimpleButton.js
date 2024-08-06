const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/simple-button/simple-button-styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">

    <!-- Animação para não aparecer html sem estilização -->
    <style>
        section { opacity: 0; animation: fadeIn 0.2s ease-in-out forwards;}
        @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }}
    </style>

    <button id="simple-button" class="notes-btn notes-bg-silver">
        <span id="button-icon" class="material-symbols-outlined"></span>
    </button>`;

class SimpleButton extends HTMLElement {
    
    #icon;
    #design;

    constructor(icon, design) {

        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.icon = icon;
        this.design = design;
    }

    static get observedAttributes() {
        return ["icon"];
    }

    connectedCallback() {
        
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "icon") {
            this.icon = newValue;
        }
    }

    set icon(newValue) {
        console.log(newValue);
        const validIcons = ["ink_pen", "close", "dark_mode"];
        if(!newValue || newValue === "" || !validIcons.includes(newValue)){
            newValue = "question_mark";   
        }

        this.#icon = newValue;
        const icon = this.shadowRoot.getElementById("button-icon").innerHTML = this.icon;
    }

    set design(newValue) {
        this.#design = newValue;
    }

    get icon() {
        return this.#icon;
    }

    get design() {
        return this.#design;
    }
    
}

export default SimpleButton;