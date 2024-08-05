import SimpleNote from "./simple-note-component/SimpleNote.js";

customElements.define("simple-note", SimpleNote);


document.getElementById("make-a-note").addEventListener("click", function () {
    const note = new SimpleNote();
    document.getElementById("notes-placer").appendChild(note);
})