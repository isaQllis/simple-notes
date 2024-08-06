import template from "./simple-note-template.js";

class SimpleNote extends HTMLElement {

    #name;
    #color;
    
    #text;
    #createdDate;
    #modifiedDate;

    #state;

    /**
     * @param {string} name 
     * @param {string} color 
     */
    constructor (title, color) {
        
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.title = title;
        this.color = color;

    }

    static get observedAttributes() {
        return ["title", "color"];
    }

    connectedCallback() {
        
    }

    attributeChangedCallback (name, oldValue, newValue) {

        if(name === "title") {
            this.title = newValue;
        }

        if(name === "color") {

            this.color = newValue; 
        }
    }

    disconnectedCallback() {

    }

    set title(newValue) {
        this.#name = newValue;
    }

    set color(newValue) {
        const validColors = ["pink", "blue", "yellow", "green"];
        
        // Caso não seja especificado a cor, coloca uma aleatória
        if(!newValue || newValue == "" || validColors.includes(newValue)){
            newValue = validColors[Math.floor(Math.random() * validColors.length)];
        }

        const classList = this.shadowRoot.getElementById("simple-note").classList;

        // Caso já possua uma cor, a remove e coloca a nova
        if(classList.length > 1) {
            classList.remove(classList[classList.length - 1]);
            
        } 
                
        classList.add("notes-bg-" + newValue);
        
    }

    get title() {
        this.#name;
    }

    get color() {
        this.#color;
    }
    
}

export default SimpleNote;