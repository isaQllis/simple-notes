
export default function turnLightMode(){
    document.getElementById("turn-light-mode").addEventListener("click", () => {
        const htmlClasses = document.getElementsByTagName("html")[0].classList;
        
        if(htmlClasses.contains("simple-bg-black")){
            htmlClasses.remove("simple-bg-black");
            htmlClasses.add("simple-bg-white");

            document.getElementById("search-bar").classList.remove("simple-bg-graphite");
            document.getElementById("search-bar").classList.add("simple-bg-light");

            Array.from(document.getElementsByTagName("simple-button")).forEach( (btn) => {
                
                btn.shadowRoot.getElementById("simple-button").classList.remove("simple-bg-silver");
                btn.shadowRoot.getElementById("simple-button").classList.add("simple-bg-light");
                
            });
            
        } else {
            htmlClasses.remove("simple-bg-white");
            htmlClasses.add("simple-bg-black");

            document.getElementById("search-bar").classList.remove("simple-bg-gray");
            document.getElementById("search-bar").classList.add("simple-bg-graphite");

            Array.from(document.getElementsByTagName("simple-button")).forEach( (btn) => {
               
                btn.shadowRoot.getElementById("simple-button").classList.remove("simple-bg-light");
                btn.shadowRoot.getElementById("simple-button").classList.add("simple-bg-silver");
                
            });
        }
    });
}