// Essa classe não deve ser implementada diretamente

class SimpleColorizedElement extends HTMLElement {

    #validColors;
    
    constructor () {
        
        super();

        this.validColors = ["pink", "blue", "yellow", "green"];

    }

    buildColorUnderShadow(classList) {

        // Remove cor atual
        this.validColors.forEach((colors) => {
            if(classList.toString().includes(colors))
                classList.remove("simple-bg-" + colors);
        });

        // Insere nova cor
        classList.add("simple-bg-" + this.color);

    }

    set validColor(colors) {
        this.#validColors = colors;
    }
    get validColor(){
        return this.#validColors;
    }
    
}

export default SimpleColorizedElement;