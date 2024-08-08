import SimpleNote from "isaqllis.github.io/simple-notes/src/components/simple-note/SimpleNote.js";
import SimpleButton from "isaqllis.github.io/simple-notes/src/components/simple-button/SimpleButton.js";

import makeNote from "isaqllis.github.io/simple-notes/src/scripts/listeners/makeNote.js";
import turnLightMode from "isaqllis.github.io/simple-notes/src/scripts/listeners/turnLightMode.js";

customElements.define("simple-note", SimpleNote);
customElements.define("simple-button", SimpleButton);

makeNote();
turnLightMode();
