const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="/src/components/simple-note/simple-note-styles.css">

    <!-- Animação para não aparecer os elementos antes de carregar as estilizações do css -->
    <style>
        section { opacity: 0; animation: fadeIn 0.8s ease-in-out forwards;}
        @keyframes fadeIn {
            0% { opacity: 0; transform: scale(1.20); }
            100% { opacity: 1; transform: scale(1); }}
    </style>

    <section id="simple-note" class="note">
        <input class="note-title" type="text" name="title" placeholder="Título">
        <simple-button id="delete-button" icon="delete" color=""></simple-button>
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
        console.log("Um componente <simple-note> foi conectado");
        this.shadowRoot.getElementById("delete-button").addEventListener("click", () => {
            this.remove();
        });
    }

    disconnectedCallback() {
        console.log("Um componente <simple-note> foi desconectado");
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
        if(!newValue || newValue == "" || !validColors.includes(newValue)){
            newValue = validColors[Math.floor(Math.random() * validColors.length)];
        }

        
        
        this.#color = newValue;
        this.#buildColorUnderShadow(validColors);
        
    }

    #buildColorUnderShadow(validColors) {
        const noteClasses = this.shadowRoot.getElementById("simple-note").classList;

        // Remove cor atual
        validColors.forEach((colors) => {
            if(noteClasses.toString().includes(colors))
                noteClasses.remove("notes-bg-" + colors);
        });

        // Insere nova cor
        noteClasses.add("notes-bg-" + this.color);

        // Muda cor do botão de exclusão
        this.shadowRoot.getElementById("delete-button").setAttribute("color", this.color);
    }

    get title() {
        return this.#name;
    }

    get color() {
        return this.#color;
    }
    
}

export default SimpleNote;