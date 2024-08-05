const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./css/reset.css">
<link rel="stylesheet" href="./simple-note-component/note-component-styles.css">
<link rel="stylesheet" href="./css/notes-colors.css">
<section id="simple-note" class="note">
    <input
        class="note-title"
        type="text"
        name="title"
        placeholder="Título">

    <textarea class="note-content" name="content" placeholder="Escreva sua nota aqui..."></textarea>

</section>
`

class SimpleNote extends HTMLElement {

    #id;
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

    set id(newValue) {
        this.#id = newValue;
    }

    set title(newValue) {
        this.#name = newValue;
    }

    set color(newValue) {
        const validColors = ["pink", "blue", "yellow", "green"];
        
        if(!newValue || newValue == "" || validColors.includes(newValue)){
            newValue = validColors[Math.floor(Math.random() * validColors.length)];
        }

        console.log(this.shadowRoot.firstElementChild.nextElementSibling);
        const classList = this.shadowRoot.getElementById("simple-note").classList;

        if(classList.length > 1) {
            classList.remove(classList[classList.length - 1]);
            
        } 
                
        classList.add("notes-bg-" + newValue);
        
    }

    get id() {
        this.#id;
    }

    get title() {
        this.#name;
    }

    get color() {
        this.#color;
    }
    
}

export default SimpleNote;