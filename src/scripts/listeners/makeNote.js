import SimpleNote from "/src/components/simple-note/SimpleNote.js";

var cont = -1;

export default function makeNote(){
    document.getElementById("make-note").addEventListener("click", () => {
        if(cont > 2) cont = 0;
        else cont++;

        const colors = ["yellow", "green", "blue", "pink"];
        const note = new SimpleNote("", colors[cont]);
        document.getElementById("notes-placer").appendChild(note);
    })
}
