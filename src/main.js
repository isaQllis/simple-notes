import SimpleNote from "/src/components/simple-note/SimpleNote.js";
import SimpleButton from "/src/components/simple-button/SimpleButton.js";

import makeNote from "/src/scripts/listeners/makeNote.js";
import turnLightMode from "/src/scripts/listeners/turnLightMode.js";

customElements.define("simple-note", SimpleNote);
customElements.define("simple-button", SimpleButton);

makeNote();
turnLightMode();