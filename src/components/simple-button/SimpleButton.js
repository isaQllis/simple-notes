import SimpleColorizedElement from "/src/classes/SimpleColorizedElement.js";

const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/src/components/simple-button/simple-button-styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">

    <!-- Animação para não aparecer os elementos antes de carregar as estilizações do css -->


    <button id="simple-button" class="simple-btn">
        <span id="button-icon" class="material-symbols-outlined"></span>
    </button>`;

class SimpleButton extends SimpleColorizedElement {
    
    #icon;
    #color;
    #size;

    /**
     * 
     * @param {string} icon 
     * @param {string} color 
     * @param {string} size 
     */
    constructor(icon, color) {

        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.icon = icon;
        this.color = color;
    }

    static get observedAttributes() {
        return ["icon", "color"];
    }

    connectedCallback() {
        
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "icon") {
            this.icon = newValue;
        }

        if(name === "color") {
            this.color = newValue;
        }
    }

    set icon(newValue) {
        const validIcons = ["ink_pen", "delete", "dark_mode"];
        if(!newValue || newValue === "" || !validIcons.includes(newValue)){
            newValue = "question_mark";   
        }

        this.#icon = newValue;
        this.shadowRoot.getElementById("button-icon").innerHTML = this.icon;
    }

    set color(newValue) {

        if(!newValue || newValue === "" || !this.validColors.includes(newValue)){
            newValue = "silver";   
        }

        this.#color = newValue;

        // Chama método da classe herdada para adicionar cor ao elemento
        const btnClasses = this.shadowRoot.getElementById("simple-button").classList;
        super.buildColorUnderShadow(btnClasses);
    }
    
    get icon() {
        return this.#icon;
    }

    get color() {
        return this.#color;
    }
    
}

export default SimpleButton;