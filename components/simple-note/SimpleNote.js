const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/components/simple-note/simple-note-styles.css">

    <!-- Animação para não aparecer html sem estilização -->
    <style>
        section { opacity: 0; animation: fadeIn 0.2s ease-in-out forwards;}
        @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }}
    </style>

    <section id="simple-note" class="note">
        <input class="note-title" type="text" name="title" placeholder="Título">
        <textarea class="note-content" name="content" placeholder="Escreva sua nota aqui..."></textarea>
    </section>`;

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

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {

        if(name === "title") {
            this.title = newValue;
        }

        if(name === "color") {

            this.color = newValue; 
        }
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
        
        this.#color = newValue;
        classList.add("notes-bg-" + this.#color);
        
        
    }

    get title() {
        this.#name;
    }

    get color() {
        this.#color;
    }
    
}

export default SimpleNote;