async function cssRequest(url){
    const response = await fetch(url);
    return response.text();
}

const styles = await cssRequest("./simple-note-component/note-component-styles.css");

const template = document.createElement("template");

template.innerHTML = `
<style> ${styles} </style>

<section id="simple-note" class="note">
    <input
        class="note-title"
        type="text"
        name="title"
        placeholder="Título">

    <textarea class="note-content" name="content" placeholder="Escreva sua nota aqui..."></textarea>

</section>`;

/* Com o Método abaixo a estilização da nota demora alguns milisegundos para
    carregar após <section> ser anexado à página.

template.innerHTML = `
<link rel="stylesheet" href="./simple-note-component/note-component-styles.css">

<section id="simple-note" class="note">
    <input
        class="note-title"
        type="text"
        name="title"
        placeholder="Título">

    <textarea class="note-content" name="content" placeholder="Escreva sua nota aqui..."></textarea>

</section>`;
*/

export default template;