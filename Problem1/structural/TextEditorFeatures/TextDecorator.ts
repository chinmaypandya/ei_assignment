// TextDecorator.ts
// Abstract decorator class for text editor features.

import { TextEditor } from "./TextEditor";

export abstract class TextDecorator extends TextEditor {
    protected editor: TextEditor;

    constructor(editor: TextEditor) {
        super();
        this.editor = editor;
    }

    // Override the display method to include the base editor's functionality
    public display(): void {
        this.editor.display();
    }
}
