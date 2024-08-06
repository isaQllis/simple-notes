import SimpleNote from "/components/simple-note/SimpleNote.js";
import SimpleButton from "/components/simple-button/SimpleButton.js";

customElements.define("simple-note", SimpleNote);
customElements.define("simple-button", SimpleButton);

document.getElementById("make-a-note").addEventListener("click", () => {
    const note = new SimpleNote();
    document.getElementById("notes-placer").appendChild(note);
})

document.getElementById("window-mode").addEventListener("click", () => {
    const htmlClasses = document.getElementsByTagName("html")[0].classList;
    
    if(htmlClasses.contains("notes-bg-black")){
        htmlClasses.remove("notes-bg-black");
        htmlClasses.add("notes-bg-white");

        document.getElementById("search-bar").classList.remove("notes-bg-graphite");
        document.getElementById("search-bar").classList.add("notes-bg-light");

        Array.from(document.getElementsByTagName("simple-button")).forEach( (btn) => {
            console.log(btn.shadowRoot);
            btn.shadowRoot.getElementById("simple-button").classList.remove("notes-bg-silver");
            btn.shadowRoot.getElementById("simple-button").classList.add("notes-bg-light");
        });
        
    } else {
        htmlClasses.remove("notes-bg-white");
        htmlClasses.add("notes-bg-black");

        document.getElementById("search-bar").classList.remove("notes-bg-gray");
        document.getElementById("search-bar").classList.add("notes-bg-graphite");

        Array.from(document.getElementsByTagName("simple-button")).forEach( (btn) => {
            console.log(btn.shadowRoot);
            btn.shadowRoot.getElementById("simple-button").classList.remove("notes-bg-light");
            btn.shadowRoot.getElementById("simple-button").classList.add("notes-bg-silver");
        });
    }
});